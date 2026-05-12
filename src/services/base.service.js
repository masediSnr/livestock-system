const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
const sharp = require("sharp");


exports.create = (Model)=> async (data)=> {
    if (data.key_code) {
        const hashedPass = await bcrypt.hash(data.key_code,10)
        const user = Model.create({...data,key_code: hashedPass});
        return user
    }

    if (data.file) {
      let processedBuffer;
      const { mimetype, buffer } = data.file;
      
      // 1. Logic: Compression/Resizing
      if (mimetype.startsWith('image/')) {
        processedBuffer = await sharp(buffer)
          .resize(1000)
          .jpeg({ quality: 75 })
          .toBuffer();

          
          
      } else if (mimetype === 'application/pdf') {
        const pdfDoc = await PDFDocument.load(buffer);
        processedBuffer = Buffer.from(await pdfDoc.save());
      }
     data["file"] = processedBuffer
     data["mime_type"] = mimetype
    }
    
    Model.create(data);
}
exports.getAll = (Model)=> async (data)=> Model.findAll();
exports.getById = (Model)=> async (id)=> {
    return await Model.findByPk(id);
}
exports.search = (Model)=> async (searchTerm)=> {
    return await Model.findAll({
      where: {
        [Op.or]:[
          {Animal_ID: {[Op.iLike]: searchTerm+"%"}},
          {species: {[Op.iLike]: searchTerm+"%"}},
          {current_camp: {[Op.iLike]: searchTerm+"%"}},
        ]
      }
      ,
      include: {
        all: true,
        nested: true
      }
    });
}
exports.overview = (Model)=> async (id)=> {

    const result = await Model.findOne({
      where: { id: id },
      include: { 
        all: true,
        nested: true
      } 
    });
    return result
}
exports.getColumns = (Model)=> async ()=> {
    const columns = Object.keys(Model.rawAttributes)
    return columns;
};

exports.update = (Model)=> async (id, data)=> {
    const item = await Model.findByPk(id);
    if (!item) return null
    return item.update(data)
};

exports.delete = (Model)=> async (id)=> {
    const item = await Model.findByPk(id);
    if (!item) return null
    return item.destroy()
};

exports.login = (Model) => async ({email, key_code}) => {  
  const user = await Model.findOne({ where: { email } });
  
  if (!user) {
    return {success: false, message: "Unauthorised User"}
  }

  const isMatch = await bcrypt.compare(key_code, user.key_code);
  
  if (!isMatch) {
    return {success: false, message: "Unauthorised User"}
  }
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  // 4. Return safe user + token
  return {
    user: {
      id: user.id,
      email: user.email,
      role: user.role,
      name: user.name,
      companyId: user.CompanyId
    },
    token
  };
};
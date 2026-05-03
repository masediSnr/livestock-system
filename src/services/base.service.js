const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.create = (Model)=> async (data)=> {
    if (data.key_code) {
        const hashedPass = await bcrypt.hash(data.key_code,10)
        const user = Model.create({...data,key_code: hashedPass});
        return user
        console.log(user);
        
    }
    Model.create(data);
}
exports.getAll = (Model)=> async (data)=> Model.findAll();
exports.getById = (Model)=> async (id)=> {
    return await Model.findByPk(id);
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
  // 1. Find user
  console.log("checking format:")
  
  const user = await Model.findOne({ where: { email } });
  
  if (!user) {
    console.log(user.key_code);
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
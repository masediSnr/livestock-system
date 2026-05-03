exports.create = (service) => async (req, res)=>{
    try {
        const result = await service.create(req.body)
        res.status(201).json(
            {success: true,...result}
        )
        console.log("Successfuly Added!")
    } catch (error) {
        res.status(400).json({error: error})
    }
}
exports.getAll = (service) => async (req,res)=>{
    res.json(await service.getAll())
}

exports.getById = (service) => async (req,res) => {
    const data = await service.getById(req.params.id)
    if(!data) return res.status(404).json({message: "not found!"});
    res.json(data)
}

exports.getColumns = (service) => async (req,res) => {
    try {
        const columns = await service.getColumns()
        res.status(200).json({
            success: true, columns,
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
        
    }
}
exports.update = (service) => async (req,res) => {
    const data = await service.update(req.params.id, req.body)
    if(!data) return res.status(404).json({message: "not found!"});
    res.status(200).json(data)
    console.log("Successfuly Updated!")

}
exports.delete = (service) => async (req,res) => {
    const data = await service.delete(req.params.id)
    if(!data) return res.status(404).json({message: "not found!"});
    res.json({message : "deleted successfully!"})
}

exports.login = (service) => async (req, res) => {
  
    try {
        const {email, key_code} = req.body
        
        
        const result = await service.login(req.body)

        res.status(200).json({
        success: true,
        ...result
        });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorised"
    });
  }
};
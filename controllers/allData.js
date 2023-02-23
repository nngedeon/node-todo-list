
const datas = require('../models/datasModel')
const mongodbDatas = async(req,res)=>{
    const dataFind = await datas.find({})
    res.render('mongodbDatas',{data:dataFind})
    
}
module.exports = mongodbDatas

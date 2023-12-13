const Models = require('../model/index')

exports.getStudent = async (req, res) => {
    try {
        let getData = await Models.find({})
        res.send({
            getData
        })
    } catch (error) {
        res.send(error)
    }
}
exports.deleteSoft = async(req,res)=>{
    try{
        let id = req.params.id
        await Models.delete({_id:id})
        res.send({message:"success"})
    }
    catch(error){
        res.send(error)
    }

}

exports.paginateStudent = async (req, res) => {
    try {
        let totalData = await Models.countDocuments()
        let activePage = parseInt(req.query.activePage)
        let limit = parseInt(req.query.limit)
        let skip = (activePage-1)*limit
        let totalPage = Math.ceil(totalData/limit)
        let getData = await Models.find().skip(skip).limit(limit)
        res.send({
            getData,
            totalPage,
            message:'success',
            skip
        })
    } catch (error) {
        res.send(error)
    }
}

exports.searchStudent = async (req, res) => {
    try {
        let activePage = parseInt(req.query.activePage)
        console.log(activePage,'activePage')
        let nameSearch = req.query.nameSearch

        let totalData = await Models.countDocuments({name:{
            $regex:nameSearch,
            $options:'i'
        }})

        let limit = parseInt(req.query.limit)
        let skip = (activePage-1)*limit
        let totalPage = Math.ceil(totalData/limit)
        let getData = await Models.find({name:{
            $regex:nameSearch,
            $options:'i'
        }}).skip(skip).limit(limit)
        res.send({
            getData,
            totalPage,
            message:'success',
            skip
        })
    } catch (error) {
        res.send(error)
    }
}

exports.addStudent = async (req, res) => {
    try {
        
        let name = req.body.name
        console.log('hoan');
        await Models.create({name:name,date:name,status:name})
        res.send({
            message: "Success"
        })
    } catch (error) {
        res.send(error)
    }
}

exports.deleteStudent = async (req, res) => {
    try {
        let id = req.params.id
        console.log(req.params)
        await Models.findByIdAndDelete(id)
        res.send({
            message: "Success"
        })
    } catch (error) {
        res.send(error)
    }
}
exports.updateStudent = async (req, res) => {
    try {
        let id = req.params.id
        let name = req.body.name
        console.log(id,name,'id,name');
        await Models.findByIdAndUpdate(id,{name:name})
        res.send({
            message: "Success"
        })
    } catch (error) {
        res.send(error)
    }
}
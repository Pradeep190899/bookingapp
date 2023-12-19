const User = require('../model/user')

const postData = async(req , res ,next)=>{
   
   try {
    const name = req.body.name ;
    const email = req.body.mail ;
    const phone = req.body.phone ;
    const data = await User.create({
        name , email , phone
    })
    res.status(201).json({info :data}) ;
   } catch (error) {
    console.log(error) ;
    res.status(500)
   } 
} 

const getData = async(req , res, next)=>{
    try {
        const newData = await User.findAll();
      //  console.log(newData)
res.status(201).json({data : newData})
    } catch (err) {
        console.log(err) ;
        res.status(501) ;
    }
}

const deleteData = async(req, res, next)=>{
    try {
        const data_id = req.params.id;
        const result = await User.findByPk(data_id);
        await result.destroy();
        return res.status(200).json({result})
    } catch (err) {
        console.log(err) ;
    }
}

module.exports =  {postData ,getData ,deleteData }

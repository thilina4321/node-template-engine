const User = require('../model/user-model')

exports.createUser = async(req,res)=>{
    try {
        const user = await User.create({name:'mchn'})

        // const users = await User.findAll()
        console.log('user');
        res.status(200).render('index', {name:'user[]'})
    } catch (error) {
        res.send(500).redirect('/')
    }
}

exports.getUsers = async(req,res)=>{

}
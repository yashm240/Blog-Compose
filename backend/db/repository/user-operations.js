const {UserModel} = require('../models/user-schema');
const BlogModel = require('../models/blog-schema');
module.exports = {
    async add(userObject){
        // console.log("In add ",userObject)
        // const doc = await UserModel.create(userObject);
        try{
        const newuser = new UserModel({
            Name: userObject.name,
            UserName: userObject.email,
            Password: userObject.pass
          });
        const doc = await newuser.save()
        return doc;
    }catch(err){
        // console.log("ye hai user-operation ke add ke catch main ",err)
        return('already exist');
    }
    },
    async find(userObject){
        // console.log("in userop find",userObject)
        const doc = await UserModel.findOne({'UserName':userObject.email,'Password':userObject.pass}).exec()
        // console.log("in userop find ",doc)
        return doc;
    },
    async update(token,body){
        // console.log("this is in userop update token is: ",token)
        // console.log("this is in userop update body is: ",body.name,body.pass)
        const doc = await UserModel.updateOne({'token':token},
        {
            'Name':body.name,
            'Password':body.pass
        })
        // console.log("in userop update ",doc)
        return doc;
    },
    async delete(token){
        const doc = await UserModel.deleteOne({'token':token})
        const doc1 = await BlogModel.deleteMany({'token':token})
        return doc;
    }
}
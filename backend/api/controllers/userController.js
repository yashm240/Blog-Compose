const userRepository = require('../../db/repository/user-operations')
const userSchema = require('../../db/models/user-schema')
module.exports = {
    async Login(request,response){
        let userObject = request.body;
        const result = await userRepository.find(userObject);
        try{
            if(result==null){
                // console.log("Not Registered")
                response.json({message:"YOU ARE NOT REGISTERED"})
            }
            else if(result.UserName){
                // console.log("In Usercontroller login ",result.Name)
                response.json({message:"Hello "+result.Name, token:result.token})
            }
        }
        catch(err){
            // console.log("Error in UserController Login Function ",err)
            response.json({message:"SORRY SOMETHING CRASHED , PLEASE TRY AGAIN"})
        }
    },
    async Register(request,response){
        let userObject = request.body;
        const result = await userRepository.add(userObject)
        // const token = await userSchema.generateAuthToken();
        try{
            if (result!='already exist' && result.UserName){
                const token = await userSchema.generateAuthToken(result._id);
                response.send("You are Registered Successfully")
            }else if(result=='already exist'){
                response.send("Email Id already Registered")
            }
            else{
                response.send("Registration Failed")
            }
        }
        catch(err){
            // console.log("error in UserController Register Function ",err)
            response.send("SORRY SOMETHING CRASHED , PLEASE TRY AGAIN")
        }
    },
    async Update(request,response){
        const token = request.body.token;
        const name = request.body.name;
        const pass = request.body.pass;
        // console.log("this is in update usercontroller,token is ",token)
        const data = {
            name:name,
            pass:pass
        }
        const result = await userRepository.update(token,data)
        response.send("Update successful")
    },
    async Delete(request,response){
        const token = request.body;
        const result = await userRepository.delete(token)
        response.send("Account Successfully Deleted")

    }
}
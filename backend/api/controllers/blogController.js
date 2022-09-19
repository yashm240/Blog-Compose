const blogOperations = require('../../db/repository/blog-operations')
const BlogModel = require('../../db/models/blog-schema');
const {UserModel} = require('../../db/models/user-schema');


module.exports= {
    async Compose(request,response){
        const userObject = request.body;
        if(UserModel.findOne(
            {token:userObject.token})==null){
                response.send('Token is not found.')
            }
        else{
            try{
            let newblog = new BlogModel({
                title: userObject.title,
                body: userObject.body,
                category: userObject.category,
                date: new Date(),
                token: userObject.token
              });
            const result = await blogOperations.add(newblog);
            if(result =="Error"){
                response.json({message:"Blog Not Composed"})
            }else if(result && result._id){
                response.json({message:"Blog Composed"})
            }
            }catch(err){
                // console.log("error in blogcontroller compose function ",err)
                response.json({message:"Sorry Some error occurred"})
            }
        }
        
    },
    async ReadbyCategory(request,response){
        const category=request.query.category;
        // console.log("in blogcontroller readbycategory, this is category ",category)
        try{
        const result = await blogOperations.read(category);
        if (result =="Error"){
            response.json({message:"Some Error occurred"})
        }else if(result && result.length>0){
            response.json({message:"Records found",data:result})
        }
        else{
            response.json({message:"Records Not found in DataBase"})
        }
        }catch(error){
            // console.log("Some error occurred in blogcontroller ReadbyCategory ",err)
            response.json({message:"Sorry for inconvinience , Some error occurred"})
        }
    },
    async ReadbyUser(request,response){
        // console.log("In blog Controller readby user 1 ")
        const user=request.body.token;
        // console.log("In blogController readby user ",user)
        const result = await blogOperations.readbyuser(user);
        
        try{
        const result = await blogOperations.readbyuser(user);

            if(result=="Error"){
                response.json({message:"Some Error Occurred"})
            }
          else if (result && result.length>0){
            response.json({message:"Records Found",data:result})
          }
          else{
            response.json({message:"Records not found"});
        }
        }
        catch(err){
            // console.log("Some error occurred in blogcontroller ReadbyUser ",err)
          response.json({message:"Some Error Occurred"});
      }
      },
      async Delete(request,response){
        const blog = {
            title:request.body.title,
            body:request.body.body,
            category:request.body.category
        };
        // console.log("this is in delete of blogcontroller ",blog)
        const result = await blogOperations.delete(blog)
        // console.log("this is result in delete operation in blog controller",result)
        response.json({message:"Record deleted"})
      }
}
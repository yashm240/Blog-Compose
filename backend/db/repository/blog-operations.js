const BlogModel = require("../models/blog-schema")
const mongoose = require("mongoose");

module.exports = {
    async add(blogObject){
        try{
            const newblog = new BlogModel({
                title: blogObject.title,
                body: blogObject.body,
                category: blogObject.category,
                date: new Date(),
                token: blogObject.token

              })
              const doc = await newblog.save();
              return doc;
        }catch(err){
            // console.log("This is in blog-operations add function ",err)
            return("Error")
        }
    },
    async read(blogObject){
        try{
        if(blogObject=='all'){
            const docs = await BlogModel.find({});
            return docs;
        }else{
            const docs = await BlogModel.find({category:blogObject})
            return docs;
        }}catch(err){
            // console.log("This is in blog-operations readbycategory function ",err)
            return("Error")
        }
    },
    async readbyuser(blogObject){
        const docs = await BlogModel.find({token:blogObject});
        return docs;
    },
    async delete(blogObject){
        // console.log("this is in delete of blog op",blogObject)
        const docs = await BlogModel.deleteOne({title:blogObject.title,body:blogObject.body});
        return docs;
    }
}
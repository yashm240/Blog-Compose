const connection = require('../connection');
const { SchemaTypes } = require("mongoose");

const Schema = connection.Schema;
const blogSchema = new Schema({
    title: {type: SchemaTypes.String, required: true},
    body: {type:SchemaTypes.String, required: true },
    category: { type: SchemaTypes.String, required: true },
    date: { type: SchemaTypes.Date, required: true },
    token: { type: SchemaTypes.String, required: true , ref:'newuser'}
})
const BlogModel = connection.model("new-blogs", blogSchema);
module.exports = BlogModel;
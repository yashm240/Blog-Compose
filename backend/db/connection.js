const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yashm240:askl2406@cluster0.l6z9z2n.mongodb.net/?retryWrites=true&w=majority',err=>{
    if(err){
        console.log('Error During DB connection ',err)
    }
    else{
        console.log('Connected to Database')
    }
})
module.exports= mongoose;
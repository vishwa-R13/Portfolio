const mdb=require('mongoose');

const contactSchema=mdb.Schema({
    Name:String,
    email:String,
})

const contact_Schema=mdb.model("contact",contactSchema);
module.exports=contact_Schema;
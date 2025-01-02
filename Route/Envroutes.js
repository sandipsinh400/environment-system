const express = require('express')
const app=express();

const Envcontroller=require('../controller/Envcontroller');
const upload = require('../middlware/Fileuploads');

app.post('/',upload.single('Profile_img'),Envcontroller.creat)
app.get('/',Envcontroller.view)
app.delete('/:id',Envcontroller.trash)
app.put('/:id',Envcontroller.update)

module.exports=app
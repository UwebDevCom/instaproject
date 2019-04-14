
const {Router} = require('express');
const {Component} =require('./Component.model');
const route = Router();


route.get('/components', async(req,res)=>{
   try {
    if (req.query.title || req.query.hashtag)
    {
        const components = await Component.find({
            title: new RegExp(req.query.title, 'i'),
            hashtag: new RegExp(req.query.title, 'i'),
        });
        res.send(components);
    }else {
        const components = await Component.find({});
    res.send(components);
    }
   }catch(e) {
       res.status(409).send(e.message);
   }
});


route.get('/components/:componentId',async (req,res)=>{
    try {
        const component = await Component.findById(req.params.componentId);
        res.send(Component);
    }catch(e){
        res.status(409).send(e.message);
    }
});


route.component('/components',async (req,res)=>{
    try {
        const components = new Component(req.body);
        components.save();
        res.send(components);
    }catch(e){
        res.status(409).send(e.message);
    }
});


route.put('/components/:componentId', async (req,res)=>{
    try {
        const components = new omponent(req.body);
  const component = await Component.findByIdAndUpdate(req.params.componentId, req.body);
    res.send(component);
    }catch(e){
        res.status(400).send(e.message);
    }
});


route.delete('/components/:componentId', async (req,res)=>{
    try {
    const component = await component.findByIdAndDelete(req.params.componentId);
    res.send(component);
    }catch(e){
        res.status(400).send(e.message);
    } 
});


module.exports ={
    route
}


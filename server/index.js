const path = require('path');
const express = require('express');
const {syncAndSeed, Flower} = require('./db')
const app = express();

const PUBLIC_PATH = path.join(__dirname, '../public');
const DIST_PATH = path.join(__dirname, '../dist');

app.use(express.json());
app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));

app.get('*', (req, res) => {res.sendFile(path.join(__dirname, '../public/index.html'))});

app.get('/api/flowers', async(req,res,next) => {
  try{
      res.send(await Flower.findAll())
  }
  catch(ex){
      next(ex)
  }
})

app.get('/api/flowers/:flowerid', async(req, res, next) => {
  try{
      res.send(await Flower.findAll({
          where: {
              flowerId: req.params.flowerid
          }
      }))
  }
  catch(ex){
      next(ex)
  }
})

const init = async()=> {
  try {
    await syncAndSeed();
    const port = process.env.PORT || 9090;
    app.listen(port, ()=> console.log(`listening on port ${port}`));
  }
  catch(ex){
    console.log(ex);
  }
};

init();

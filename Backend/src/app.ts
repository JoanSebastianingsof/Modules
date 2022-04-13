import express from 'express';
import cors from 'cors';
import { loadEndPoints } from './controllers/api';
const app = express();
const port:string | number= process.env.PORT || 3000;

app.set("port",port);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

loadEndPoints(app);

export default app;



/*app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/json',(req,res)=>{
    res.json({
        cod:200,
        msg:"Prueba"
    })
})
app.get("/otro",(req,res)=>{
    res.status(401).json({
        cod:401,
        msg:"No autorizado"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/
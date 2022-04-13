import { Application,Request,response,Response } from "express";
//import { pool } from "../model/db";
import { abrirDB } from "../model/db";

 export const loadEndPoints=(app:Application):void =>{
 app.get('/personas',(req:Request,res:Response)=>{
    
         try{
            abrirDB.then(async (db) =>{
            const result = await db.all('SELECT * FROM Persona');
            res.status(200).send(result);
            }
             )}
             catch(error){
                 res.status(505).json(error);

        } 
            
        
          

 });
 /*app.post('/HOLA', (req:Request,res:Response) => {
    let agregar= req.body.nombre;
    
    console.log (agregar);
    res.send('Se agrego el estudiante ' +agregar+ ' correctamente')
  });
  app.delete('/hola', (req:Request,res:Response) => {
    let eliminar= req.body.nombre;
    
       console.log (eliminar);
    res.send('Se elimino el estudiante ' +eliminar+ ' correctamente')
    });*/
}


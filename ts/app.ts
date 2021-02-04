import express,{Application,Request,Response} from 'express'

const app:Application = express();

interface Items {
    productos:string;
    cantidad:number;
}

const fs = require('fs');

let items:Items[] = []



const readFile = async () => {
    try
    {
        const data = await fs.promises.readFile('./productos.txt', 'utf-8')
        items.push(data)

        console.log((data))
    } catch(error) 
    {
        console.log('error')
        
    }
}

readFile();




app.get('/items',(req:Request,res:Response)=>{

    //get de productos y cantidad de productos

    res.status(200).send(items)
})

app.get('/item-random',(req:Request,res:Response)=>{

    //producto elegido al azar

    res.status(200).send(items)
})

app.get('/visitas',(req:Request,res:Response)=>{

    //cantidad de veces que se visitó a la ruta 1

    res.status(200).send(items)
})


app.listen(8080,()=>{
console.log('Server listening - http//localhost:8080')
})
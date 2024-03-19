import express from 'express';
import { connectMongoDB } from './lib/db.js';
import dotenv from 'dotenv';
import { Todos } from './models/todo.js';
import cors from 'cors';
const Port = process.env.backend_PORT || 3000;

// Create an express app
const app = express();

// middleware
dotenv.config(); // for environment variables
const corsOptions ={
    origin:'http://localhost:3001', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions)); // for frotend cors policy
app.use(express.json());// for parsing the body of the request

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World');
    }
);

// Define a get method for getting all the todos
app.get('/todo', async (req, res) => {
   try {
    connectMongoDB();
    const todos = await Todos.find();
    res.json(todos);
   } catch (error) {
    res.status(500).json({ message: error.message });
   }
    }
);

// Define a post method for adding a todo
app.post('/todo', async (req, res) => {
    try {
     connectMongoDB();
     const {title} = req.body;
     const todos = await Todos.create({title});
     res.json(todos);
    } catch (error) {
     res.status(500).json({ message: error.message });
    }
     }
 );

 //  define a method for update todos 
app.put("/todo/:id", async (req, res)=>{
    const updateOperation = {
        $set:req.body
    }
    try {
        await connectMongoDB();
       let user =  await Todos.findByIdAndUpdate( 
        { _id: req.params.id }, // Filter
       updateOperation, // Update operation
       { returnOriginal: false } // Options: return the modified document req.params.id       
       )
       res.json(user);

    } catch (error) {
        res.status(501).json({message:error.message})
    }
})

// Define a Delete method for deleting a todo by id
app.delete('/todo/:id', async (req, res) => {
    try {
     connectMongoDB();
     const todos = await Todos.findByIdAndDelete(req.params.id);
     res.json(todos);
    } catch (error) {
     res.status(500).json({ message: error.message });
    }
     }
 );

// Start the server
app.listen(Port, () => {
  console.log('Server is running on port '+ process.env.backend_PORT);
});

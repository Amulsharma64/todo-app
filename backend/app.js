import express from 'express';
import { connectMongoDB } from './lib/db.js';
import dotenv from 'dotenv';
import { Todos } from './models/todo.js';
import cors from 'cors';
const port = process.env.PORT || 3000;

// Create an express app
const app = express();

// for environment variables
dotenv.config();

const corsOptions ={
    origin:'http://localhost:3002', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

// for frotend cors policy
app.use(cors(corsOptions));

// for parsing the body of the request
app.use(express.json());

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
app.listen(port, () => {
  console.log('Server is running on port 3000');
});

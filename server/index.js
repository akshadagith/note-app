import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT =5000;

const NOTES = [];

app.get("/health", (req, res) => {

  res.json ({
    success: "true",
    message: "Server is running",
    data: null
  })
});

app.post("/notes", (req, res)=>{
   const {title, content, category} = req.body;

   const newNote = {
     title,
     content,
     category,

   }

   NOTES.push(newNote);

   res.json({
    success: true,
    message: "Note added succesfully",
    data: newNote
  })
})

app.get("/notes", (req, res)=>{

    res.json({
     success: true,
     message:"Notes fetched succesfully",
     data: NOTES
    })
})


app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});
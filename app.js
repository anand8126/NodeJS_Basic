const express= require("express");
const app=express();

const PORT=3000;

app.get("/", (req, res) =>{
    res.send("Hello World!");
});


app.post("/", (req, res) => {
    res.send("Your Data Submitted Successfully!")
});


app.put("/", (req, res) => {
    res.send("Your Data Updated!");
})

app.delete("/", (req, res) => {
    res.send("Your Data Deleted!");
})

app.listen(PORT, () => {
    console.log(`Server is Ready http://localhost:${PORT}`);
})
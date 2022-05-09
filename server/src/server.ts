import express from 'express'

const app = express();

app.get('/users', (req, res) => {
    return res.send("Hello Wolrd");
})

app.listen(3333,()=>{
    console.log('HTTP server running!')
});
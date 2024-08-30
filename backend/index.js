import express from 'express'
// require('dotenv').config()
const app = express()
const port = process.env.port || 3000


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            'id' : 1,
            'joke' : 'joke 1' 
        },
        {
            'id' : 2,
            'joke' : 'joke 2' 
        },
        {
            'id' : 3,
            'joke' : 'joke 3' 
        },
        {
            'id' : 4,
            'joke' : 'joke 4' 
        },
        {
            'id' : 5,
            'joke' : 'joke 5' 
        },
    ]
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
    
})
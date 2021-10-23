const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hell0 World');
})

const users = [
    // { id: 0, name: 'Rock', email: 'rock@gmail.com', phone: '01708899944' },
    { id: 1, name: 'Rafiq', email: 'rafiq@gmail.com', phone: '01718899944' },
    { id: 2, name: 'Joshim', email: 'josh@gmail.com', phone: '01728899944' },
    { id: 3, name: 'Sonia', email: 'son@gmail.com', phone: '01738899944' },
    { id: 4, name: 'Sumaiya', email: 'sumaiya@gmail.com', phone: '01748899944' },
    { id: 5, name: 'Jabbar', email: 'joe@gmail.com', phone: '01758899944' },
    { id: 6, name: 'Jibon', email: 'jibon@gmail.com', phone: '01768899944' },
    { id: 7, name: 'Sagor', email: 'sagor@gmail.com', phone: '01778899944' },
    { id: 8, name: 'Mamun', email: 'mamun@gmail.com', phone: '01788899944' },
    { id: 9, name: 'Modhu', email: 'modhu@gmail.com', phone: '01798899944' },
    { id: 10, name: 'Shuchorita', email: 'su@gmail.com', phone: '01710899944' }
]


// query 
app.get('/users', (req, res) => {
    const search = req.query.search;
    // const order = req.query.order;
    console.log(search)
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
   
})


app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length+1;
    users.push(newUser);
    console.log('hitting the post',req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id-1]
    res.send(user)
    // console.log(req.params.id)
})

app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'oranges', 'banana', 'apple']);
})
app.listen(port, () => {
    console.log('Listening to the port',port);
})
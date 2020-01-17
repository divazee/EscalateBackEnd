const mongoose  =   require('mongoose'),
      bodyParser =  require('body-parser'),
      User      =   require('./models/user'),
      cors      =   require('cors'),
      express   =   require('express'),
      app       =   express();

mongoose.connect(
    'mongodb://localhost/escalate',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.urlencoded({ extended: true}));

app.post('/', async function(req, res){
    try{
        const {name, email, department, issue} = req.body;
        console.log(req.body)
        let userObj = await User.create({
            name,
            email,
            department,
            issue
        });
        res.send(userObj);
    }catch(e){
        console.log(e);
        res.status(422).send(e)
    }
})

app.get('/getuser', function(req, res){
    User.find({}, function(err, user){
        err ? res.send(err) :
        res.send(user)
    })
})

app.listen(3000, function(){
    console.log("server started...")
})
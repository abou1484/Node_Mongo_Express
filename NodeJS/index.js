require("./db/mongoose");
const express = require('express');
const Blog = require("./models/blog");
const port = process.env.PORT || 3000

const app = express();


app.use(express.json());

app.post("/blog", (req, res) => {
    const blog = new Blog(req.body);
    blog.save().then((blog) => {
        res.status(201).send(blog);
    }).catch((error) => {
        res.status(400).send(error);
    })
})


app.post("/blog", (req, res) => {
    Blog.create(req, body).then((blog) => {
        res.status(201).send(blog);
    }).catch((error) => {
        res.status(400).send(error);
    })
})


app.post("/blog", (req, res) => {

    Blog.insertMany(req.body).then((blog) => {
        res.status(201).send(blog);
    }).catch((error) => {
        res.status(400).send(error);
    })
})



app.listen(port, (req, res) => {
    console.log('app is running in port 3000!');
})


app.get('/', (req, res) => {
    res.send("You are connect")
})


app.get("/blog", (req, res) => {
    Blog.find({}).then((blog) => {
        res.send(blog);
    }).catch((error) => {
        res.status(500).send(error);
    })
})


app.get("/blog/:id", (req, res) => {
    Blog.findById(req.params.id).then((blog) => {
        if (!blog) {
            return res.status(404).send();
        }
        res.send(blog);
    }).catch((error) => {
        res.status(500).send(error);
    })
})



app.path("/blog/:id", (req, rse) => {
    Blog.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((blog) => {
        if (!blog){
            return res.status(404).send();
        }
        res.send(blog);
    }).catch((error) => {
        res.status(500).send(error);
    })
})


app.path("/blog/:id", (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((blog) => {
        if (!blog) {
            return res.status(404).send();
        }
        res.send(blog);
    }).catch((error) => {
        res.status(500).send(error);
    })
})


app.delete("/blog/:id", (req, res) => {
    Blog.findByIdAndDelete(req.params.id).then(blog => {

    }).catch((error) => {
        res.status(500).send(error);
    })
})

/*
const users = require("./routes/users")
app.use("/users", users)
*/
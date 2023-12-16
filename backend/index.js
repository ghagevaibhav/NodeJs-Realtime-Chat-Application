const express = require("express");  // we import express which runs our http server 
const cors = require("cors");  // we also import cors so that we can call this server from any other origin
const { default: axios } = require("axios");

// and the job of calling the server is done by the below 3 lines of code
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

// here we create a post endpoint to authenticate, so it's use is to take in a username from the request body and return a fake username and password
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put('https://api.chatengine.io/users/', 
    {username: username, secret: username, first_name: username}, 
    {headers: {"private-key": "671fcb70-fa55-4ad7-bb77-b81dad7c0fe6"}}
    )
    return res.status(r.status).json(r.data)
  }
  catch(e){
    return res.status(e.response.status).json(e.response.data)
  }

  
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);
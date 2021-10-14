const express = require("express");
const service = require("./userService");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../../utils/jwtGenerator");
const jsonParser = express.json();
const Router = express.Router();
const authorization = require("../../utils/authorization");



// User Registration Route

Router.post("/register", jsonParser, async (req, res, next) => {
  const { username, password, name } = req.body;
  const newUser = { username, password, name };
  const users = await service.checkForUser(req.app.get("db"), newUser.username);
  if (users.length > 0) {
    return res.status(400).json({ error: "Username Not Available" });
  }

  const salt = await bcrypt.genSalt(10);

  const bcryptPassword = await bcrypt.hash(password, salt);

  const addUser = await service.insertUser(
    req.app.get("db"),
    { username: newUser.username, password: bcryptPassword, name: newUser.name }
  );
  console.log(addUser)
  const token = jwtGenerator(addUser[0].userid);
  return res.json({ token })
});

Router.post('/login', jsonParser, async (req, res) => {
    const {username, password} = req.body
    const user = {username, password}

    const checkForUser = await service.checkForUser(req.app.get('db'), user.username)
    
    if (!checkForUser || checkForUser.length === 0 ) {
        return res.status(400).json( {error: "Incorrect Login Information"} )
    }

    return service.comparePasswords(user.password, checkForUser[0].password)
    .then(compare => {
        if (!compare) {
            return res.status(400).json({error: "Incorrect Username or Password"})
        }
    const token = jwtGenerator(checkForUser.userid);
        return res.json({token})
    })
})


Router.get('/allUsers', jsonParser, async (req, res) => {
    try{
        const getAll = await service.getAllUsers(req.app.get('db'));
        if(getAll.length > 0) {
        res.json(getAll)
        } else {
            res.status(200).send('No Users')
        }
} catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
}

})

module.exports = Router;
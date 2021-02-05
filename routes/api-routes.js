// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const { listenerCount } = require("process");
const sharedLibrary = require("../models/books.js");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(500).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  // mark a book as read/unread
  app.put("/api/read", function(req, res){
    db.List.update(
      db.List.read = !db.List.read,
      { where: {
          title: req.body.title
        }
      }).then(function(List){
        res.json(List)
      })
  });

  app.post("/api/add_book_List", async function(req, res){
    console.log(req.body);
    
    try {
      const newList = await db.List.create(req.body);
      const foundUser = await db.User.findOne({where: {id: req.user.id}});
      await newList.addUser(foundUser);

      res.status(200);

    } catch(err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // Search reading list and get all of its active users
  app.get("/api/get_list/:listId", async function(req, res) {
    try {

      // View all users who are subscribed
      const readingList = await db.List.findOne({where: {id : req.params.listId}});
      const allSubscribedUsers = await readingList.getUsers();
      res.json(allSubscribedUsers);

      /* 
        Note: be sure to remove all the logic above ^^^^  if you care to use the code below.
        If you wish to include book details along with Users in response then uncomment following:
      */

      /*
      const allSubscribedUsersByBook = await db.List.findOne({
        where: {id : req.params.listId},
        include: [db.User]
      });
      res.json(allSubscribedUsersByBook);
      */

    } catch(err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // this route gets the read list.
  app.get("/api/get_list", function(req, res) {
    db.List.findAll({}).then(function(allBooks)
    {res.json(allBooks)});
  });

  // remove a book from read list

  app.delete("/api/remove_book/:id", function(req, res){
    db.List.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(delBook){
      res.json(delBook)
    });
  });
};

// I need to figure out how to make this button only click on the first button
// I also need to figure out how to delete this using the id

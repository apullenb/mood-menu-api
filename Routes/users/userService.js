const bcrypt = require('bcrypt');



const services = {

  checkForUser(db, user) {
    return db
      .from('users')
      .select('*')
      .where('username', user);
  },

  insertUser(db, user) {
    return db
      .insert(user)
      .into('users')
      .returning('*')
      .then(rows => { 
        return rows;
      });
  },

  comparePasswords(password, hash) {
    return bcrypt.compare(password, hash);
  },

  getAllUsers(db) {
    return db
      .select('*')
      .from('users');
  }


};


module.exports = services;
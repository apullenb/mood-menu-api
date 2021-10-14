
const services = {

  getAllActivities(db) {
    return db
      .from('activities')
      .select('*');
  },

  deleteActivityByID(db, id) {
    return db('activities')
      .where('actid', id)
      .delete();
  }
  
};
  
  
module.exports = services;
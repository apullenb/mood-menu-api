
const services = {

  getAllActivities(db) {
    return db
      .from('activities')
      .select('*');
  },

  deleteActivityByID(db, id) {
    return db('activities')
      .where('actID', id)
      .delete();
  }
  
};
  
  
module.exports = services;
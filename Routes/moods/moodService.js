

const services = {

  getAllMoods(db) {
    return db
      .from('moods')
      .select('*');
  }

};


module.exports = services;
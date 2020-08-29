import db from '../loader/dbconnet';

export default (data) => {
  try {
    return db.User.findOne({ 
      where: {
        username: data.username
      }
    });
  } catch (err) {
    throw err;
  }
};
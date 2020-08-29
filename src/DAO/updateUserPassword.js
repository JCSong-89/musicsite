import db from '../loader/dbconnet';

export default (name, username, hash) => {
  try {
    db.User.update({
      name,
      password: hash
    },{
      where: { username }
    });
    
    return true
  } catch (err) {
    return false
  }
};
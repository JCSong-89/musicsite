import db from '../loader/dbconnet';

export default (data, username, hash) => {
  try {
    db.User.update({
      name: data.name,
      password: hash
    },{
      where: {username}
    });
    return true
  } catch (err) {
    return false
  }
};
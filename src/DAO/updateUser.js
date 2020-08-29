import db from '../loader/dbconnet';

export default (name, username) => {
  try {
    db.User.update({
      name,
    },{
      where: { username }
    });

    return true
  } catch (err) {
    return false
  }
};
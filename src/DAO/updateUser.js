import db from '../loader/dbconnet';

const updateUser = (req, username, hash) => {
  try {
    db.User.update({
      name: req.name,
      password: hash
    },{
      where: {username}
    });
  } catch (err) {
    throw err;
  }
};

export default updateUser;
import db from '../loader/dbconnet';

const updateUser = (req) => {
  try {
    return db.User.update({
      name: req.name,
      password: req.password
    },{
      where: {id: req.id}
    });
  } catch (err) {
    throw err;
  }
};

export default updateUser;
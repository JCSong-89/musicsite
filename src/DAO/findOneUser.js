import db from '../loader/dbconnet';

const findOneUser = (req) => {
  try {
    return db.User.findOne({where: {username: req.username}});
  } catch (err) {
    throw err;
  }
};

export default findOneUser;
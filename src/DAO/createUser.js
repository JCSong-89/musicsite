import db from '../loader/dbconnet';

const createUser = (req, hash) => {
  try {
    db.User.create({
      username: req.username,
      name: req.name,
      password: hash,
    });
    return 'Success';
  } catch (err) {
    return 'Fail';
  }
};

export default createUser;
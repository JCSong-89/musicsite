import db from '../loader/dbconnet';

const createUser = (req, hash) => {
  try {
    db.Admin.create({
      email: req.email,
      password: hash,
    });
    return 'Success';
  } catch (err) {
    return 'Fail';
  }
};

export default createUser;
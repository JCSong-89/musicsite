import db from '../loader/dbconnet';

export default (data, hash) => {
  try {
    const { username, name } = data;
    db.User.create({
      username,
      name,
      password: hash,
    });

    return true;    
  } catch (err) {
    console.error(err.message)

    return false;
  }
};
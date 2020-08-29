import db from '../loader/dbconnet';

export default (id , ...ars) => {
  try {
    // For Update Music Data
    if (ars.username) {
      const {userId, username} = ars
      return db.Music.findOne({
        attributes: ['id', 'name', 'size', 'file', 'path', 'album', 'artist', 'createdAt'],
        where: {
          id,
          userId,
          username
          }
        });
    }
    // For Detail Music Data
    return db.Music.findOne({
      attributes: ['id', 'username', 'name', 'size', 'file', 'path', 'album', 'artist', 'createdAt'],
      where: {id}});
  } catch (err) {
    throw err;
  }
};
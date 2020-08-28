import db from '../loader/dbconnet';

const createMusic = (data) => {
  try {
    const {username, name, album, userId, size, artist, path, file} = data
    db.Music.create({
      username,
      name,
      album,
      size,
      artist,
      path,
      file,
      userId      
    });
    return 'Success';
  } catch (err) {
    return 'Fail';
  }
};

export default createMusic;
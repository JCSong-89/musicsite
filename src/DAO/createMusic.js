import db from '../loader/dbconnet';

export default (data) => {
  try {
    const { username, name, album, userId, size, artist, path, file } = data
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

    return true;    
  } catch (err) {
    console.error(err.message)

    return false;
  };
}
import db from '../loader/dbconnet';

export default (data) => {
  try {
    const {id, name, album, artist} = data

    db.Music.update({
      name,
      album,
      artist,
    },{
      where: {id}
    });
    return true
  } catch (err) {
    return false
  }
};
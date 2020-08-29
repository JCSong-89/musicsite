import db from '../loader/dbconnet';

export default (data) => {
  try{
    const {id, path, file, size} = data
    console.log(data)
    db.Music.update({
      size,
      path,
      file,
    },{
      where: {id}
    });
    return true
} catch(err) {
    return false
  }
}
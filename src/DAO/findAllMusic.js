import db from '../loader/dbconnet';

export default (query) => {
  try {
      return db.Music.findAll({
        attributes: ['id', 'name', 'album', 'artist', 'createdAt'],
        where: {
          name:  {
            [db.Sequelize.Op.like]: "%" + query + "%"
          }
        }
      });
    } catch (err) {      
    throw err;
  }
};
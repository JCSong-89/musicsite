import db from "../loader/dbconnet";

export default (query) => {
  try {
    return db.Music.findAll({
      where: {
        name: {
          [db.Sequelize.Op.like]: "%" + query + "%",
        },
      },
    });
  } catch (err) {
    throw err;
  }
};

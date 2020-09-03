import db from "../loader/dbconnet";

export default (id, ...ars) => {
  try {
    // For Update Music Data
    if (ars) {
      const { username } = ars[0];
      return db.Music.findOne({
        where: {
          id,
          username,
        },
      });
    }
    // For Detail Music Data
    return db.Music.findOne({
      attributes: [
        "id",
        "username",
        "name",
        "size",
        "file",
        "path",
        "album",
        "artist",
        "createdAt",
      ],
      where: { id },
    });
  } catch (err) {
    throw err;
  }
};

import db from "../loader/dbconnet";

export default (id, ...ars) => {
  try {
    console.log(id);
    // For Update Music Data
    if (ars) {
      console.log[ars[0]];
      const { username } = ars[0];
      return db.Music.findOne({
        attributes: [
          "id",
          "username",
          "name",
          "size",
          "file",
          "album",
          "artist",
          "createdAt",
        ],
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

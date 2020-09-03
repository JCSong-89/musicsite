import createMusic from "../../DAO/createMusic";

export default (req, res) => {
  const { name, album, artist } = req.body;
  const { location, size, key } = req.file;

  if (!name || !album || !artist || !location || !size || !key) {
    return res.status(400).send({ message: "NEED MUSIC INFO" });
  }

  const data = {
    name,
    album,
    artist,
    path: location,
    size,
    file: key,
    userId: req.params.userId,
    username: req.params.username,
  };
  const result = createMusic(data);

  if (result === false) {
    return res.status(400).send({ message: "FAIL SAVE NEW FILE" });
  }

  return res.status(200).send({ message: "SAVE NEW FILE" });
};

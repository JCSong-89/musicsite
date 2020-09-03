import updateFile from "../../DAO/updateFile";
import checkJWT from "../../middleware/checkJWT";
import findOneUser from "../../DAO/findOneUser";
import findOneMusic from "../../DAO/findOneMusic";

export default async (req, res) => {
  const { location, size, key } = req.file;

  if (!location || !size || !key) {
    return res.status(400).send({ message: "FAIL UPLOAD S3" });
  }

  const auth = checkJWT(req.headers);

  if (auth === false) {
    return res.status(401).send({ message: "UNSERVICEABLE TOKEN" });
  }

  const user = await findOneUser(auth);
  const data = {
    id: req.params.musicId,
    path: location,
    size: size,
    file: key,
  };
  const music = await findOneMusic(data.id, user);

  if (!music) {
    return res.status(401).send({ message: "NOT MUSIC UPLOADER USER" });
  }

  const result = updateFile(data);

  if (result === false) {
    return res.status(400).send({ message: "FAIL SAVE NEW FILE" });
  }

  return res.status(200).send(data);
};

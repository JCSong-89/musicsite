import checkJWT from "../../middleware/checkJWT";
import updateMusic from "../../DAO/updateMusic";
import findOneUser from "../../DAO/findOneUser";
import findOneMusic from "../../DAO/findOneMusic";

export default async (req, res) => {
  const { name, album, artist } = req.body;

  if (!name || !album || !artist) {
    return res.status(400).send({ message: "NEED MUSIC INFO" });
  }

  const auth = checkJWT(req.headers);

  if (result === false) {
    return res.status(401).send({ message: "UNSERVICEABLE TOKEN" });
  }

  const user = await findOneUser(auth);
  const data = {
    id: req.params.musicId,
    name,
    album,
    artist,
  };
  const music = await findOneMusic(data.id, user);

  if (!music) {
    return res.status(401).send({ message: "NOT MUSIC UPLOADER USER" });
  }

  const result = updateMusic(data);

  if (result === false) {
    return res.status(400).send({ message: "FAIL SAVE NEW FILE" });
  }

  return res.status(200).send(data);
};

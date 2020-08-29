import findOneMusic from '../../DAO/findOneMusic';

export default async (req, res) => {
  try {
    const id = req.params.musicId
    const music = await findOneMusic(id);

    return res.status(200).send(music);
  } catch (err) {
    console.error(err.message);
    
    return res.status(400).send({ message: "ERROR" });
  }
};
import updateMusic from '../../DAO/updateMusic';

export default async (req, res) => {
  const data = {
    id: req.params.musicId,
    name: req.body.name,
    album: req.body.album,
    artist: req.body.artist,
  }
  const result = updateMusic(data);
  if (result === false) {
    return res.status(400).send({message: 'FAIL SAVE NEW FILE'})
  }
  return res.status(200).send(data);
}
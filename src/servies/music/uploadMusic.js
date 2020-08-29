import createMusic from '../../DAO/createMusic';

export default async (req, res) => {
  const data = {
    name: req.body.name,
    album: req.body.album,
    artist: req.body.artist,
    path: req.file.location,
    size: req.file.size,
    file: req.file.key,
    userId: req.params.userId,
    username: req.params.username
  }
  const result = createMusic(data);
  if (result === false) return res.status(400).send({message: 'FAIL SAVE NEW FILE'})

  return res.status(200).send({message: 'SAVE NEW FILE'});
}
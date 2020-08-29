import updateMusic from '../../DAO/updateMusic';

export default (req, res) => {
  const { name, album, artist } = req.body

  if (!name || !album || !artist) {
    return res.status(400).send({ message: "NEED MUSIC INFO" })
  }

  const data = {
    id: req.params.musicId,
    name,
    album,
    artist
  }
  const result = updateMusic(data);
  
  if (result === false) {
    return res.status(400).send({ message: 'FAIL SAVE NEW FILE' })
  }
  
  return res.status(200).send(data);
}
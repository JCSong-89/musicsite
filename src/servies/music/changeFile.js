import updateFile from '../../DAO/updateFile';

export default async (req, res) => {
  const data = {
    id: req.params.musicId,
    path: req.file.location,
    size: req.file.size,
    file: req.file.key,
  }
  const result = updateFile(data);

  if (result === false) return res.status(400).send({message: 'FAIL SAVE NEW FILE'})

  return res.status(200).send(data);
}
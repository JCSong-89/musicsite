import updateFile from '../../DAO/updateFile';

export default (req, res) => {
  const { location, size, key } = req.file

  if (!location || !size || !key) {
    return res.status(400).send({ message: "FAIL UPLOAD S3" });
  }

  const data = {
    id: req.params.musicId,
    path: location,
    size: size,
    file: key,
  }
  const result = updateFile(data);

  if (result === false) {
    return res.status(400).send({ message: 'FAIL SAVE NEW FILE' })
  }

  return res.status(200).send(data);
}
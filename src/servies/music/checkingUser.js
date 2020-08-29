import findOneMusic from '../../DAO/findOneMusic';
import checkJWT from '../../middleware/checkJWT';

export default async (req, res) => {
  try {
    const result = checkJWT(req.headers);

    if (result == false) return res.status(401).send({message: 'UNSERVICEABLE TOKEN'});    

    // Update Music before Check User Accecs
    if (req.body.id) {
      const {id} = req.body
      const data = {
        username: result.username,
        userId: result.userId
      }
      const music = await findOneMusic(id, data);
      return res.status(200).send(music);
    };

    // Create Music before Check User Accecs
    const data = {
      userId: result.id,
      username: result.username,
    };
    return res.status(200).send(data);
  } catch (err) {
    console.error(err.message);
    return res.status(400).send({message: "ERROR"});
  }
};
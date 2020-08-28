import findOneUser from '../../DAO/findOneUser';
import checkJWT from '../../middleware/checkJWT';

export default async (req, res) => {
  try {
    const result = checkJWT(req.headers);

    if (result == false) return res.status(401).send({message: 'UNSERVICEABLE TOKEN'})
    
    const user = await findOneUser(result.username);
    return res.status(200).send(user);
  } catch (err) {
    return res.status(400).send({message: 'FAIL READ PROFILE'});
  }
};
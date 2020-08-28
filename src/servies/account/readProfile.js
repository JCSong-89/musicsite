import findOneUser from '../../DAO/findOneUser';
import checkJWT from '../../middleware/checkJWT';

export default async (req, res, next) => {
  try {
    const result = checkJWT(req.headers);

    if (result == false) return res.status(401).send({message: 'UNSERVICEABLE TOKEN'})
    
    const user = await findOneUser(result.user.id);
    return res.status(200).send(user);
  } catch (err) {
    next(err.message)
  }
};
import updateUser from '../../DAO/updateUser';
import checkJWT from '../../middleware/checkJWT';

export default async (req, res, next) => {
  try {
    const result = checkJWT(req.headers);

    if (result == false) return res.status(401).send({message: 'UNSERVICEABLE TOKEN'});
    
    await updateUser(req.body, result.user);
    
    return res.status(200).send("Updated Profile");
  } catch (err) {
    next(err.message);
  }
};
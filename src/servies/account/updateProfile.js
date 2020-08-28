import bcrypt from 'bcrypt';

import updateUser from '../../DAO/updateUser';
import checkJWT from '../../middleware/checkJWT';

export default async (req, res) => {
  try {
    const result = checkJWT(req.headers);

    if (result == false) return res.status(401).send({message: 'UNSERVICEABLE TOKEN'});
    
    const hash = await bcrypt.hash(req.body.password, 10);

    updateUser(req.body, result.username, hash);

    return res.status(200).send({message: "UPDATED PROFILE"});
  } catch (err) {
    return res.status(400).send({message: "FAIL UPDATE PROFILE"});
  }
};
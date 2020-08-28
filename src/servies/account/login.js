import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import findOneUser from '../../DAO/findOneUser';
import {SECRET_KEY} from '../../config/index';

export default async (req, res, next) => {
  try{
    const user = await findOneUser(req.body);

    if (!user) return res.status(403).send({message: 'User not found'});
  
    const result = await bcrypt.compare(req.body.password, user.password);

    if (result === true) {
      const token = jwt.sign(user, SECRET_KEY);
      return res.status(200).send({Authentication: token});
    }

    return res.status(401).send({message: 'incorrect password'});
  } catch(err){
    next(err.message);
  }
};
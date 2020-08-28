import bcrypt from 'bcrypt';
import findOneUser from '../../DAO/findOneUser';
import createUser from '../../DAO/createUser';

export default async (req, res, next) => {
  try{
    const user = await findOneUser(req.body);
    const salt = 10;

    if (user) return res.status(400).send({message: 'UNUSABLE VALUE '})

    const hash = await bcrypt.hash(req.body.password, salt);
    const result = createUser(req.body, hash);

    if (result === 'Fail') return res.status(500).send('Fail');
    
    return res.status(201).send('Success')    
  } catch(err) {
    next(err.message);
  }
};
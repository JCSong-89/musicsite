import bcrypt from 'bcrypt';
import findOneUser from '../../DAO/findOneUser';
import createUser from '../../DAO/createUser';

export default async (req, res) => {
  try{
    const user = await findOneUser(req.body);

    if (user) return res.status(400).send({message: 'UNUSABLE VALUE '})

    const hash = await bcrypt.hash(req.body.password, 10);
    const result = createUser(req.body, hash);

    if (result === false) return res.status(500).send({message: 'FAIL CREATE USER'});
    
    return res.status(201).send({message: 'SUCCESS'});    
  } catch(err) {
    return res.status(400).send({message: 'FAIL REGISTER'});
  }
};
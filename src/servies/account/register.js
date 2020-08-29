import bcrypt from 'bcrypt';

import createUser from '../../DAO/createUser';
import findOneUser from '../../DAO/findOneUser';

export default async (req, res) => {
  try{
    const { username, password, name } = req.body

    if (!username || !password || !name) {
      return res.status(400).send({ message: "NEED REGISTER USER INFO" })
    }

    const user = await findOneUser(req.body);

    if (user) {
      return res.status(400).send({ message: 'UNUSABLE VALUE ' })
    }

    const hash = await bcrypt.hash(req.body.password, 10);
    const result = createUser(req.body, hash);

    if (result === false) {
      return res.status(500).send({ message: 'FAIL CREATE USER' });
    }

    return res.status(201).send({ message: 'SUCCESS' });    
  } catch(err) {
    return res.status(400).send({ message: 'FAIL REGISTER' });
  }
};
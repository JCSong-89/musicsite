import bcrypt from 'bcrypt';

import checkJWT from '../../middleware/checkJWT';
import updatePassword from '../../DAO/updateUserPassword';
import updateUser from '../../DAO/updateUser';

export default async (req, res) => {
  try {
    const { password, name } = req.body

    if (!name && !password) {
      return res.status(400).send({ message: "NEED USER INFO" })
    }

    const result = checkJWT(req.headers);

    if (result === false) {
      return res.status(401).send({ message: 'UNSERVICEABLE TOKEN' });
    }

    if (password) {
      const hash = await bcrypt.hash(password, 10);
      updatePassword(name, result.username, hash);

      return res.status(200).send({ message: "UPDATED PROFILE" });
    }

    updateUser(name, result.username);

    return res.status(200).send({ message: "UPDATED PROFILE" });
  } catch (err) {
    return res.status(400).send({ message: "FAIL UPDATE PROFILE" });
  }
};
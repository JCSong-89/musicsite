import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import findOneUser from "../../DAO/findOneUser";
import { SECRET_KEY } from "../../config/index";

export default async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).send({ message: "NEED LOGIN USER INFO" });
    }

    const user = await findOneUser(req.body);
    if (!user) {
      return res.status(403).send({ message: "USER NOT FOUND" });
    }

    const result = await bcrypt.compare(password, user.password);
    const userInfo = {
      id: user.id,
      username: user.username,
    };

    if (result === true) {
      const token = jwt.sign(userInfo, SECRET_KEY);

      return res.status(200).send({ Authentication: token });
    }

    return res.status(401).send({ message: "INCORRECT PASSWORD" });
  } catch (err) {
    return res.status(400).send({ message: "FAIL LOGIN" });
  }
};

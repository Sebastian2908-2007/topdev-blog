import dbConnect from "@/db/config/connection";
import User from "@/db/models/users";
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
    await dbConnect();
    if (req.method === 'GET') {
   
      const { email } = req.query;
  
      try {
        const user = await User.findOne({ email });
  
        if (user) {
              // Create JWT token
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          isAdmin: user.isAdmin
        },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
      );
    
    
          res.status(200).json({ user, token });
        } else {
          res.status(404).json({ message: 'User not found' });
        }
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    
}
else if (req.method === 'POST') {
    const { email, password, userName } = req.body;
    console.log(email);
    console.log(password);
    console.log(userName);
    let isAdmin = false;
    if(email.split('@')[1] === process.env.IS_ADMIN) {
        isAdmin = true;
    };
    try {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(409).json({ message: 'Email already registered' });
      };

      const user = await User.create({email:email, password:password, isAdmin:isAdmin, userName: userName });
      console.log(user);
      const token = jwt.sign(
        {
          id: user.id,
          userName: user.userName,
          email: user.email,
          isAdmin: user.isAdmin
        },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
      );

      res.status(201).json({ user,token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    };
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  };
};
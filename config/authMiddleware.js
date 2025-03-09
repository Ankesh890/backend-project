const Jwt = require('jsonwebtoken');

exports.authenticate = (req,res,next) => {
 const token = req.header('Authorization');
 if (!token) return res.status(401).json({ message: 'unauthorized'});

 try {
    const decoded = Jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
 } catch (error) {
    res.status(400),json({ message: 'Invalid token' });

   }
 };

   exports.authorize =(roles) => (req,res,next) => {
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access Denied'});
     }
     next();

   };
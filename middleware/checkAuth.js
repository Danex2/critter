import jwt from "jsonwebtoken";

const checkAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token !== undefined) {
    if (token) {
      jwt.verify(
        token,
        process.env.TOKEN_SECRET,
        { algorithms: "HS256" },
        (err, decoded) => {
          if (err) {
            return res.status(403).json({ error: "You are not authorized." });
          }
          req.data = decoded;
          return next();
        }
      );
    } else {
      return res.status(403).json({ error: "You are not authorized." });
    }
  } else {
    return res.status(400).json({
      error: "Invalid token."
    });
  }
};

export default checkAuth;

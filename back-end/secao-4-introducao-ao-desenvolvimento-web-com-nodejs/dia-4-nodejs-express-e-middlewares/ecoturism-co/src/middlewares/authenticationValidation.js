const authRequirer = (req, resp, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    return resp.status(401).json({ "message": "Token inválido" });
  }
  next();
};

module.exports = {
  authRequirer 
}
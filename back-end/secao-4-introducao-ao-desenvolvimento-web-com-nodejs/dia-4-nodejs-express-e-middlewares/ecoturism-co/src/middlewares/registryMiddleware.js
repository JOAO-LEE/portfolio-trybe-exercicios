const registryMiddleware = (req, resp, next) => {
  const { firstname, email, password, phone } = req.body;

  const requiredFields = firstname && email && password && phone;

  if (!requiredFields) {
    return resp.status(401).json({ "message": "Campos ausentes!" });
  };

  next();
};

module.exports = {
  registryMiddleware,
}

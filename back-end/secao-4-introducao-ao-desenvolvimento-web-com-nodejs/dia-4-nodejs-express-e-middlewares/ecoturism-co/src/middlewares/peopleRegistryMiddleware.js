const registryMiddleware = (req, resp, next) => {
  const { email, password, firstname, telephoneNumber } = req.body;

  const validatedCamps = email && password && firstname && telephoneNumber;

  if (!validatedCamps) {
    return resp.status(401).json({ "message": "Campos ausentes!" });
  };

  next();

}

module.exports = {
  registryMiddleware
}
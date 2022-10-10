const validateName = (req, resp, next) => {
  const { name } = req.body;

  if (!name) {
    return resp.status(400).json({ "message": "O campo name é obrigatório" });
  }
  next();
};

module.exports = {
  validateName
}
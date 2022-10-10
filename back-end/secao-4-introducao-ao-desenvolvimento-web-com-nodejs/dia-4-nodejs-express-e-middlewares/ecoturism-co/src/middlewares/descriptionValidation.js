const descriptionValidation = (req, resp, next) => {
  const { description } = req.body;

  if (!description) {
    return resp.status(400).json({ "message": "O campo description é obrigatório" })
  }

  const { createdAt, rating, difficulty } = description;

  if (!createdAt) {
    return resp.status(400).json({ "message": "O campo createdAt é obrigatório" })
  }
  if (!rating) {
    return resp.status(400).json({ "message": "O campo rating é obrigatório" })
  }
  if (!difficulty) {
    return resp.status(400).json({ "message": "O campo difficulty é obrigatório" })
  }

  next();
}

module.exports = {
  descriptionValidation
}
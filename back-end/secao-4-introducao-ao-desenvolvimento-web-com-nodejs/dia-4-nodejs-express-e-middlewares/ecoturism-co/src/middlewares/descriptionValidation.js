const descriptionValidation = (req, resp, next) => {
  const { description } = req.body;

  if (!description) {
    return resp.status(400).json({ "message": "O campo description é obrigatório" });
  }

  const { createdAt, rating, difficulty } = description;

  if (!createdAt) {
    return resp.status(400).json({ "message": "O campo createdAt é obrigatório" });
  }
  if (!rating) {
    return resp.status(400).json({ "message": "O campo rating é obrigatório" });
  }
  if (!difficulty) {
    return resp.status(400).json({ "message": "O campo difficulty é obrigatório" });
  }

  next();
};

const validFormatDate = (req, resp, next) => {
  const { description: { createdAt } } = req.body;

  const validFormat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  if (!validFormat.test(createdAt)) {
    return resp.status(400).json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });
  };

  next();
};

const validateRating = (req, resp, next) => {
  const { description: { rating } } = req.body

  const validRating = (rating >= 1 && rating <= 5);
  if (!validRating) {
    resp.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" });
  };

  next();

};

const validateDifficulty = (req, resp, next) => {
  const { description: { difficulty } } = req.body;
  
  const difficultyOptions = ["Fácil", "Médio", "Difícil"];

  const validDifficulty = Object.values(difficulty.includes(difficultyOptions));

  if(!validDifficulty) {
    resp.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  };

  next();

};


module.exports = {
  descriptionValidation,
  validFormatDate,
  validateRating,
  validateDifficulty
};
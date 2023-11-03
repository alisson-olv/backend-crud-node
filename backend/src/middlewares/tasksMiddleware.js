const validateTitle = (request, response, next) => {
  const { body } = request;

  if (body.title === undefined) {
    response.status(400).json({ message: 'The field "title" is required!' });
  }

  if (body.title === '') {
    response.status(400).json({ message: 'title cannot be empty' });
  }

  next();
};

const validateStatus = (request, response, next) => {
  const { body } = request;

  if (body.status === undefined) {
    response.status(400).json({ message: 'The field "status" is required!' });
  }

  if (body.status === '') {
    response.status(400).json({ message: 'status cannot be empty' });
  }

  next();
};

module.exports = {
  validateTitle,
  validateStatus
};
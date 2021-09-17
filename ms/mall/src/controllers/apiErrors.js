import apiVersion from './apiVersion';
import RestApiError from '../errors/RestApiError';

export const handleRestApiError = (err, req, res, next) => {
  let apiError;
  if (err instanceof RestApiError) {
    apiError = err;
  } else {
    apiError = new RestApiError(err.message, err);
  }

  const statusCode = apiError.getStatusCode();
  const error = apiError.simplify();

  res.status(statusCode).json({ apiVersion, error });
};

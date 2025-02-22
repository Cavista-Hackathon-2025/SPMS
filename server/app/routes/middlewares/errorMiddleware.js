import Response from '../../domain/Response.js';
import CustomError from './../../utils/error.js';
import HttpStatus from './../../utils/http.js';
import schoolLogger from './../../utils/logTracker.js';
import errorHelper from '../../helpers/errorHelpers.js';

const errorHandler = (error, req, res, next) => {
  schoolLogger.log('error', JSON.stringify(errorHelper.returnErrorLog(error)));
  if (error instanceof CustomError) {
    const { status, status_code, message } = error;
    const response = new Response(status_code, status, message, {});
    res.status(status_code).send(response);
    //uncomment this next sir
    next();
  } else {
    const response = new Response(
      HttpStatus.INTERNAL_SERVER_ERROR.code,
      HttpStatus.INTERNAL_SERVER_ERROR.status,
      'Something went wrong',
      {}
    );
    res.status(HttpStatus.INTERNAL_SERVER_ERROR.code).send(response);
  }
};

export default errorHandler;

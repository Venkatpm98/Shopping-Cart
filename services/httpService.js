import axios from "axios";
import logger from "./logService";
//import { toast } from "react-toastify";
import { getToken } from './authService';


axios.defaults.headers.common['x-auth-token'] = getToken();

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
    //toast.error("An unexpected error occurrred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};

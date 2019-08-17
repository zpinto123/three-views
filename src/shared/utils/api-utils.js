import axios from "axios";
import api from "../../services/config";
import { STATUS_OK } from "../constants/api-status-codes";

const post = (query, variables) =>
  axios({
    url: `${api.base}?`,
    method: "post",
    data: { query, variables }
  })
    .then(verifyResponse)
    .catch(handleErrors);

const verifyResponse = res => {
  if (!res) return null;
  if (res.status !== STATUS_OK || !res.data) {
    return res.status;
  }
  return res.data.data;
};

const handleErrors = error => error;

export { post };

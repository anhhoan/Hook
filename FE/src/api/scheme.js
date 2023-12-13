import { REST_API_METHOD as METHOD, BASE_URL } from "../container";
const API_SCHEME = {

  STUDENT: {
    GET_STUDENT: {
      url: `${BASE_URL}/student`,
      method: METHOD.GET,
    },
    ADD_STUDENT: {
      url: `${BASE_URL}/student`,
      method: METHOD.POST,
    },
    DELETE_STUDENT: {
      url: `${BASE_URL}/student/:id`,
      method: METHOD.DELETE,
    },
    UPDATE_STUDENT: {
      url: `${BASE_URL}/student/:id`,
      method: METHOD.PUT,
    },
    PAGINATION_STUDENT: {
      url: `${BASE_URL}/student/pagination`,
      method: METHOD.GET,
    },
    SEARCH_STUDENT: {
      url: `${BASE_URL}/student/search`,
      method: METHOD.GET,
    },
  },
};

export default API_SCHEME;

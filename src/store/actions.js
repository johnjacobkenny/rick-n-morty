export const LOAD_API_DATA = "rmAPI/load";
export const LOAD_API_DATA_SUCCESS = "rmAPI/loadSuccess";
export const LOAD_API_DATA_FAIL = "rmAPI/loadFail";

export const loadAPIData = payload => {
  return {
    type: LOAD_API_DATA,
    payload
  };
};

export const loadAPIDataSuccess = payload => {
  return {
    type: LOAD_API_DATA_SUCCESS,
    payload
  };
};

export const loadAPIDataFail = payload => {
  return {
    type: LOAD_API_DATA_FAIL,
    payload
  };
};

import { LOAD_API_DATA_SUCCESS, LOAD_API_DATA } from "./actions";
const initialState = {
  quotes: [],
  apiData:undefined,
  showSplashScreen: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_API_DATA:
      return { ...state, loading: true };
    case LOAD_API_DATA_SUCCESS:
      return { ...state, apiData: action.payload, showSplashScreen: false, loading:false };
    default:
      return state;
  }
};

export default reducer;

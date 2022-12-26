import { GET_MOVIEDETAILS } from "../type";

const initialState = {
  details: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MOVIEDETAILS:
      return {
        ...state,
        details: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

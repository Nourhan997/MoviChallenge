import { GET_GENRES } from "../type";

const initialState = {
  geners: [],
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_GENRES:
      return {
        ...state,
        geners: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

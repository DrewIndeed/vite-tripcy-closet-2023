import { LOADING, GET_COLLECTION_BY_ID } from "./action";

export const dataReducer = (state: any, action: any) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };

    case GET_COLLECTION_BY_ID:
      return {
        ...state,
        loading: false,
        currentCol: action.payload.data,
      };

    default:
      break;
  }

  return state;
};

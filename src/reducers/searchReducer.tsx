import { GET_COUNTRY } from "../actions/searchAction";

interface searchAction {
  type: string;
}

export const searchReducer = (state: string, action: searchAction) => {
  switch (action.type) {
    case GET_COUNTRY:
      return null;
    default:
      return null;
  }
};

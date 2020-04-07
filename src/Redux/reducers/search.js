const initialValue = {
  searchData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};
const searchReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_SEARCH_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_SEARCH_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        ierrMsg: action.payload.data,
      };
    case 'GET_SEARCH_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        searchData: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducers;

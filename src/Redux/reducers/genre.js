const initialValue = {
  genreData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const genreReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_GENRE_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_GENRE_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        ierrMsg: action.payload.data,
      };
    case 'GET_GENRE_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        genreData: action.payload.data.result,
      };
    default:
      return state;
  }
};

export default genreReducers;

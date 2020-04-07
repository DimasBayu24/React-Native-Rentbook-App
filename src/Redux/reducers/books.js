const initialValue = {
  bookData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const bookReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_BOOK_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_BOOK_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        ierrMsg: action.payload.data,
      };
    case 'GET_BOOK_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        bookData: action.payload.data,
      };
    case 'GET_AVAIL_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_AVAIL_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        ierrMsg: action.payload.data,
      };
    case 'GET_AVAIL_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        bookData: action.payload.data.result,
      };

    case 'GET_TITLE_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_TITLE_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        ierrMsg: action.payload.data,
      };
    case 'GET_TITLE_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        bookData: action.payload.data.result,
      };
    case 'GET_DATE_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_DATE_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        ierrMsg: action.payload.data,
      };
    case 'GET_DATE_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        bookData: action.payload.data.result,
      };
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
        bookData: action.payload.data.result,
      };
    case 'POST_BOOKS_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'POST_BOOKS_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'POST_BOOK_FULFILLED':
      state.bookData.push(JSON.parse(action.payload.config.data));
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        bookData: state.bookData,
      };
    case 'GET_BOOK_BY_GENRE_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_BOOK_BY_GENRE_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        ierrMsg: action.payload.data,
      };
    case 'GET_BOOK_BY_GENRE_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        bookData: action.payload.data,
      };

    default:
      return state;
  }
};

export default bookReducers;

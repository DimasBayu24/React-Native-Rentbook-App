const initialValue = {
  detailData: [],
  errMsg: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const detailReducers = (state = initialValue, action) => {
  switch (action.type) {
    case 'GET_ID_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'GET_ID_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        ierrMsg: action.payload.data,
      };
    case 'GET_ID_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        detailData: action.payload.data.result,
      };

    case 'PATCH_RENT_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'PATCH_RENT_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'PATCH_RENT_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        detailData: state.detailData,
      };
    case 'PATCH_RETURN_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'PATCH_RETURN_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'PATCH_RETURN_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        detailData: state.detailData,
      };
    case 'PATCH_UPDATE_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'PATCH_UPDATE_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'PATCH_UPDATE_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        detailData: state.detailData,
      };
    case 'DELETE_BOOK_PENDING':
      return {
        ...state,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'DELETE_BOOK_REJECTED':
      return {
        ...state,
        isPending: false,
        isRejected: true,
        errMsg: action.payload.data,
      };
    case 'DELETE_BOOK_FULFILLED':
      return {
        ...state,
        isPending: false,
        isFulfilled: true,
        detailData: state.detailData,
      };
    default:
      return state;
  }
};

export default detailReducers;

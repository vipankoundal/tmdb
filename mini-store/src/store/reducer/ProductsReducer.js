const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
        isLoading: false,
      };
    case "PRODUCT_LIMIT":
      return {
        ...state,
        productsLimit: action.payload,
        isLoading: false,
      };
    case "PRODUCT_DETAIL":
      return {
        ...state,
        productdetail: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

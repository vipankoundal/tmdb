const FilterReduder = (state, action) => {
  switch (action.type) {
    case "LOADING_FILTER_PRODUCTS":
      return {
        ...state,
        fiter_products: [...action.payload],
        all_products: [...action.payload],
      };
    case "UPDATE_FILTER_LIST":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      };
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFiltersProduct = [...all_products];
      const { category, brand } = state.filters;
      if (category !== "All") {
        tempFiltersProduct = tempFiltersProduct.filter((celm) => {
          return celm.category === category;
        });
      }
      if (brand !== "All") {
        tempFiltersProduct = tempFiltersProduct.filter((celm) => {
          return celm.brand === brand;
        });
      }
      return {
        ...state,
        fiter_products: tempFiltersProduct,
      };

    default:
      return state;
  }
};

export default FilterReduder;

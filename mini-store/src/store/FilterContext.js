import { createContext, useContext, useEffect, useReducer } from "react";
import { productsContext } from "./ProductContext";
import FilterReduder from "./reducer/FilterReduder";

const FilterContext = createContext();

const initialState = {
  fiter_products: [],
  all_products: [],
  filters: { category: "all", brand: "all" },
};

export const FilterContextProvider = (props) => {
  const { products } = useContext(productsContext);
  const [state, dispatch] = useReducer(FilterReduder, initialState);

  const updateFilterList = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    return dispatch({ type: "UPDATE_FILTER_LIST", payload: { name, value } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [products, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOADING_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider value={{ ...state, updateFilterList }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

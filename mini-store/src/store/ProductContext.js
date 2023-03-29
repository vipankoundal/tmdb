import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from "./reducer/ProductsReducer";
export const productsContext = createContext();
export let APIProducts = "https://dummyjson.com/products";
export let APIcategories = "https://api.escuelajs.co/api/v1/products";
export const ProductsProvider = (props) => {
  const initialState = {
    isLoading: false,
    isEror: false,
    products: [],
    productsLimit: [],
    categories: [],
    productdetail: {},
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAllProducts = async (url) => {
    try {
      const resProducts = await axios.get(url);
      const allProducts = await resProducts.data.products;
      dispatch({ type: "PRODUCT_LIMIT", payload: allProducts });
      dispatch({
        type: "GET_PRODUCTS",
        payload: allProducts,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getProductdetail = async (url) => {
    try {
      const resProductdetail = await axios.get(url);
      const productdetails = await resProductdetail.data;
      dispatch({ type: "PRODUCT_DETAIL", payload: productdetails });
    } catch (err) {
      console.log(err);
    }
  };

  const getAllCategories = async (url) => {
    dispatch({ type: "LOADING" });
    try {
      const resCategories = await axios.get(url);
      const allCategories = await resCategories.data;
      dispatch({
        type: "GET_CATEGORIES",
        payload: allCategories,
      });
      dispatch({ type: "CATEGORIES_ITEMS", payload: allCategories });
    } catch (err) {
      dispatch({ type: "ERROR" });
    }
  };

  useEffect(() => {
    getAllProducts(`${APIProducts}`);
    setTimeout(() => {
      getAllCategories(`${APIcategories}`);
    }, 1000);
  }, []);
  return (
    <productsContext.Provider value={{ ...state, getProductdetail }}>
      {props.children}
    </productsContext.Provider>
  );
};

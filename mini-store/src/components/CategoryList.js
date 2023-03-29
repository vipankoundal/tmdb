import React from "react";
//import { Link } from "react-router-dom";
const CategoryList = (props) => {
  return (
    <ul>
      {props.categoiesData.map((list, i) => {
        return (
          <li key={i}>
            <button
              name="category"
              value={list}
              onClick={props.updateFilterList}
            >
              {list}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;

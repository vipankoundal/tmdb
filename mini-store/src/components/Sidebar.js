import { useFilterContext } from "../store/FilterContext";
import BrandList from "./BrandList";
import CategoryList from "./CategoryList";

const Sidebar = () => {
  const {
    all_products,
    updateFilterList,
    filters: { category, brand },
  } = useFilterContext();
  const getUniqueData = (data, list) => {
    let newlist = data.map((item) => item[list]);

    return (newlist = ["All", ...new Set(newlist)]);
  };
  //need unique data
  const categoiesData = getUniqueData(all_products, "category");
  const brandData = getUniqueData(all_products, "brand");

  return (
    <>
      <div className="sidebar">
        <div className="categoies-list">
          <h4>Categories</h4>
          <CategoryList
            categoiesData={categoiesData}
            updateFilterList={updateFilterList}
            category={category}
          />
          <h4>Brand</h4>
          <BrandList
            brandData={brandData}
            updateFilterList={updateFilterList}
            brand={brand}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

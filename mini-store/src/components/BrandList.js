const BrandList = (props) => {
  return (
    <div className="filter-brand">
      <select name="brand" id="brand" onClick={props.updateFilterList}>
        {props.brandData.map((list, i) => {
          return (
            <option key={i} name="brand" value={list}>
              {list}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default BrandList;

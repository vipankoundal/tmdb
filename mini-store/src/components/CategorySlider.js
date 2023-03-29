import SectionTitle from "./SectionTitle";
import Slider from "./Slider";

const CategorySlider = ({ data }) => {
  console.log("cs", data);
  return (
    <section className="section-bg">
      <div className="container">
        <div className="container__row">
          <SectionTitle />
          <Slider data={data} />
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;

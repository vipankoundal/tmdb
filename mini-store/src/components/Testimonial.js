import SectionTitle from "./SectionTitle";
import HappyClient from "./HappyClient";

const Testimonial = () => {
  return (
    <section className="section-bg">
      <div className="testimonial container">
        <div className="testimonial">
          <SectionTitle title="we deliver happiness" />
          <div className="container__row">
            <HappyClient />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

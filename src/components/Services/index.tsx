import SectionTitle from "../Common/SectionTitle";
import SingleService from "./SingleService";
import ServiceData from "./ServiceData";

const Services = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Services we Provide"
            paragraph="Empowering startups to soar: from ideation to innovation, we're your launchpad to success!"
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {ServiceData.map((feature) => (
              <SingleService key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

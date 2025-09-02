import Image from "next/image";
import Marquee from "react-fast-marquee";

const TopFeaturesOne: React.FC = () => {
  return (
    <div className="bg-white border-top border-neutral-100 tw-py-4 common-shadow-one">
      <div className="container">
        <div className="top-features-slider overflow-hidden left-right-gradient position-relative">
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            direction="left"
          >
            {[
              "Write clean, innovative programs that solve real-world problems with creativity.",
              "Work together, share ideas, and build impactful projects as a community.",
              "Overcome coding challenges, hackathons, and competitions with confidence and skill."
            ].map((text, i) => (
              <div
                key={i}
                className="d-flex align-items-center tw-gap-4 px-5"
              >
                <span>
                  <Image
                    width={18}
                    height={17}
                    src="/assets/images/icons/chart-icon.svg"
                    alt="CodSoc25"
                  />
                </span>
                <span className="text-heading fw-medium tw-text-base">
                  {text}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default TopFeaturesOne;

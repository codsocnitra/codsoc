import Image from "next/image";
import Link from "next/link";

const OfferOne: React.FC = () => {
  return (
    <section className="offer py-120 overflow-hidden">
      <div className="container">
        <div className="tw-mb-13">
          <span className="tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205">
            What We Do
          </span>
          <div className="d-flex flex-lg-nowrap flex-wrap justify-content-between align-items-center">
            <div className="max-w-672-px">
              <h3 className="splitTextStyleOne tw-leading-104">
                Comprehensive Student Coding Initiatives
              </h3>
            </div>
            <p className="splitTextStyleOne text-neutral-500 max-w-500-px">
              We provide coding, research, and innovation opportunities that
              empower students to learn, collaborate, and showcase their
              technical skills at both national and international levels.
            </p>
          </div>
        </div>
        <div className="row gy-4">
          {/* 1. Workshops & Bootcamps */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-duration={600}>
            <div className="group-item position-relative tw-rounded-3xl overflow-hidden z-1 h-100 tw-pt-15 bg-pink-dark tw-px-40-px tw-pb-84-px tw-duration-300">
              <span className="tw-text-base fw-semibold tw-mb-2 text-pink">
                Workshops & Bootcamps
              </span>
              <h4 className="splitTextStyleOne tw-mb-5 max-w-330-px">
                Web Dev, AI/ML, Cybersecurity, Cloud, Data Science & Blockchain
              </h4>
              <p className="text-black-600 ">
                Beginner to advanced level sessions  with hands-on coding,
                conducted by <br />faculty mentors, alumni, and industry<br /> experts.
              </p>
              <Link
                href="/service-details"
                className="tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle bg-white tw-text-2xl hover-bg-main-600 hover-text-white hover--translate-y-1"
              >
                <i className="ph-bold ph-arrow-up-right" />
              </Link>
              <Image
                width={347}
                height={371}
                src="/assets/images/thumbs/offer-img1.jpg"
                alt="Workshops & Bootcamps"
                className="tw-duration-300 position-absolute bottom-0 rounded tw-end-0 z-n1"
              />
            </div>
          </div>

          {/* 2. Hackathons & Competitions */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-duration={600}>
            <div className="group-item position-relative tw-rounded-3xl overflow-hidden z-1 h-100 tw-pt-15 bg-purple-light tw-px-40-px tw-pb-84-px tw-duration-300">
              <span className="tw-text-base fw-semibold tw-mb-2 text-purple">
                Hackathons & Competitions
              </span>
              <h4 className="splitTextStyleOne tw-mb-5 max-w-330-px">
                Internal & National Level Coding Challenges
              </h4>
              <p className="text-black-700">
                Monthly sprints, Smart India Hackathon, ICPC, Google Kickstart
                with rewards, mentorship, and recognition for <br />top performers.
              </p>
              <Link
                href="/service-details"
                className="tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle bg-white tw-text-2xl hover-bg-main-600 hover-text-white hover--translate-y-1"
              >
                <i className="ph-bold ph-arrow-up-right" />
              </Link>
              <Image
                width={320}
                height={250}
                src="/assets/images/thumbs/offer-img2.jpg"
                alt="Hackathons & Competitions"
                className="tw-duration-300  position-absolute rounded bottom-0 tw-end-0 z-n1"
              />
            </div>
          </div>

          {/* 3. Project Development & Incubation */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-duration={600}>
            <div className="group-item position-relative tw-rounded-3xl overflow-hidden z-1 h-100 tw-pt-15 bg-main-50 tw-px-40-px tw-pb-84-px tw-duration-300">
              <span className="text-main-600 fw-semibold tw-mb-2">
                Project Development & Incubation
              </span>
              <h4 className="splitTextStyleOne tw-mb-5 max-w-330-px">
                Real-world Projects with NTC Incubation Support
              </h4>
              <p className="text-black-700 fw-700 mb-4">
                Team-based projects solving real problems, presented in industry
                exhibitions and research conferences.
              </p>
              <Link
                href="/service-details"
                className="tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle bg-main-600 text-white tw-text-2xl hover-text-white hover--translate-y-1"
              >
                <i className="ph-bold ph-arrow-up-right" />
              </Link>
              <Image
                width={327}
                height={281}
                src="/assets/images/thumbs/offer-img3.jpg"
                alt="Project Development & Incubation"
                className="tw-duration-300 position-absolute rounded bottom-0 tw-end-0 z-n1"
              />
            </div>
          </div>

          {/* 4. Open Source & Research */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-duration={600}>
            <div className="group-item position-relative tw-rounded-3xl overflow-hidden z-1 h-100 tw-pt-15 bg-paste-light tw-px-40-px tw-pb-84-px tw-duration-300">
              <span className="tw-text-base fw-semibold tw-mb-2 text-pink">
                Open Source & Research
              </span>
              <h4 className="splitTextStyleOne tw-mb-5 max-w-330-px">
                Contribute, Publish & Innovate
              </h4>
              <p className="text-neutral-700">
                Students contribute to GitHub, <br />IEEE papers, patents, and get
                training <br />on version control, collaboration, <br/>and publishing.
              </p>
              <Link
                href="/service-details"
                className="tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle bg-paste tw-text-2xl text-white hover--translate-y-1"
              >
                <i className="ph-bold ph-arrow-up-right" />
              </Link>
              <Image
                width={347}
                height={222}
                src="/assets/images/thumbs/offer-img3.jpeg"
                alt="Open Source & Research"
                className="tw-duration-300 position-absolute bottom-0 rounded tw-end-0 z-n1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferOne;

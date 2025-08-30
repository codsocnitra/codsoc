import Image from "next/image";
import Link from "next/link";

const ProjectShowcase: React.FC = () => {
  const projects = [
    {
      category: "AI & Automation",
      title: "Smart Video AI",
      description:
        "An automated video editing tool using OpenAI Whisper + OpenCV to transcribe and auto-cut content smartly.",
      bgColor: "bg-pink-dark",
      textColor: "text-white-50",
      link: "/project-details",
      image: {
        src: "/assets/images/thumbs/project1.png",
        width: 447,
        height: 200,
        alt: "Smart Video AI",
      },
    },
    {
      category: "EdTech",
      title: "NitraPrep",
      description:
        "Academic & placement preparation platform for NTC students with curated resources, mock tests, and mentorship.",
      bgColor: "bg-purple-light",
      textColor: "text-neutral-700",
      link: "/project-details",
      image: {
        src: "/assets/images/thumbs/project2.png",
        width: 420,
        height: 240,
        alt: "NitraPrep",
      },
    },
    {
      category: "Smart Discovery",
      title: "KhojPoint",
      description:
        "A smart local discovery platform helping students explore shops, food spots, and services around NTC.",
      bgColor: "bg-main-50",
      textColor: "text-neutral-700",
      link: "/project-details",
      image: {
        src: "/assets/images/thumbs/project3.png",
        width: 380,
        height: 250,
        alt: "KhojPoint",
      },
    },
    {
      category: "EdTech + IoT",
      title: "Digital Udaan & IoT Milk Pan",
      description:
        "Digital Udaan – Smart classroom management system. IoT Milk Pan – kitchen innovation preventing milk spill.",
      bgColor: "bg-paste-light",
      textColor: "text-neutral-700",
      link: "/project-details",
      image: {
        src: "/assets/images/thumbs/project4.png",
        width: 420,
        height: 230,
        alt: "Digital Udaan & IoT Milk Pan",
      },
    },
  ];

  return (
    <section className="offer py-120 overflow-hidden">
      <div className="container">
        {/* Heading Section */}
        <div className="tw-mb-13">
          <span className="tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205">
            Our Flagship Work
          </span>
          <div className="d-flex flex-lg-nowrap flex-wrap justify-content-between align-items-center">
            <div className="max-w-672-px">
              <h3 className="splitTextStyleOne tw-leading-104">
                Innovation in Action – Our Projects
              </h3>
            </div>
            <p className="splitTextStyleOne text-neutral-500 max-w-500-px">
              From AI tools to IoT innovations, our projects highlight creativity, 
              teamwork, and impactful solutions developed by NTC students.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="row gy-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div
                className={`group-item position-relative tw-rounded-3xl overflow-hidden z-1 h-100 tw-pt-15 ${project.bgColor} tw-px-40-px tw-pb-84-px tw-duration-300`}
              >
                <span className="tw-text-base fw-semibold tw-mb-2">
                  {project.category}
                </span>
                <h4 className="splitTextStyleOne tw-mb-5 max-w-330-px">
                  {project.title}
                </h4>
                <p className={project.textColor}>{project.description}</p>

                <Link
                  href={project.link}
                  className="tw-w-15 tw-h-15 d-flex justify-content-center align-items-center rounded-circle bg-white tw-text-2xl hover-bg-main-600 hover-text-white hover--translate-y-1"
                >
                  <i className="ph-bold ph-arrow-up-right" />
                </Link>

                <Image
                  width={project.image.width}
                  height={project.image.height}
                  src={project.image.src}
                  alt={project.image.alt}
                  className="tw-duration-300 position-absolute bottom-0 tw-end-0 z-n1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;

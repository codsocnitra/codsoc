"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

/* ===========================
   DYNAMIC DATA (ALL CONST)
=========================== */
const ABOUT_DATA = {
  section: {
    badge: { label: "About Us" },
    title: { parts: ["Who", "We", "Are"], boldAt: [0, 2] }, // indices to bold
    introHtml:
      'CodSoc’25 was founded in 2025 as the official coding and innovation society of <strong>NITRA Technical Campus (NTC), Ghaziabad</strong>.',
    closing:
      "Our society acts as a bridge between academic learning and industry expectations, ensuring that every student develops practical knowledge, problem-solving ability, and teamwork skills.",
  },

  bullets: [
    "Promote a strong coding culture across all academic years and branches.",
    "Encourage innovation through structured projects, workshops, and hackathons.",
    "Develop industry-ready skills by focusing on modern frameworks, AI/ML, and open-source contributions.",
    "Facilitate student exposure to opportunities at both national and international levels.",
  ],

  leftGrid: {
    // Card 1: Year + text
    growthCard: {
      year: "2025",
      caption: "Year CodSoc’25 was founded",
      icon: { src: "/assets/images/icons/arrow-up.svg", width: 22, height: 38, alt: "growth" },
      classes: {
        wrap: "bg-main-600 tw-rounded-3xl tw-p-8 text-center h-100 d-flex flex-column justify-content-center align-items-center",
        year: "text-white d-inline-flex align-items-center tw-gap-3 tw-mb-9",
        text: "text-white tw-text-sm",
      },
    },
    // Card 2: Image + floating label
    imageCard: {
      image: {
        src: "/assets/images/thumbs/nitra.png",
        alt: "student community",
        className: "object-contain",
      },
      floatLabel: {
        badgeIcon: "ph-bold ph-smiley",
        title: "NTC",
        subtitle: "NITRA Technical Campus",
      },
      classes: {
        imageBox: "bg-main-two-600 tw-rounded-3xl tw-h-300-px d-flex flex-column justify-content-center align-items-center position-relative",
        floatBox:
          "bg-white tw-rounded-lg common-shadow-one border-bottom border-3 border-main-600 tw-px-4 tw-py-2 d-flex align-items-center tw-gap-3 z-1 position-absolute top-0 tw-end-0 tw-mt-194-px",
        floatBadge:
          "bg-neutral-200 tw-w-10 tw-h-10 tw-rounded-xl d-flex justify-content-center align-items-center text-neutral-500",
        floatSub: "fw-medium tw-text-sm text-neutral-500",
      },
    },
    // Card 3: Radial progress
    progressCard: {
      percentage: 100,
      caption: "Student-driven initiatives",
      classes: {
        wrap: "bg-main-two-600 tw-rounded-3xl tw-p-8 text-center d-flex flex-column justify-content-center align-items-center tw-h-300-px",
        caption: "text-white tw-text-sm tw-mt-5",
      },
    },
    // Card 4: Drag tags
    dragTagsCard: {
      tags: [
        { text: "Coding Culture", className: "tw-px-9 tw-py-1 fw-semibold text-white bg-main-two-600 rounded-pill" },
        { text: "Hackathons", className: "tw-px-4 tw-py-1 fw-semibold text-white bg-pink rounded-pill" },
        { text: "Open Source", className: "tw-px-9 tw-py-1 fw-semibold text-white bg-main-600 rounded-pill" },
      ],
      classes: {
        wrap: "myContainer position-relative d-flex flex-column justify-content-center align-items-center h-100 tw-gap-705 overflow-hidden",
        tag: "drag-rotate-element cursor-grab min-w-max z-1",
      },
    },
  },

  layout: {
    section: "py-120 drag-rotate-element-section",
    container: "container",
    gradientBox: "tw-rounded-50-px gradient-bg-one tw-px-36-px tw-pt-9",
    row: "row gy-4",
    leftCol: "col-lg-6",
    leftPad: "tw-pe-12 position-relative",
    grid: "row g-2",
    rightCol: "col-lg-6",
    rightCard: "common-shadow-three tw-rounded-40-px bg-white tw-ps-56-px tw-pe-6 tw-py-84-px",
    rightHeaderWrap: "tw-mb-14",
    badge:
      "tw-py-1 tw-px-705 bg-main-50 text-main-600 tw-text-sm fw-bold text-capitalize rounded-pill tw-mb-205",
    title: "splitTextStyleOne fw-light tw-leading-104",
    introText: "text-neutral-600 tw-mb-6",
    bulletsUl: "d-flex flex-column tw-gap-6 custom-list",
    closingText: "text-neutral-600 tw-mt-8",
  },

  aos: { anim: "fade-up", duration: 800 },
};

/* ===========================
   INLINE STYLES VIA CONST
   (Animated Bullets)
=========================== */
const listStyles = {
  list: {
    listStyle: "none",
    paddingLeft: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
  },
  itemBase: {
    position: "relative" as const,
    paddingLeft: "30px",
    fontSize: "1rem",
    lineHeight: 1.6,
    color: "#333",
    cursor: "pointer",
    transition: "color 0.3s ease, transform 0.3s ease, opacity 0.3s ease",
    willChange: "transform, opacity",
  },
  arrowBase: {
    position: "absolute" as const,
    left: 0,
    top: 0,
    fontSize: "1.2rem",
    color: "#007bff",
    transition: "transform 0.3s ease, color 0.3s ease",
    display: "inline-block",
  },
};

/* ===========================
   COMPONENT
=========================== */
const AboutOne: React.FC = () => {
  // Bullets: staggered fade-up + hover arrow slide
  const [visible, setVisible] = useState<boolean[]>(
    Array(ABOUT_DATA.bullets.length).fill(false)
  );
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1);

  useEffect(() => {
    const timers = ABOUT_DATA.bullets.map((_, i) =>
      setTimeout(() => {
        setVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 150 + i * 150)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  const Title = () => {
    const { parts, boldAt } = ABOUT_DATA.section.title;
    return (
      <h3 className={`${ABOUT_DATA.layout.title}`}>
        {parts.map((part, i) => (
          <span
            key={i}
            className={`d-inline-block ${boldAt.includes(i) ? "fw-semibold" : ""}`}
          >
            {part}{" "}
          </span>
        ))}
      </h3>
    );
  };

  return (
    <section className={ABOUT_DATA.layout.section}>
      <div className={ABOUT_DATA.layout.container}>
        <div className={ABOUT_DATA.layout.gradientBox}>
          <div className={ABOUT_DATA.layout.row}>
            {/* Left Side Graphics */}
            <div className={ABOUT_DATA.layout.leftCol}>
              <div className={ABOUT_DATA.layout.leftPad}>
                <div className={ABOUT_DATA.layout.grid}>
                  {/* Growth Card */}
                  <div
                    className="col-sm-6"
                    data-aos={ABOUT_DATA.aos.anim}
                    data-aos-duration={ABOUT_DATA.aos.duration}
                  >
                    <div className={ABOUT_DATA.leftGrid.growthCard.classes.wrap}>
                      <h3 className={ABOUT_DATA.leftGrid.growthCard.classes.year}>
                        <span className="d-flex">
                          <Image
                            width={ABOUT_DATA.leftGrid.growthCard.icon.width}
                            height={ABOUT_DATA.leftGrid.growthCard.icon.height}
                            src={ABOUT_DATA.leftGrid.growthCard.icon.src}
                            alt={ABOUT_DATA.leftGrid.growthCard.icon.alt}
                          />
                        </span>
                        <span>{ABOUT_DATA.leftGrid.growthCard.year}</span>
                      </h3>
                      <p className={ABOUT_DATA.leftGrid.growthCard.classes.text}>
                        {ABOUT_DATA.leftGrid.growthCard.caption}
                      </p>
                    </div>
                  </div>

                  {/* Image Card with Float Label */}
                  <div
                    className="col-sm-6"
                    data-aos={ABOUT_DATA.aos.anim}
                    data-aos-duration={ABOUT_DATA.aos.duration}
                  >
                    <div className={ABOUT_DATA.leftGrid.imageCard.classes.imageBox}>
                      <Image
                        src={ABOUT_DATA.leftGrid.imageCard.image.src}
                        alt={ABOUT_DATA.leftGrid.imageCard.image.alt}
                        fill
                        className={ABOUT_DATA.leftGrid.imageCard.image.className}
                      />
                    </div>
                    <div className={ABOUT_DATA.leftGrid.imageCard.classes.floatBox}>
                      <span className={ABOUT_DATA.leftGrid.imageCard.classes.floatBadge}>
                        <i className={ABOUT_DATA.leftGrid.imageCard.floatLabel.badgeIcon} />
                      </span>
                      <div>
                        <h6>
                          <span>{ABOUT_DATA.leftGrid.imageCard.floatLabel.title}</span>
                        </h6>
                        <p className={ABOUT_DATA.leftGrid.imageCard.classes.floatSub}>
                          {ABOUT_DATA.leftGrid.imageCard.floatLabel.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress Card */}
                  <div
                    className="col-sm-6"
                    data-aos={ABOUT_DATA.aos.anim}
                    data-aos-duration={ABOUT_DATA.aos.duration}
                  >
                    <div className={ABOUT_DATA.leftGrid.progressCard.classes.wrap}>
                      <div className="circle-border d-inline-block">
                        <svg
                          className="radial-progress"
                          viewBox="0 0 80 80"
                          aria-label={`Progress ${ABOUT_DATA.leftGrid.progressCard.percentage}%`}
                        >
                          <circle className="incomplete" cx={40} cy={40} r={35} />
                          <circle
                            className="complete circle_custom_1"
                            cx={40}
                            cy={40}
                            r={35}
                          />
                          <text
                            className="percentage"
                            x="50%"
                            y="57%"
                            transform="matrix(0, 1, -1, 0, 80, 0)"
                          >
                            {ABOUT_DATA.leftGrid.progressCard.percentage}%
                          </text>
                        </svg>
                      </div>
                      <p className={ABOUT_DATA.leftGrid.progressCard.classes.caption}>
                        {ABOUT_DATA.leftGrid.progressCard.caption}
                      </p>
                    </div>
                  </div>

                  {/* Drag Tags */}
                  <div
                    className="col-sm-6"
                    data-aos={ABOUT_DATA.aos.anim}
                    data-aos-duration={ABOUT_DATA.aos.duration}
                  >
                    <div className={ABOUT_DATA.leftGrid.dragTagsCard.classes.wrap}>
                      {ABOUT_DATA.leftGrid.dragTagsCard.tags.map((t, i) => (
                        <span
                          key={i}
                          className={`${ABOUT_DATA.leftGrid.dragTagsCard.classes.tag} ${t.className}`}
                        >
                          {t.text}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Content */}
            <div className={ABOUT_DATA.layout.rightCol}>
              <div className={ABOUT_DATA.layout.rightCard}>
                <div className={ABOUT_DATA.layout.rightHeaderWrap}>
                  <span className={ABOUT_DATA.layout.badge}>
                    {ABOUT_DATA.section.badge.label}
                  </span>
                  <Title />
                </div>

                <p
                  className={ABOUT_DATA.layout.introText}
                  dangerouslySetInnerHTML={{ __html: ABOUT_DATA.section.introHtml }}
                />

                {/* Animated Bullets (const-based styles) */}
                <ul className={ABOUT_DATA.layout.bulletsUl} style={listStyles.list}>
                  {ABOUT_DATA.bullets.map((text, i) => {
                    const isHovered = hoveredIndex === i;
                    const itemStyle = {
                      ...listStyles.itemBase,
                      opacity: visible[i] ? 1 : 0,
                      transform: visible[i] ? "translateY(0)" : "translateY(10px)",
                      color: isHovered ? "#007bff" : "#333",
                    };
                    const arrowStyle = {
                      ...listStyles.arrowBase,
                      transform: isHovered ? "translateX(6px)" : "translateX(0)",
                      color: isHovered ? "#0056b3" : "#007bff",
                    };
                    return (
                      <li
                        key={i}
                        style={itemStyle}
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(-1)}
                      >
                        <span style={arrowStyle}>➜</span>
                        {text}
                      </li>
                    );
                  })}
                </ul>

                <p className={ABOUT_DATA.layout.closingText}>{ABOUT_DATA.section.closing}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;

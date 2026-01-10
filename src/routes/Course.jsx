import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import courses, { courseImages } from "../data/index.js";

export default function Course() {
  const { courseName } = useParams();
  const course = courses[courseName];
  const courseImage = courseImages[courseName];

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      course.Sections.forEach((section, index) => {
        const sectionElement = document.getElementById(`section-${index}`);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [course.Sections]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) {
    return (
      <>
        <NavBar currentPage="Courses" />
        <h1 className="text-4xl font-sans text-center font-bold mt-[82px] mb-[41px] text-cYellow">
          Course not found
        </h1>
        <div className="text-center mt-8 my-20">
          <Link to="/courses" className="text-cBronze underline">
            Back to courses
          </Link>
        </div>
      </>
    );
  }

  const scrollToSection = (index) => {
    const sectionElement = document.getElementById(`section-${index}`);
    if (sectionElement) {
      const offset = sectionElement.offsetTop - 120; // Adjust for navbar height
      window.scrollTo({ top: offset, behavior: "smooth" });
      setActiveSection(index); // Update active section immediately
    }
  };

  return (
    <>
      <NavBar currentPage="Courses" />

      <h1 className="text-4xl font-sans text-center font-bold mt-[82px] mb-[41px] text-cYellow">
        {course.Title}
      </h1>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-12 xl:w-4/5 mx-auto">
        <img
          className="bg-black w-[500px] h-auto"
          src={courseImage}
          alt={course.Title}
        />
        <div className="flex flex-col text-cGery text-2xl gap-5 justify-center mx-4">
          {course.FAQ.map((faq, index) => (
            <div key={index}>
              <p>
                <div className="text-cBlack m-0">{faq.Question}</div>
                {faq.Answer}
              </p>
            </div>
          ))}

          <Link
            to="/trial-class"
            className="bg-cBronze hover:bg-transparent border-3 border-transparent hover:border-cYellow hover:text-cBlack text-white text-[20px] rounded-[15px] px-6 py-3 mt-4 mx-auto cursor-pointer transition-all duration-300"
          >
            Book Trial Class
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse justify-center gap-10 my-[82px] w-4/5 mx-auto">
        <div className="grid w-fit h-fit lg:sticky top-40 text-nowrap mt-1">
          {course.Sections.map((section, index) => (
            <div
              key={index}
              className={`cursor-pointer flex items-center gap-2 group ${
                activeSection === index ? "text-cBlack" : ""
              }`}
              onClick={() => scrollToSection(index)}
            >
              <div
                className={`bg-cYellow w-0.5 group-hover:w-1.5 h-full shrink-0 duration-300 mr-3 ${
                  activeSection === index ? "w-1.5" : ""
                }`}
              ></div>
              <p
                className={`text-cGery group-hover:text-cBlack transition-all duration-300 text-2xl my-2 ${
                  activeSection === index ? "text-cBlack!" : ""
                }`}
              >
                {section.Heading}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-15 w-full">
          {course.Sections.map((section, index) => (
            <div key={index} id={`section-${index}`} className="grid gap-3">
              <h2 className="text-4xl font-bold text-cBlack">
                {section.Heading}
              </h2>
              {section.ul ? (
                <ul className="text-cGery text-2xl">
                  {section.Content.map((item, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item }}
                    ></li>
                  ))}
                </ul>
              ) : section.ol ? (
                <ol className="text-cGery text-2xl">
                  {section.Content.map((item, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item }}
                    ></li>
                  ))}
                </ol>
              ) : (
                <p
                  className="text-cGery text-2xl"
                  dangerouslySetInnerHTML={{ __html: section.Content }}
                ></p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        }
      );
    });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full ">
        <div className="showcaselayout">
          {/* LEFT */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/DC.PNG" alt="ДоброЦентр" />
            </div>
            <div className="text-content">
              <h2>
                Являюсь заместителем руководителя ДоброЦентра РГПУ им. А. И.
                Герцена
              </h2>
              <p className="text-white-50 md:text-xl">
                Активное сотрудничество нашего объединение с Управлением
                Развития Воспитательных проектов и Молодежных Практик РГПУ им.
                А. И. Герцена
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div>
                <img src="/images/Laos.PNG" alt="Лаос" />
              </div>
              <h2>Встреча с президентом Лаоса, Тхонглуном Сисулитом</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div>
                <img
                  src="/images/ZackSobr.PNG"
                  alt="Законодательное Собрание"
                />
              </div>
              <h2>
                Организация заседания в Законодательном Собрании
                Санкт-Петербурга
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;

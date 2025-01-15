import { useEffect, useRef } from "react";
import Header from "../Components/Header";
import SectionTitle from "../Components/SectionTitle";
import { assets } from "../assets/assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutUs = () => {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 1000) {
      gsap.registerPlugin(ScrollTrigger);

      const animateSection = (ref) => {
        const el = ref.current;
        if (el) {
          gsap.to(el, {
            scale: 0.8,
            filter: "blur(10px)",
            scrollTrigger: {
              trigger: el,
              start: "top -15vh",
              end: "bottom center",
              scrub: 1, // Use scrub for smooth animation
              ease: "power2.out", // Smooth easing function
              markers: false, // Optional: remove scroll markers
           
            },
            duration: 2, // Smooth transition duration
          });
        }
      };

      animateSection(sectionRef1);
      animateSection(sectionRef2);
      animateSection(sectionRef3);
    }
  }, []);

  return (
    <div>
      <Header
        title="Our Story"
        para="Excellence at the Intersection of Strategy and Compliance"
        image={assets.abtbanner}
      />

      <div className="paraSlide">
        {/* Section 1 */}
        <div className="section sectionMobile" ref={sectionRef1}>
          <SectionTitle sectionTitle={"OVERVIEW"} sectionPara={"ABOUT US"} />
          <div className="aboutUs">
            {/* LeftSide */}
            <div className="leftSide">
              <div className="leftSideGrid">
                <div>
                  <img src={assets.abt1}  alt="" />
                </div>
                <div>
                  <img src={assets.abt3}  alt="" />
                  <img src={assets.abt2} alt="" />
                </div>
              </div>
            </div>

            {/* RightSide */}
            <div className="rightSide">
              <p>
              Consulven IFSC Pvt Ltd is a pioneering advisory and compliance firm based in the heart of Gujarat’s Gift City IFSC. With our bespoke suite of management consulting, compliance, and secretarial solutions, we specialize in helping organizations across a broad range of sectors enhance their strategic positioning, streamline operations, and navigate complex regulatory environments. 
              </p>

              <p>
              Our team of experts’ deep industry expertise, coupled with our strong network in markets across Asia, the Middle East, and Africa, enables us to provide specified governance risk and compliance strategies that deliver measurable impact. Whether supporting business transformations, implementing a change management plan, ensuring regulatory compliance, or guiding strategic investments, Consulven also assists clients in optimizing their product development life cycle. As a trusted business partner with a focus on corporate advisory and business management, we are committed to unlocking value and driving sustainable growth for our clients. 
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="section" ref={sectionRef2}>
          <SectionTitle sectionTitle={"OUR MISSION & VISION"} />
          <div className="bgGradient">
            <div className="vision">
              <h1>Vision</h1>
              <p>
              To position ourselves as the partner of choice for organizations seeking mastery in governance, compliance, and strategy amidst the complexities of evolving global markets. 
              </p>

              <div className="visionImg">
                <img
                  src={assets.v1}
                  alt=""
                />
              </div>

              <div className="mission">
                <h1>Mission</h1>
                <p>
                Our mission at Consulven is to enable businesses to succeed in a dynamic market through expert advisory and strategic support. Anchored in integrity, professionalism, and client satisfaction, we offer global and Gift City clients, including key IFSC stakeholders, the essential tools to achieve excellence. 
                </p>

                <img src={assets.arrow} alt="" className="arrow" />

                <div className="animaBlack"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="section last">
          <SectionTitle sectionTitle={"OUR VALUES"} />
          <div className="card-container">
            <div className="card">
              <div className="bg">
                <img src={assets.av1} alt="" />
                <h2>INTEGRITY</h2>
                <p>Adhering to uncompromising standards of honesty, ethical conduct, and responsibility in all our interactions and commitments. </p>
              </div>
              <div className="blob"></div>
            </div>
            <div className="card">
              <div className="bg">
                <img src={assets.av2} alt="" />
                <h2>CLIENT-CENTRICITY</h2>
                <p>Every decision we make revolves around our clients, providing personalized solutions designed to tackle their unique challenges and drive meaningful outcomes.</p>
              </div>
              <div className="blob"></div>
            </div>
            <div className="card">
              <div className="bg">
                <img src={assets.av3} alt="" />
                <h2>INNOVATION</h2>
                <p>Adopting emerging technologies and innovative frameworks to navigate and resolve the complexities of today’s business landscape.</p>
              </div>
              <div className="blob"></div>
            </div>
            <div className="card">
              <div className="bg">
                <img src={assets.av4} alt="" />
                <h2>AGILITY</h2>
                <p>We stay one step ahead of regulatory and market changes, enabling our clients to anticipate challenges and seize new opportunities.</p>
              </div>
              <div className="blob"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

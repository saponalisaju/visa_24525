import React, { useEffect, useState } from "react";
import "./Home15.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardUser,
  faChartSimple,
  faCubes,
  faPaperPlane,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

const Component15 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="component_fifteen text-center">
      <h1 className="application_process  text-center bg-info-subtle ">
        Our Application Process
      </h1>
      <div className="bacground_page ">
        <div className="main_content_item  d-flex  bg-light  ">
          <div className="main-item-one ">
            <div className="processing_item_one">
              <FontAwesomeIcon icon={faPaperPlane} className="display-4 icon" />
              <h4 className="">APPLICATION</h4>
              <p className="">
                <strong> Canada: </strong>
                Canada has expanded its International Experience Canada (IEC)
                program, allowing Australian citizens to stay up to 24 months
                under the Working Holiday and Young Professionals categories.
                <strong> Australia: </strong> Recent immigration changes include
                visa delays, fee hikes, and new salary thresholds, affecting
                skilled migration programs like the 189, 190, and 491 visas.
              </p>
            </div>
            <div className="processing_item_two ">
              <FontAwesomeIcon
                icon={faChartSimple}
                className="display-4 icon"
              />
              <h4>VISA FEES</h4>
              <p className="">
                <strong> Canada: </strong> Canada has updated its visitor visa
                policies, giving immigration officers more discretion in issuing
                single-entry or multiple-entry visas based on an applicant’s
                financial stability, purpose of visit, and ties to their home
                country.
                <strong> Australia: </strong>
                The Temporary Skill Shortage (TSS) Visa (Subclass 482) allows
                employers to bring in skilled workers for up to four years. The
                Skilled Independent Visa (Subclass 189) remains a points-based
                visa for skilled workers who are not sponsored by an employer,
                state, or family member.
              </p>
            </div>
          </div>
          <div className="main-item-two">
            <div className="processing_item_three ">
              <FontAwesomeIcon icon={faCubes} className="display-4 icon" />
              <h4 className="p-1">BIOMETRIC ACCEPT</h4>
              <p className="">
                Biometric data consists of measurable physical traits unique to
                an individual, such as fingerprints or facial features. When
                collected and stored in a secure database, this data aids in
                identity verification or cross-referencing for authentication.
              </p>
            </div>
            <div className="processing_item_four ">
              <FontAwesomeIcon
                icon={faChalkboardUser}
                className="display-4 icon"
              />
              <h4 className="p-1">VISA DECISION AND VALIDITY</h4>
              <p className="">
                While the outcome of an application cannot be guaranteed, most
                applicants receive a decision—whether approval or
                rejection—within a reasonable timeframe. Visa validity specifies
                the period during which the holder is authorized to travel to a
                port of entry, such as those in Australia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright ">
        Copyright &copy; {new Date().getFullYear()} World Job Visa's. All Rights
        Reserved.
      </p>

      {isVisible && (
        <button onClick={scrollToTop} className="scroll-top">
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      )}
    </div>
  );
};

export default Component15;

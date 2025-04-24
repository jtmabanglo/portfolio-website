import { faLocationDot, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Image from "next/image";
import DynaFlexLogo from "../app/assets/DynaFlexLogo.png";

interface Props {
  compRef: (node?: Element | null) => void;
}

const ExperienceSection = ({ compRef }: Props) => {
  const [showMain, setShowMain] = useState(true);
  const [showIT, setShowIT] = useState(false);
  const [showDataEntry, setShowDataEntry] = useState(false);

  const toggleMain = () => {
    setShowMain(!showMain);
  };

  const toggleIT = () => {
    setShowIT(!showIT);
    console.log(showIT);
  };

  const toggleDataEntry = () => {
    setShowDataEntry(!showDataEntry);
  };

  return (
    <div
      ref={compRef}
      id="experience"
      className="flex flex-col items-center px-40 pt-48"
    >
      <div className="pb-16">
        <h2 className="font-black text-5xl">E X P E R I E N C E</h2>
      </div>
      <div
        className="flex justify-between border border-neutral-500 bg-blue-500 rounded-lg px-10 py-8 w-5/6"
        onClick={(): void => toggleMain()}
      >
        <div>
          <p className="font-bold text-3xl pb-1">
            IT Support, Data Entry Clerk
          </p>
          <p className="font-medium text-xl">DynaFlex Home Health Care, LLC</p>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-xl font-semibold mr-10 ">
            June 2019 - January 2024
          </p>
          <FontAwesomeIcon icon={faPlus} className="text-4xl font-thin" />
        </div>
      </div>
      {showMain && (
        <div className="flex bg-neutral-800 rounded-xl w-5/6 p-10 mt-3">
          <div className="w-3/4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLocationDot} className="text-2xl" />
              <p className="text-2xl pl-3">Sterling Heights, MI</p>
            </div>
            <p className="text-xl mt-5 font-dmcode">
              Served in multiple roles at DynaFlex Home Health Care, LLC,
              spearheading the digital transformation of the agency by leading
              the transition to multiple new technologies to streamline
              workflows, harness the power of custom automations, and improve
              communication agency-wide.
            </p>
            <div
              className="flex bg-slate-950 rounded-xl p-5 mt-5 justify-between "
              onClick={(): void => toggleIT()}
            >
              <h2 className="font-semibold text-xl">
                IT Support Accomplishments
              </h2>
              <FontAwesomeIcon icon={faPlus} className="text-xl font-thin" />
            </div>
            {showIT && (
              <div className="bg-neutral-700 rounded-xl p-5 mt-2">
                <ul className="list-disc text-lg p-5 font-dmcode">
                  <li className="pb-2">
                    Led successful transition from paper-based medical records
                    to an Electronic Medical Records (EMR) platform, resulting
                    in streamlined data management and significantly improved
                    Agency efficiency.
                  </li>
                  <li className="pb-2">
                    Researched and implemented new HIPAA-compliant
                    communications platform, improving communication efficiency,
                    leading to better patient care.
                  </li>
                  <li className="pb-2">
                    Configured new project management software with custom
                    automations to manage workflows per feedback from agency
                    departments, eliminating workflow gaps and improving team
                    collaboration.
                  </li>
                  <li className="pb-2">
                    Conducted comprehensive training and onboarding programs for
                    60+ clinicians and administrative staff in both individual
                    and group settings, ensuring smooth technology adoption.
                  </li>
                  <li className="pb-2">
                    Provided personalized technical assistance to staff and
                    developed training materials to facilitate seamless
                    transition to new technologies.
                  </li>
                </ul>
              </div>
            )}

            <div
              className="flex bg-slate-950 rounded-xl p-5 mt-3 justify-between"
              onClick={(): void => toggleDataEntry()}
            >
              <h2 className="font-semibold text-xl">
                Data Entry Clerk Accomplishments
              </h2>
              <FontAwesomeIcon icon={faPlus} className="text-xl font-thin" />
            </div>
            {showDataEntry && (
              <div className="bg-neutral-700 rounded-xl p-5 mt-2">
                <ul className="list-disc text-lg p-5 font-dmcode">
                  <li className="pb-2">
                    Managed paper and online medical charts for 30 active
                    patients per month, ensuring 100% compliance with
                    documentation requirements and timely follow-up with
                    clinicians for discrepancies.
                  </li>
                  <li className="pb-2">
                    Streamlined access to paper documentation by accurately
                    scanning and uploading pertinent paper documents to online
                    patient charts, providing immediate access to important
                    patient data.
                  </li>
                  <li className="pb-2">
                    Ensured data integrity for 450 clinician visits per month by
                    meticulously verifying EMR appointment entries against paper
                    logs, identifying and correcting errors to maintain accurate
                    records.
                  </li>
                  <li className="pb-2">
                    Prepared Plan of Care forms for physician review by
                    accurately populating patient health data collected from
                    clinician evaluations for 30 active patients per month.
                  </li>

                  <li className="pb-2">
                    Safeguarded 7 years of patient history by organizing over
                    2,300 patient medical charts in accordance with data
                    retention and HIPAA guidelines, ensuring secure access and
                    precise filing.
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="w-1/4 flex items-center pl-7">
            <div>
              <Image
                className=" "
                src={DynaFlexLogo}
                height={528}
                width={472}
                alt="Picture of DynaFlex Logo"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;

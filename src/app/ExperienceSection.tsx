import React from "react";

interface Props {
  compRef: (node?: Element | null) => void;
}

const ExperienceSection = ({ compRef }: Props) => {
  return (
    <div
      ref={compRef}
      id="experience"
      className="flex flex-col items-center px-40 pt-48"
    >
      <div className="pb-16">
        <h2 className="font-black text-5xl">E X P E R I E N C E</h2>
      </div>
      <div className="flex flex-col border border-neutral-500 rounded-3xl p-10 w-5/6">
        <div>
          <p className="font-bold text-4xl pb-5">
            IT Support, Data Entry Clerk
          </p>
          <p className="font-semibold text-2xl">
            DynaFlex Home Health Care - Sterling Heights, MI
          </p>
          <p className="text-xl">June 2019-January 2024</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;

<ul className="list-disc text-xl p-5 font-fira">
  <li className="pb-2">
    Led successful transition from paper-based medical records to an Electronic
    Medical Records (EMR) platform, resulting in streamlined data management and
    significantly improved Agency efficiency.{" "}
  </li>
  <li className="pb-2">
    Researched and implemented new HIPAA-compliant communications platform,
    improving communication efficiency, leading to better patient care.
  </li>
  <li className="pb-2">
    Configured new project management software with custom automations to manage
    workflows per feedback from agency departments, eliminating workflow gaps
    and improving team collaboration.
  </li>
  <li className="pb-2">
    Conducted comprehensive training and onboarding programs for 60+ clinicians
    and administrative staff in both individual and group settings, ensuring
    smooth technology adoption.
  </li>
  <li className="pb-2">
    Provided personalized technical assistance to staff and developed training
    materials to facilitate seamless transition to new technologies.
  </li>
  <li className="pb-2">
    Managed paper and online medical charts for 30 active patients per month,
    ensuring 100% compliance with documentation requirements and timely
    follow-up with clinicians for discrepancies.
  </li>
  <li className="pb-2">
    Streamlined access to paper documentation by accurately scanning and
    uploading pertinent paper documents to online patient charts, providing
    immediate access to important patient data.
  </li>
  <li className="pb-2">
    Ensured data integrity for 450 clinician visits per month by meticulously
    verifying EMR appointment entries against paper logs, identifying and
    correcting errors to maintain accurate records.
  </li>
  <li className="pb-2">
    Prepared Plan of Care forms for physician review by accurately populating
    patient health data collected from clinician evaluations for 30 active
    patients per month.
  </li>

  <li className="pb-2">
    Safeguarded 7 years of patient history by organizing over 2,300 patient
    medical charts in accordance with data retention and HIPAA guidelines,
    ensuring secure access and precise filing.
  </li>
</ul>;

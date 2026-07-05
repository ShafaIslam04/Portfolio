import { motion } from "framer-motion";
import { FaUniversity, FaSchool } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-950 py-32 grid-bg"
    >
      {/* Background */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <span className="uppercase tracking-[5px] text-cyan-400">
            Education
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Academic Journey
          </h2>

          <div className="w-28 h-1 bg-cyan-400 rounded-full mx-auto mt-5"></div>

          <p className="max-w-3xl mx-auto mt-6 text-slate-400">
            My academic journey has built a strong foundation in
            programming, software engineering and problem solving.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 rounded-full"></div>

          <EducationCard
            side="left"
            icon={<FaUniversity />}
            degree="Bachelor of Science (B.Sc.) in Computer Science & Engineering"
            institute="Daffodil International University"
            duration="2019 - 2024"
            result="CGPA: 3.64 / 4.00"
            description="Graduated with a Bachelor's degree in Computer Science & Engineering, building a strong foundation in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Web Technologies, Artificial Intelligence, Machine Learning, and Computer Architecture. The program inspired me to pursue a career in the software industry by strengthening my passion for programming and providing practical experience through real-world projects and coursework."
          />

          <EducationCard
            side="right"
            icon={<MdSchool />}
            degree="Higher Secondary Certificate (HSC)"
            institute="New Govt. Degree College, Rajshahi"
            duration="2016 - 2018"
            result="GPA: 5.00 / 5.00"
            description="Completed Higher Secondary education in the Science group."
          />

          <EducationCard
            side="left"
            icon={<FaSchool />}
            degree="Secondary School Certificate (SSC)"
            institute="Govt. P.N Girl's High School"
            duration="2006 - 2016"
            result="GPA: 5.00 / 5.00"
            description="Completed Secondary School education in the Science group."
          />

        </div>

        {/* Quote */}

        {/* <div className="mt-24 bg-slate-900/60 border border-slate-700 rounded-3xl p-10 text-center backdrop-blur-lg">
          <h3 className="text-2xl font-bold">
            🚀 Learning Never Stops
          </h3>

         
        </div> */}

      </div>
    </section>
  );
};

export default Education;
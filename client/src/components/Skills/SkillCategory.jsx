import SkillCard from "./SkillCard";

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-cyan-400 mb-8">
        {title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;
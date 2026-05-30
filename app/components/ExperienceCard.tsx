import type { Experience } from "../data";

export default function ExperienceCard({ org, period, role, desc }: Experience) {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <h4>{org}</h4>
        <span className="experience-period">{period}</span>
      </div>
      <p className="experience-role">{role}</p>
      <p className="experience-desc">{desc}</p>
    </div>
  );
}

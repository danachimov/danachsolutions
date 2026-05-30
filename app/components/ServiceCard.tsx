type ServiceCardProps = {
  d: string;
  title: string;
  desc: string;
};

export default function ServiceCard({ d, title, desc }: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="service-icon">
        <svg
          width="32"
          height="32"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d={d}
          />
        </svg>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

import type { ServiceDetailItem } from "../data";

export default function ServiceDetail({ num, title, desc, bullets }: ServiceDetailItem) {
  return (
    <div className="service-detail">
      <div className="service-detail-inner">
        <div className="service-num">{num}</div>
        <div className="service-detail-content">
          <h2>{title}</h2>
          <p>{desc}</p>
          <div className="bullet-row">
            {bullets.map((b) => (
              <span key={b} className="bullet-pill">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

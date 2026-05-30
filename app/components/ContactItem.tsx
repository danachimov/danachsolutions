import type { ReactNode } from "react";

type ContactItemProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

export default function ContactItem({ icon, title, children }: ContactItemProps) {
  return (
    <div className="contact-item">
      <div className="contact-icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        {children}
      </div>
    </div>
  );
}

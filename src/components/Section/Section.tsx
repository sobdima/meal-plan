import type { ReactNode } from 'react';

interface SectionProps {
  sectionType: string;
  title: string;
  indicatorColor: 'green' | 'yellow';
  rightElement?: ReactNode;
  children: ReactNode;
}

export function Section({
  sectionType,
  title,
  indicatorColor,
  rightElement,
  children,
}: SectionProps) {
  return (
    <section className={`section-container ${sectionType}`}>
      <div className="section-header">
        <div className="title-group">
          <span className={`status-bar ${indicatorColor}`}></span>
          <h2 className="section-title">{title}</h2>
        </div>
        {rightElement && <div className="section-right">{rightElement}</div>}
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}

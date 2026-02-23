import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  indicatorColor: 'green' | 'yellow';
  rightElement?: ReactNode;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({
  title,
  indicatorColor,
  rightElement,
  children,
}) => (
  <section className="section-container">
    <div className="section-header">
      <div className="title-group">
        <span className={`status-bar ${indicatorColor}`}></span>
        <h2 className="section-title">{title}</h2>
      </div>
      {rightElement && <div className="section-right">{rightElement}</div>}
    </div>
    {children}
  </section>
);

export default Section;

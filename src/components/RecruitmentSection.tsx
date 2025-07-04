
import React from 'react';
import RecruitmentTable from './RecruitmentTable';

interface RecruitmentSectionProps {
  sectionNumber: string;
  title: string;
  referenceNumber: string;
  date: string;
}

const RecruitmentSection: React.FC<RecruitmentSectionProps> = ({
  sectionNumber,
  title,
  referenceNumber,
  date
}) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
          {sectionNumber} {title}
        </h3>
        <div className="bg-muted/50 rounded-lg px-4 py-2 inline-block">
          <p className="text-muted-foreground text-sm font-medium">
            {referenceNumber} | Dt: {date}
          </p>
        </div>
      </div>
      <RecruitmentTable />
    </div>
  );
};

export default RecruitmentSection;

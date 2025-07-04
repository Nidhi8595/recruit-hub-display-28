
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, Newspaper, Calendar, File } from 'lucide-react';

interface TableRow {
  description: string;
  icon: React.ReactNode;
}

interface RecruitmentTableProps {
  rows?: TableRow[];
}

const RecruitmentTable: React.FC<RecruitmentTableProps> = ({ rows }) => {
  const defaultRows: TableRow[] = [
    { description: "Extension Notice", icon: <Calendar className="w-4 h-4" /> },
    { description: "Detailed Advertisement", icon: <FileText className="w-4 h-4" /> },
    { description: "News Paper Publication", icon: <Newspaper className="w-4 h-4" /> },
    { description: "Application Form (PDF)", icon: <File className="w-4 h-4" /> },
    { description: "Application Form (Word)", icon: <Download className="w-4 h-4" /> }
  ];

  const tableRows = rows || defaultRows;

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="bg-gradient-to-r from-muted/80 to-muted/60 border-b border-border">
            <th className="px-4 md:px-6 py-4 text-left font-semibold text-foreground text-sm md:text-base">
              Description
            </th>
            <th className="px-4 md:px-6 py-4 text-center font-semibold text-foreground text-sm md:text-base w-32 md:w-40">
              Download Link
            </th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => (
            <tr 
              key={index} 
              className={`border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors duration-200 ${
                index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
              }`}
            >
              <td className="px-4 md:px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="text-primary">{row.icon}</span>
                  <span className="text-foreground text-sm md:text-base font-medium">
                    {row.description}
                  </span>
                </div>
              </td>
              <td className="px-4 md:px-6 py-4 text-center">
                <Button 
                  className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-4 md:px-6 py-2 transition-all duration-200 hover:shadow-lg hover:scale-105 text-xs md:text-sm font-medium"
                  size="sm"
                >
                  View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecruitmentTable;


import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, Newspaper, File, Download } from 'lucide-react';

interface RecruitmentContentProps {
  tabId: string;
  blockType: 'teaching' | 'non-teaching' | 'project-research' | 'others';
}

const RecruitmentContent: React.FC<RecruitmentContentProps> = ({ tabId, blockType }) => {
  const getTabData = () => {
    const baseData = {
      professors: { 
        ref: 'GBU/Admn/2025/01', 
        date: '15 May 2025',
        title: "Advertisement of Professor's"
      },
      retired: { 
        ref: 'GBU/Admn/2025/02', 
        date: '15 May 2025',
        title: "Advertisement of Professor's (Retired)"
      },
      associate: { 
        ref: 'GBU/Admn/2025/03', 
        date: '20 May 2025',
        title: "Advertisement of Associate Professor's"
      },
      assistant: { 
        ref: 'GBU/Admn/2025/04', 
        date: '22 May 2025',
        title: "Advertisement of Assistant Professor's"
      },
      assistants: {
        ref: 'GBU/Admn/2025/05',
        date: '15 May 2025',
        title: "Advertisement for assistants"
      },
      interns: {
        ref: 'GBU/Admn/2025/06',
        date: '15 May 2025',
        title: "Advertisement for interns"
      },
      workers: {
        ref: 'GBU/Admn/2025/01',
        date: '15 May 2025',
        title: "Advertisement of Worker's"
      }
    };
    
    return baseData[tabId as keyof typeof baseData] || baseData.professors;
  };

  const tabData = getTabData();

  const documents = [
    { name: "Extension Notice", icon: <Calendar className="w-4 h-4" /> },
    { name: "Detailed Advertisement", icon: <FileText className="w-4 h-4" /> },
    { name: "News Paper Publication", icon: <Newspaper className="w-4 h-4" /> },
    { name: "Application Form (PDF)", icon: <File className="w-4 h-4" /> },
    { name: "Application Form (Word)", icon: <Download className="w-4 h-4" /> }
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-muted/30 rounded-lg px-4 py-3">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {tabData.title}
        </h3>
        <p className="text-sm text-muted-foreground font-medium">
          {tabData.ref} | Dt: {tabData.date}
        </p>
      </div>

      {/* Documents Table */}
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="bg-gradient-to-r from-muted/60 to-muted/40 px-4 py-3 border-b border-border">
          <div className="grid grid-cols-2 gap-4">
            <h4 className="font-semibold text-foreground text-sm">Description</h4>
            <h4 className="font-semibold text-foreground text-sm text-center">Download Link</h4>
          </div>
        </div>
        
        <div className="divide-y divide-border">
          {documents.map((doc, index) => (
            <div 
              key={index}
              className={`grid grid-cols-2 gap-4 px-4 py-3 hover:bg-muted/20 transition-colors duration-200 ${
                index % 2 === 0 ? 'bg-background' : 'bg-muted/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-primary">{doc.icon}</span>
                <span className="text-foreground text-sm font-medium">{doc.name}</span>
              </div>
              <div className="flex justify-center">
                <Button 
                  size="sm"
                  className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-4 py-1 text-xs font-medium transition-all duration-200 hover:shadow-md hover:scale-105"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentContent;

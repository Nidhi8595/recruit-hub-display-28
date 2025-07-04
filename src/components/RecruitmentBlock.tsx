
import React, { useState } from 'react';
import RecruitmentContent from './RecruitmentContent';

interface RecruitmentBlockProps {
  title: string;
  type: 'teaching' | 'non-teaching' | 'project-research' | 'others';
  icon: string;
}

const RecruitmentBlock: React.FC<RecruitmentBlockProps> = ({ title, type, icon }) => {
  const [activeTab, setActiveTab] = useState('professors');

  const getTabsForType = () => {
    switch (type) {
      case 'teaching':
        return [
          { id: 'professors', label: "Professor's" },
          { id: 'retired', label: "Professor's (Retired)" },
          { id: 'associate', label: "Associate Professor's" },
          { id: 'assistant', label: "Assistant Professor's" }
        ];
      case 'non-teaching':
        return [
          { id: 'assistants', label: "assistants" }
        ];
      case 'project-research':
        return [
          { id: 'interns', label: "interns" }
        ];
      case 'others':
        return [
          { id: 'workers', label: "Worker's" }
        ];
      default:
        return [{ id: 'professors', label: "Professor's" }];
    }
  };

  const tabs = getTabsForType();

  // Set the default active tab based on the type
  React.useEffect(() => {
    if (type === 'non-teaching') {
      setActiveTab('assistants');
    } else if (type === 'project-research') {
      setActiveTab('interns');
    } else if (type === 'others') {
      setActiveTab('workers');
    } else {
      setActiveTab('professors');
    }
  }, [type]);

  return (
    <div className="bg-card rounded-2xl border border-border shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Block Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-4 border-b border-border">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h2 className="text-xl font-bold text-foreground tracking-wide">
            {title}
          </h2>
        </div>
      </div>

      {/* Inner Tabs */}
      <div className="p-6">
        {tabs.length > 1 ? (
          <div className="flex flex-wrap gap-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                Advertisement of {tab.label}
              </button>
            ))}
          </div>
        ) : (
          <div className="mb-6">
            <div className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-primary-foreground shadow-md inline-block">
              Advertisement for {tabs[0].label}
            </div>
          </div>
        )}

        {/* Tab Content */}
        <RecruitmentContent tabId={activeTab} blockType={type} />
      </div>
    </div>
  );
};

export default RecruitmentBlock;

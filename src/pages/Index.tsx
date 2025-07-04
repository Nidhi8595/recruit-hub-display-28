
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import RecruitmentBlock from '@/components/RecruitmentBlock';

const Index = () => {
  const [activeMainTab, setActiveMainTab] = useState('current');

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background Watermark */}
      <div 
        className="fixed inset-0 bg-center bg-no-repeat bg-contain opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'url(/lovable-uploads/daa78cec-0a01-4f5d-81db-e6a642e952e3.png)',
          backgroundSize: 'contain',
          backgroundPosition: 'center center'
        }}
      />
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary/5 to-primary/10 py-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-4 tracking-tight">
            RECRUITMENTS
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            Faculty/Staff Recruitment
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-muted rounded-full p-1 shadow-lg">
              <button
                onClick={() => setActiveMainTab('current')}
                className={`px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeMainTab === 'current'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Current Opportunities
              </button>
              <button
                onClick={() => setActiveMainTab('archived')}
                className={`px-8 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeMainTab === 'archived'
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Archived Opportunities
              </button>
            </div>
          </div>

          {/* Recruitment Blocks Grid - 2x2 Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Top Row */}
            <RecruitmentBlock
              title="TEACHING"
              type="teaching"
              icon="👨‍🏫"
            />
            <RecruitmentBlock
              title="NON-TEACHING"
              type="non-teaching"
              icon="👥"
            />
            
            {/* Bottom Row */}
            <RecruitmentBlock
              title="PROJECT / RESEARCH"
              type="project-research"
              icon="🔬"
            />
            <RecruitmentBlock
              title="OTHERS"
              type="others"
              icon="⚙️"
            />
          </div>

        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-muted/30 py-8 mt-16 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            For any queries regarding recruitment, please contact the Administration Office
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

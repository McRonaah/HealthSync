
import React from 'react';
import StatCard from '../../components/dashboard/StatCard';
import ChartContainer from '../../components/dashboard/ChartContainer';
import RecentActivity from '../../components/dashboard/RecentActivity';
import { Users, Calendar, FileText, Activity } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data for charts
  const clientsByProgram = [
    { name: 'Diabetes', value: 845 },
    { name: 'Hypertension', value: 756 },
    { name: 'Maternal', value: 428 },
    { name: 'Nutrition', value: 624 },
    { name: 'Mental Health', value: 325 }
  ];
  
  const monthlyRegistrations = [
    { name: 'Jan', value: 65 },
    { name: 'Feb', value: 78 },
    { name: 'Mar', value: 92 },
    { name: 'Apr', value: 105 },
    { name: 'May', value: 120 },
    { name: 'Jun', value: 132 }
  ];
  
  const programDistribution = [
    { name: 'Diabetes', value: 35 },
    { name: 'Hypertension', value: 25 },
    { name: 'Maternal', value: 15 },
    { name: 'Nutrition', value: 15 },
    { name: 'Mental Health', value: 10 }
  ];
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your health system data</p>
      </div>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Clients" 
          value="851" 
          icon={<Users size={24} className="text-primary" />}
          trend={{ value: 12, isPositive: true }}
        />
        
        <StatCard 
          title="Active Programs" 
          value="9" 
          icon={<Calendar size={24} className="text-primary" />}
          trend={{ value: 5, isPositive: true }}
        />
        
        <StatCard 
          title="Health Records" 
          value="9,432" 
          icon={<FileText size={24} className="text-primary" />}
          trend={{ value: 8, isPositive: true }}
        />
        
        <StatCard 
          title="Program Completion" 
          value="86%" 
          icon={<Activity size={24} className="text-primary" />}
          trend={{ value: 3, isPositive: true }}
        />
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer 
          title="Client Registrations" 
          description="New client registrations for the past 6 months"
          type="bar"
          data={monthlyRegistrations}
        />
        
        <ChartContainer 
          title="Program Distribution" 
          description="Clients distribution across programs"
          type="pie"
          data={programDistribution}
        />
      </div>
      
      {/* Additional Stats & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ChartContainer 
            title="Clients by Program" 
            description="Number of clients enrolled in each program"
            type="bar"
            data={clientsByProgram}
          />
        </div>
        
        <RecentActivity />
      </div>
    </div>
  );
};

export default Dashboard;

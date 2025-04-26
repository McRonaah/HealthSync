
import React from 'react';

interface ActivityItem {
  id: string;
  description: string;
  time: string;
  type: 'client' | 'program' | 'system';
}

const mockActivities: ActivityItem[] = [
  { 
    id: '1',
    description: 'Sarah Martinez was registered as a new client',
    time: '10 minutes ago',
    type: 'client'
  },
  { 
    id: '2',
    description: 'Diabetes Prevention Program was created',
    time: '1 hour ago',
    type: 'program'
  },
  { 
    id: '3',
    description: 'System backup completed successfully',
    time: '3 hours ago',
    type: 'system'
  },
  { 
    id: '4',
    description: 'James Wilson was enrolled in Hypertension Control Program',
    time: '5 hours ago',
    type: 'client'
  },
  { 
    id: '5',
    description: 'Maternal Health Program was updated',
    time: 'Yesterday',
    type: 'program'
  },
];

const RecentActivity: React.FC = () => {
  return (
    <div className="bg-card p-6 rounded-xl shadow-sm dashboard-card">
      <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
      
      <div className="space-y-4">
        {mockActivities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className={`w-2 h-2 rounded-full mt-2 ${
              activity.type === 'client' ? 'bg-primary' : 
              activity.type === 'program' ? 'bg-success' : 'bg-warning'
            }`} />
            
            <div className="flex-1">
              <p className="text-sm">{activity.description}</p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="text-sm text-primary hover:underline mt-4 w-full text-center">
        View All Activity
      </button>
    </div>
  );
};

export default RecentActivity;

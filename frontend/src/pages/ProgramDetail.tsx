import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Same mock data as in the listing page
const mockPrograms = [
  {
    id: '1',
    name: 'Maternal Health Program',
    description: 'Support for expectant mothers and newborns',
    status: 'active',
    created_at: '2023-07-15T12:00:00Z',
    profiles: {
      first_name: 'Jane',
      last_name: 'Doe',
    },
    _count: {
      enrollments: 120,
    },
  },
  {
    id: '2',
    name: 'Malaria Prevention Campaign',
    description: null,
    status: 'inactive',
    created_at: '2023-05-10T08:00:00Z',
    profiles: {
      first_name: 'John',
      last_name: 'Smith',
    },
    _count: {
      enrollments: 85,
    },
  },
  {
    id: '3',
    name: 'Nutrition Outreach Program',
    description: 'Community-based nutrition education and food distribution',
    status: 'active',
    created_at: '2024-01-22T09:30:00Z',
    profiles: {
      first_name: 'Alice',
      last_name: 'Johnson',
    },
    _count: {
      enrollments: 200,
    },
  },
];

const ProgramDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const program = mockPrograms.find((p) => p.id === id);

  if (!program) {
    return (
      <div className="text-center py-12">
        <p className="text-lg">Program not found.</p>
        <Button className="mt-4" onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{program.name}</h1>
          <p className="text-muted-foreground">Detailed information about this health program</p>
        </div>
        <Button onClick={() => navigate('/programs')}>Back to Programs</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Program Details</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Program Name</p>
              <p className="font-medium">{program.name}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Description</p>
              <p>{program.description || 'N/A'}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <Badge variant={program.status === 'active' ? 'default' : 'secondary'}>
                {program.status === 'active' ? 'Active' : 'Inactive'}
              </Badge>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Enrollment Stats</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Clients Enrolled</p>
              <p className="font-medium">{program._count.enrollments}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Created On</p>
              <p>{new Date(program.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Created By</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p className="font-medium">
                {program.profiles.first_name} {program.profiles.last_name}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProgramDetail;

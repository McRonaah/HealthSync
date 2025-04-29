import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Same mock data as in the listing page
const mockPrograms = [
    {
        id: '1',
        name: 'Maternal Health Initiative',
        description: 'Promoting safe childbirth and prenatal care in rural Kisii.',
        status: 'active',
        created_at: '2024-03-01T10:15:00Z',
        profiles: {
          first_name: 'Nyaboke',
          last_name: 'Mokaya',
        },
        _count: {
          enrollments: 145,
        },
      },
      {
        id: '2',
        name: 'Malaria Eradication Campaign',
        description: 'Mosquito net distribution and malaria education in Bungoma.',
        status: 'active',
        created_at: '2023-11-20T08:45:00Z',
        profiles: {
          first_name: 'Wanyonyi',
          last_name: 'Masinde', 
        },
        _count: {
          enrollments: 210,
        },
      },
      {
        id: '3',
        name: 'Nutrition and Child Health Program',
        description: 'Improving child nutrition in Nyandarua County.',
        status: 'inactive',
        created_at: '2023-08-12T14:00:00Z',
        profiles: {
          first_name: 'Wanjiru',
          last_name: 'Mwangi', 
        },
        _count: {
          enrollments: 85,
        },
      },
      {
        id: '4',
        name: 'HIV/AIDS Awareness and Testing Drive',
        description: 'Community outreach and free HIV testing in Kericho.',
        status: 'active',
        created_at: '2023-09-01T09:00:00Z',
        profiles: {
          first_name: 'Kiplangat',
          last_name: 'Yegon', 
        },
        _count: {
          enrollments: 312,
        },
      },
      {
        id: '5',
        name: 'Water Sanitation Program',
        description: 'Providing clean water and sanitation in Kakamega.',
        status: 'active',
        created_at: '2024-01-15T12:30:00Z',
        profiles: {
          first_name: 'Shikuku',
          last_name: 'Naliaka', 
        },
        _count: {
          enrollments: 180,
        },
      },
      {
        id: '6',
        name: 'School Health Outreach',
        description: 'Health checkups and deworming for students in Embu.',
        status: 'inactive',
        created_at: '2023-10-05T11:00:00Z',
        profiles: {
          first_name: 'Wambui',
          last_name: 'Gachanja', 
        },
        _count: {
          enrollments: 97,
        },
      },
      {
        id: '7',
        name: 'Mental Health and Counseling Program',
        description: 'Community support and mental health counseling in Eldoret.',
        status: 'active',
        created_at: '2024-02-10T08:00:00Z',
        profiles: {
          first_name: 'Dominic',
          last_name: 'Koech', 
        },
        _count: {
          enrollments: 75,
        },
      },
      {
        id: '8',
        name: 'Immunization Outreach Program',
        description: 'Door-to-door child immunization in Kisumu.',
        status: 'active',
        created_at: '2024-04-02T15:30:00Z',
        profiles: {
          first_name: 'Achieng',
          last_name: 'Odhiambo', 
        },
        _count: {
          enrollments: 230,
        },
      },
      {
        id: '9',
        name: 'Tuberculosis Screening Project',
        description: 'Early TB detection campaign in Kisii town.',
        status: 'inactive',
        created_at: '2023-06-18T13:00:00Z',
        profiles: {
          first_name: 'Bosibori',
          last_name: 'Nyamweya', 
        },
        _count: {
          enrollments: 52,
        },
      },
      {
        id: '10',
        name: 'Community Eye Care Program',
        description: 'Free eye checkups and cataract surgeries in Murang’a.',
        status: 'active',
        created_at: '2024-03-20T09:00:00Z',
        profiles: {
          first_name: 'Kuria',
          last_name: 'Wangui', 
        },
        _count: {
          enrollments: 128,
        },
      },
      {
        id: '11',
        name: 'Family Planning Education Drive',
        description: 'Providing access to reproductive health in Busia.',
        status: 'active',
        created_at: '2023-12-12T16:45:00Z',
        profiles: {
          first_name: 'Nafula',
          last_name: 'Wasike', 
        },
        _count: {
          enrollments: 198,
        },
      },
      {
        id: '12',
        name: 'Urban Clean-Up and Health Day',
        description: 'Promoting hygiene and hosting clinics in Nairobi slums.',
        status: 'inactive',
        created_at: '2023-07-29T07:30:00Z',
        profiles: {
          first_name: 'Mutua',
          last_name: 'Mumbua', 
        },
        _count: {
          enrollments: 64,
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

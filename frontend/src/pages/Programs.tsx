import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Plus, Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Program {
  id: string;
  name: string;
  description: string | null;
  status: string;
  created_at: string;
  profiles: {
    first_name: string;
    last_name: string;
  };
  _count: {
    enrollments: number;
  };
}

// Mock data
const mockPrograms: Program[] = [
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

const Programs: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredPrograms = mockPrograms.filter((program) =>
    program.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Health Programs</h1>
        <p className="text-muted-foreground">Manage healthcare programs and interventions</p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="relative max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search programs..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Button onClick={() => navigate('/programs/create')}>
          <Plus className="mr-2 h-4 w-4" />
          Add Program
        </Button>
      </div>

      <div className="bg-card rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Program Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Clients Enrolled</TableHead>
                <TableHead>Created By</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPrograms.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center">
                    No programs found
                  </TableCell>
                </TableRow>
              ) : (
                filteredPrograms.map((program) => (
                  <TableRow key={program.id}>
                    <TableCell className="font-medium">
                      <div>
                        <div>{program.name}</div>
                        {program.description && (
                          <div className="text-sm text-muted-foreground truncate max-w-[300px]">
                            {program.description}
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={program.status === 'active' ? 'default' : 'secondary'}>
                        {program.status === 'active' ? 'Active' : 'Inactive'}
                      </Badge>
                    </TableCell>
                    <TableCell>{program._count.enrollments}</TableCell>
                    <TableCell>
                      {program.profiles.first_name} {program.profiles.last_name}
                    </TableCell>
                    <TableCell>
                      {new Date(program.created_at).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => navigate(`/programs/${program.id}`)}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Programs;

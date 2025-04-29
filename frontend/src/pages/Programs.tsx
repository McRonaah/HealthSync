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

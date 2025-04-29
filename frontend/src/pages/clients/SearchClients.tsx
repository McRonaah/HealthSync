
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search } from 'lucide-react';

// Mock client data
const mockClients = [
  {
    id: '1',
    firstName: 'Dennis',
    lastName: 'Martinez',
    gender: 'Female',
    dateOfBirth: '1985-05-15',
    phoneNumber: '(555) 123-4567',
    email: 'dennismartinez@gmail.com',
    programs: ['Diabetes Prevention', 'Nutrition & Wellness'],
    enrollmentDate: '2023-01-15',
  },
  {
    id: '2',
    firstName: 'James',
    lastName: 'Waweru',
    gender: 'Male',
    dateOfBirth: '1972-08-22',
    phoneNumber: '(555) 234-5678',
    email: 'wawerujames.@gmail.com',
    programs: ['Hypertension Control'],
    enrollmentDate: '2023-02-03',
  },
  {
    id: '3',
    firstName: 'Maria',
    lastName: 'Garcia',
    gender: 'Female',
    dateOfBirth: '1990-11-10',
    phoneNumber: '(555) 345-6789',
    email: 'maria.g@example.com',
    programs: ['Maternal Health'],
    enrollmentDate: '2023-03-18',
  },
  {
    id: '4',
    firstName: 'Robert',
    lastName: 'Johnson',
    gender: 'Male',
    dateOfBirth: '1965-04-30',
    phoneNumber: '(555) 456-7890',
    email: 'robert.j@example.com',
    programs: ['Hypertension Control', 'Nutrition & Wellness'],
    enrollmentDate: '2023-01-22',
  },
  {
    id: '5',
    firstName: 'Emily',
    lastName: 'Davis',
    gender: 'Female',
    dateOfBirth: '1988-07-12',
    phoneNumber: '(555) 567-8901',
    email: 'emily.d@example.com',
    programs: ['Mental Health Support'],
    enrollmentDate: '2023-04-05',
  },
];

const SearchClients: React.FC = () => {
  const [searchResults, setSearchResults] = useState(mockClients);
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter based on form values
    setSearchResults([...mockClients]);
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Clients</h1>
        <p className="text-muted-foreground">Search and manage client records</p>
      </div>
      
      <div className="space-y-6">
        {/* Search Form */}
        <div className="bg-card rounded-xl shadow-sm p-6">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nameSearch">Client Name</Label>
                <Input id="nameSearch" placeholder="First or last name" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="programFilter">Program</Label>
                <Select>
                  <SelectTrigger id="programFilter">
                    <SelectValue placeholder="All Programs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Programs</SelectItem>
                    <SelectItem value="diabetes">Diabetes Prevention</SelectItem>
                    <SelectItem value="hypertension">Hypertension Control</SelectItem>
                    <SelectItem value="maternal">Maternal Health</SelectItem>
                    <SelectItem value="mental">Mental Health Support</SelectItem>
                    <SelectItem value="nutrition">Nutrition & Wellness</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end gap-2">
                <Button type="submit" className="gap-2">
                  <Search size={16} />
                  Search
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate('/clients/register')}
                >
                  Register New Client
                </Button>
              </div>
            </div>
          </form>
        </div>
        
        {/* Results Table */}
        <div className="bg-card rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-lg font-medium">Search Results</h2>
            <p className="text-sm text-muted-foreground">Showing {searchResults.length} clients</p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Gender</TableHead>
                  <TableHead>Date of Birth</TableHead>
                  <TableHead>Programs</TableHead>
                  <TableHead>Enrollment Date</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {searchResults.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell className="font-medium">
                      {client.firstName} {client.lastName}
                    </TableCell>
                    <TableCell>{client.gender}</TableCell>
                    <TableCell>{new Date(client.dateOfBirth).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {client.programs.map((program, index) => (
                          <span key={index} className="inline-flex items-center rounded-full bg-primary-50 px-2 py-1 text-xs font-medium text-primary-700">
                            {program}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>{new Date(client.enrollmentDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="text-sm">
                        <div>{client.phoneNumber}</div>
                        <div className="text-muted-foreground">{client.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => navigate(`/clients/view/${client.id}`)}
                      >
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          {searchResults.length === 0 && (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">No clients found matching your search criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchClients;


import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, Calendar, Edit, UserPlus } from 'lucide-react';

// Mock client data
const client = {
  id: '1',
  firstName: 'Sarah',
  lastName: 'Martinez',
  gender: 'Female',
  dateOfBirth: '1985-05-15',
  phoneNumber: '(555) 123-4567',
  email: 'sarah.m@example.com',
  address: '1234 Main St, Apt 5B, Cityville, ST 12345',
  enrollmentDate: '2023-01-15',
  programs: [
    {
      id: '1',
      name: 'Diabetes Prevention Program',
      startDate: '2023-01-20',
      status: 'active'
    },
    {
      id: '2',
      name: 'Nutrition & Wellness',
      startDate: '2023-02-15',
      status: 'active'
    }
  ],
  medicalHistory: [
    {
      id: '1',
      date: '2023-02-10',
      type: 'Initial Assessment',
      notes: 'Initial screening shows risk factors for type 2 diabetes. Recommended for prevention program.',
      provider: 'Dr. James Wilson'
    },
    {
      id: '2',
      date: '2023-03-15',
      type: 'Follow-up',
      notes: 'Client has been following nutrition plan well. Blood glucose levels have improved slightly.',
      provider: 'Dr. Emily Chen'
    },
    {
      id: '3',
      date: '2023-04-20',
      type: 'Nutrition Consultation',
      notes: 'Reviewed meal planning strategies. Client is making good progress with dietary changes.',
      provider: 'Maria Lopez, RD'
    }
  ]
};

const ViewClient: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div>
      <div className="mb-6">
        <Link to="/clients/search" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
          <ArrowLeft size={16} className="mr-1" /> Back to Clients
        </Link>
        
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold">{client.firstName} {client.lastName}</h1>
            <p className="text-muted-foreground">Client ID: {client.id}</p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" className="gap-1" onClick={() => {}}>
              <Edit size={16} />
              Edit
            </Button>
            <Button className="gap-1" onClick={() => {}}>
              <UserPlus size={16} />
              Enroll in Program
            </Button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Personal Information</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p className="font-medium">{client.firstName} {client.lastName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Gender</p>
              <p>{client.gender}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Date of Birth</p>
              <p>{new Date(client.dateOfBirth).toLocaleDateString()}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Contact Information</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Phone Number</p>
              <p className="font-medium">{client.phoneNumber}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p>{client.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Address</p>
              <p>{client.address}</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Enrollment</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground">Enrollment Date</p>
              <p className="font-medium">{new Date(client.enrollmentDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Programs Enrolled</p>
              <div className="flex flex-wrap gap-1 mt-1">
                {client.programs.map((program) => (
                  <div key={program.id} className="flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
                    <Calendar size={12} />
                    {program.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <Tabs defaultValue="programs" className="mb-6">
        <TabsList>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="medical-history">Medical History</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>
        
        <TabsContent value="programs" className="mt-4">
          <Card>
            <div className="p-6 border-b">
              <h3 className="text-lg font-medium">Enrolled Programs</h3>
              <p className="text-muted-foreground">Programs the client is currently enrolled in</p>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Program Name</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {client.programs.map((program) => (
                  <TableRow key={program.id}>
                    <TableCell className="font-medium">{program.name}</TableCell>
                    <TableCell>{new Date(program.startDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center rounded-full bg-success-50 px-2 py-1 text-xs font-medium text-success-700 capitalize">
                        {program.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '70%' }}></div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
        
        <TabsContent value="medical-history" className="mt-4">
          <Card>
            <div className="p-6 border-b">
              <h3 className="text-lg font-medium">Medical History</h3>
              <p className="text-muted-foreground">Records of past medical encounters</p>
            </div>
            
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {client.medicalHistory.map((record) => (
                  <TableRow key={record.id}>
                    <TableCell>{new Date(record.date).toLocaleDateString()}</TableCell>
                    <TableCell>{record.type}</TableCell>
                    <TableCell>{record.provider}</TableCell>
                    <TableCell className="max-w-sm truncate">{record.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>
        
        <TabsContent value="appointments" className="mt-4">
          <Card className="p-6 flex items-center justify-center min-h-[200px]">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">No appointment records found</p>
              <Button variant="outline">Schedule Appointment</Button>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="documents" className="mt-4">
          <Card className="p-6 flex items-center justify-center min-h-[200px]">
            <div className="text-center">
              <p className="text-muted-foreground mb-2">No documents uploaded yet</p>
              <Button variant="outline">Upload Document</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ViewClient;

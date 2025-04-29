import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const programs = [
  { id: '1', name: 'Diabetes Prevention Program' },
  { id: '2', name: 'Hypertension Control Program' },
  { id: '3', name: 'Maternal Health Program' },
  { id: '4', name: 'Mental Health Support' },
  { id: '5', name: 'Nutrition & Wellness' },
  { id: '6', name: 'Child Health Program' },
];

const EnrollClient: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [clientFound, setClientFound] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    
    // Simulate API call to search for client
    setTimeout(() => {
      setIsSearching(false);
      setClientFound(true);
    }, 1000);
  };
  
  const handleEnroll = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedProgramId) {
      toast({
        title: "Selection required",
        description: "Please select a program to enroll the client.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call to enroll client
    setTimeout(() => {
      setIsSubmitting(false);
      
      toast({
        title: "Client enrolled successfully",
        description: `The client has been enrolled in ${programs.find(p => p.id === selectedProgramId)?.name}.`,
      });
      
      navigate('/clients/search');
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Enroll Client in Program</h1>
        <p className="text-muted-foreground">Find a client and enroll them in a health program</p>
      </div>
      
      <div className="space-y-6">
        {/* Client Search Section */}
        <div className="bg-card rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-medium mb-4">Find Client</h2>
          
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="searchType">Search By</Label>
                <Select defaultValue="name">
                  <SelectTrigger id="searchType">
                    <SelectValue placeholder="Select search type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="phoneNumber">Phone Number</SelectItem>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="id">Client ID</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="searchValue">Search Value</Label>
                <div className="flex gap-2">
                  <Input 
                    id="searchValue" 
                    placeholder="Enter client name..."
                    className="flex-1"
                    required
                  />
                  <Button type="submit" disabled={isSearching}>
                    {isSearching ? 'Searching...' : 'Search'}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
        
        {/* Client Details & Enrollment (appears after search) */}
        {clientFound && (
          <div className="bg-card rounded-xl shadow-sm p-6 animate-fade-in">
            <div className="mb-6 pb-4 border-b">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-medium">Client Details</h2>
                  <p className="text-muted-foreground">Client found matching your search</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => navigate('/clients/view/1')}>
                  View Full Profile
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mt-4">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">Sarah Martinez</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Client ID</p>
                  <p className="font-medium">CL-2023-0542</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date of Birth</p>
                  <p className="font-medium">May 15, 1985</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">(555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <h2 className="text-lg font-medium mb-4">Program Enrollment</h2>
            
            <form onSubmit={handleEnroll} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="program">Select Program</Label>
                <Select onValueChange={setSelectedProgramId}>
                  <SelectTrigger id="program">
                    <SelectValue placeholder="Choose a program to enroll" />
                  </SelectTrigger>
                  <SelectContent>
                    {programs.map(program => (
                      <SelectItem key={program.id} value={program.id}>
                        {program.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="enrollmentDate">Enrollment Date</Label>
                <Input id="enrollmentDate" type="date" required defaultValue={new Date().toISOString().split('T')[0]} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="notes">Enrollment Notes</Label>
                <Textarea id="notes" placeholder="Enter any notes relevant to this enrollment..." />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox id="consent" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="consent"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Client has provided consent to enroll in this program
                  </label>
                  <p className="text-sm text-muted-foreground">
                    Confirm that the client has been informed of all program details and requirements
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button type="button" variant="outline" onClick={() => navigate('/clients/search')}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Enrolling...' : 'Enroll Client'}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnrollClient;

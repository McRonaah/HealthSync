import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const AddProgram: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Program created successfully",
        description: "The new health program has been added.",
      });
      navigate('/programs');
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Add New Program</h1>
        <p className="text-muted-foreground">Enter details for the health program</p>
      </div>

      <div className="bg-card rounded-xl shadow-sm p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Program Information Section */}
          <div>
            <h2 className="text-lg font-medium mb-4">Program Information</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="programName">Program Name</Label>
                <Input id="programName" placeholder="Nutrition Support Program" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Program Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide a brief overview of the program's goals and activities..."
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="status">Program Status</Label>
                <Select required>
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select program status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="active">Active</SelectItem>
                    <SelectItem value="inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button type="button" variant="outline" onClick={() => navigate('/programs')}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Save Program'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProgram;

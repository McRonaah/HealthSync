import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  Legend
} from 'recharts';
import { ChartPie, ChartBar, BarChartHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Sample data for program enrollment
const sampleEnrollmentData = [
  { name: 'Mental Health Screening', count: 42 },
  { name: 'Diabetes Management', count: 35 },
  { name: 'Maternal Health', count: 28 },
  { name: 'Cardiovascular Health', count: 49 },
  { name: 'Smoking Cessation', count: 23 },
  { name: 'Childhood Immunization', count: 56 },
  { name: 'Weight Management', count: 31 },
  { name: 'Substance Abuse Recovery', count: 19 },
  { name: 'Elderly Care', count: 37 },
  { name: 'Cancer Screening', count: 45 }
];

// Sample data for gender distribution
const sampleGenderData = [
  { name: 'Male', value: 120 },
  { name: 'Female', value: 150 },
  { name: 'Non-binary', value: 15 },
  { name: 'Prefer not to say', value: 8 }
];

// Sample data for age distribution
const sampleAgeData = [
  { name: '0-18', count: 45 },
  { name: '19-35', count: 85 },
  { name: '36-50', count: 73 },
  { name: '51-65', count: 57 },
  { name: '65+', count: 33 }
];

const Reports: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('enrollment');
  const [isLoading, setIsLoading] = useState(false);

  // Colors for pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  const exportReport = () => {
    // This would be implemented with actual export functionality
    alert('Export functionality is under Development');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Health System Reports</h1>
          <p className="text-muted-foreground">View system analytics and statistics</p>
        </div>
        <Button onClick={exportReport} className="flex items-center gap-2">
          <span>Export Reports</span>
        </Button>
      </div>
      
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="enrollment" className="flex items-center gap-2">
            <ChartBar className="h-4 w-4" />
            <span>Program Enrollment</span>
          </TabsTrigger>
          <TabsTrigger value="demographics" className="flex items-center gap-2">
            <ChartPie className="h-4 w-4" />
            <span>Client Demographics</span>
          </TabsTrigger>
          <TabsTrigger value="age" className="flex items-center gap-2">
            <BarChartHorizontal className="h-4 w-4" />
            <span>Age Distribution</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="enrollment">
          <Card>
            <CardHeader>
              <CardTitle>Program Enrollment Statistics</CardTitle>
              <CardDescription>Number of clients enrolled in each program</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="w-full h-64 flex items-center justify-center">
                  <p>Loading enrollment data...</p>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={sampleEnrollmentData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="name" 
                      tick={{ textAnchor: 'end', dy: 10 }}
                      height={80}
                      tickFormatter={(value) => value.length > 12 ? `${value.substring(0, 12)}...` : value}
                      angle={-45}
                    />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" name="Clients Enrolled" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="demographics">
          <Card>
            <CardHeader>
              <CardTitle>Client Demographics</CardTitle>
              <CardDescription>Distribution of clients by gender</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              {isLoading ? (
                <div className="w-full h-64 flex items-center justify-center">
                  <p>Loading demographic data...</p>
                </div>
              ) : (
                <div className="w-full flex flex-col items-center">
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <Pie
                        data={sampleGenderData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {sampleGenderData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value} clients`, 'Count']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                  
                  <div className="flex flex-wrap justify-center gap-4 mt-4">
                    {sampleGenderData.map((entry, index) => (
                      <div key={`legend-${index}`} className="flex items-center">
                        <div 
                          className="w-4 h-4 mr-2"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        ></div>
                        <span>{entry.name}: {entry.value} clients</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="age">
          <Card>
            <CardHeader>
              <CardTitle>Age Distribution</CardTitle>
              <CardDescription>Number of clients by age group</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="w-full h-64 flex items-center justify-center">
                  <p>Loading age distribution data...</p>
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={sampleAgeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" name="Number of Clients" fill="#00C49F" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
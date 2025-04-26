
import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

const Settings: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const handleSave = (message: string) => {
    toast({
      title: "Settings updated",
      description: message,
    });
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">Manage your account and application preferences</p>
      </div>
      
      <Tabs defaultValue="profile" className="mb-6">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-primary-100 flex items-center justify-center text-4xl font-medium text-primary-700 mb-4">
                    {user?.name.charAt(0)}
                  </div>
                  <Button variant="outline" size="sm">Change Photo</Button>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" defaultValue={user?.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue={user?.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input id="jobTitle" defaultValue="Health Program Manager" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Input id="department" defaultValue="Health Services" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <textarea 
                      id="bio" 
                      className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                      placeholder="Tell us a bit about yourself..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => handleSave("Profile information updated successfully")}>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="account" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Security</CardTitle>
              <CardDescription>Manage your password and security settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input id="currentPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input id="newPassword" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input id="confirmPassword" type="password" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => handleSave("Password updated successfully")}>Update Password</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Two-Factor Authentication</CardTitle>
              <CardDescription>Add an extra layer of security to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Enable Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Secure your account with 2FA</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose what updates you want to be notified about</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Email Notifications</h3>
                  <Separator className="my-4" />
                  <div className="space-y-4">
                    {[
                      { id: 'clientRegistrations', label: 'New client registrations' },
                      { id: 'programEnrollments', label: 'Program enrollments' },
                      { id: 'systemUpdates', label: 'System updates and maintenance' },
                      { id: 'securityAlerts', label: 'Security alerts' },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <Label htmlFor={item.id} className="flex-1">{item.label}</Label>
                        <Switch id={item.id} defaultChecked={true} />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">In-App Notifications</h3>
                  <Separator className="my-4" />
                  <div className="space-y-4">
                    {[
                      { id: 'inAppClientRegistrations', label: 'New client registrations' },
                      { id: 'inAppProgramEnrollments', label: 'Program enrollments' },
                      { id: 'inAppSystemUpdates', label: 'System updates and maintenance' },
                      { id: 'inAppReports', label: 'Report generation completed' },
                    ].map((item) => (
                      <div key={item.id} className="flex items-center justify-between">
                        <Label htmlFor={item.id} className="flex-1">{item.label}</Label>
                        <Switch id={item.id} defaultChecked={true} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => handleSave("Notification preferences saved")}>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="appearance" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize how the application looks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Theme</h3>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { id: 'light', name: 'Light' },
                      { id: 'dark', name: 'Dark' },
                      { id: 'system', name: 'System' },
                    ].map((theme) => (
                      <div key={theme.id} className="border rounded-md p-4 cursor-pointer hover:border-primary">
                        <div className={`h-20 rounded-md mb-2 ${
                          theme.id === 'light' ? 'bg-[#f8f9fa]' : 
                          theme.id === 'dark' ? 'bg-[#1f2937]' : 'bg-gradient-to-r from-[#f8f9fa] to-[#1f2937]'
                        }`}></div>
                        <p className="text-center font-medium">{theme.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Dashboard Layout</h3>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { id: 'compact', name: 'Compact View' },
                      { id: 'comfortable', name: 'Comfortable View' },
                    ].map((layout) => (
                      <div key={layout.id} className="border rounded-md p-4 cursor-pointer hover:border-primary">
                        <div className="h-20 rounded-md mb-2 bg-muted flex items-center justify-center">
                          <div className={`bg-card w-4/5 h-4/5 rounded-md flex flex-col ${
                            layout.id === 'compact' ? 'gap-1' : 'gap-3'
                          }`}>
                            <div className="bg-muted h-2 rounded-sm w-3/4"></div>
                            <div className="bg-muted h-2 rounded-sm"></div>
                            <div className="bg-muted h-2 rounded-sm"></div>
                          </div>
                        </div>
                        <p className="text-center font-medium">{layout.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={() => handleSave("Appearance settings saved")}>Save Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;

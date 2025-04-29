
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState } from '../types/auth';

// Mock user for demo purposes
const mockUser: User = {
  id: '1',
  name: 'Dr. Ronald Kipchirchir',
  email: 'ronald.mololu@gmail.com',
  role: 'Admin',
  avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQGbEsXhKe88iQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718922802653?e=1751500800&v=beta&t=Psxp8zkZS77MFa-mYcuIkxnPm-ot8EkS-w3UlDeQ2zw',
};

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setAuthState({
        user: JSON.parse(storedUser),
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      setAuthState(state => ({ ...state, isLoading: false }));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo, we'll accept any non-empty inputs
    if (email && password) {
      localStorage.setItem('user', JSON.stringify(mockUser));
      setAuthState({
        user: mockUser,
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes
    if (name && email && password) {
      const newUser = { ...mockUser, name, email };
      localStorage.setItem('user', JSON.stringify(newUser));
      setAuthState({
        user: newUser,
        isAuthenticated: true,
        isLoading: false,
      });
    } else {
      throw new Error('Please fill all required fields');
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  };

  return (
    <AuthContext.Provider value={{
      user: authState.user,
      isAuthenticated: authState.isAuthenticated,
      isLoading: authState.isLoading,
      login,
      signup,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

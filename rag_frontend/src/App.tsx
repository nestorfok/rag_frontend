import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthenticatedLayout } from './components/AuthenticatedLayout';
import { LandingPage } from './pages/landingPage';
import { Dashboard } from './pages/dashboardPage';
import './App.css';
import type { FC } from 'react';
import { Settings } from './pages/Setting';
import { ChatPage } from './pages/chatPage';

// Ant Design theme configuration
const theme = {
  token: {
    colorPrimary: '#7c3aed', // Purple primary color to match your design
    borderRadius: 8,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
};

const App: FC = () => {
  return (
    <ConfigProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public route - Landing page */}
            <Route path="/" element={<LandingPage />} />
            
            {/* Protected routes - All authenticated pages */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <AuthenticatedLayout>
                    <Dashboard />
                  </AuthenticatedLayout>
                </ProtectedRoute>
              }
            />
            
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <AuthenticatedLayout>
                    <Settings />
                  </AuthenticatedLayout>
                </ProtectedRoute>
              }
            />

            <Route
              path="/chat"
              element={
                <ProtectedRoute>
                  <AuthenticatedLayout>
                    <ChatPage />
                  </AuthenticatedLayout>
                </ProtectedRoute>
              }
            />
            
            {/* Catch all route - redirect to landing page */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ConfigProvider>
  );
};

export default App;

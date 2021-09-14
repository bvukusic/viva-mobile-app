import React from 'react';
import Routes from '../Routes';
import AuthProvider from './AuthProvider';
import TimelineProvider from './TimelineProvider';

export const Providers = () => {
  return (
    <AuthProvider>
      <TimelineProvider>
        <Routes />
      </TimelineProvider>
    </AuthProvider>
  );
};

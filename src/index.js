import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DashboardApp } from './DashboardApp';
import { AppTheme } from './theme/AppTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <AppTheme>
    <DashboardApp />
  </AppTheme>
  // </React.StrictMode>
);
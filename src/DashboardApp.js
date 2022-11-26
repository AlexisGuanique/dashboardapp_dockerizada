import React from 'react';
import ViewTable from './components/ViewTable';
import DashboardLayout from './layout/DashboardLayout';

export default function DashboardApp() {
  return (

    <DashboardLayout>
      <ViewTable />
    </DashboardLayout>
  );
}

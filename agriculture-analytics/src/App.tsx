import React from 'react';
import { MantineProvider } from '@mantine/core';
import MaxMinProductionTable from './components/MaxMinProductionTable';
import AverageYieldAreaTable from './components/AverageYieldAreaTable';

const App: React.FC = () => {
  return (
    <MantineProvider>
      <div>
        <h1>Agriculture Analytics</h1>
        <h2>Max/Min Production Per Year</h2>
        <MaxMinProductionTable />
        <h2>Average Yield and Cultivation Area</h2>
        <AverageYieldAreaTable />
      </div>
    </MantineProvider>
  );
};

export default App;

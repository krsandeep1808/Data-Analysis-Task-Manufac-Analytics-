import React from 'react';
import { Table } from '@mantine/core';
import { getAverageYieldAndArea } from '../utils/analytics';
import { loadAgricultureData } from '../utils/dataLoader';

const data = loadAgricultureData();
const tableData = getAverageYieldAndArea(data);

const AverageYieldAreaTable: React.FC = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Crop</th>
          <th>Average Yield (1950-2020)</th>
          <th>Average Cultivation Area (1950-2020)</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(row => (
          <tr key={row.crop}>
            <td>{row.crop}</td>
            <td>{row.avgYield}</td>
            <td>{row.avgArea}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AverageYieldAreaTable;

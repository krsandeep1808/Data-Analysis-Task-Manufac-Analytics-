import React from 'react';
import { Table } from '@mantine/core';
import { getMaxMinProductionPerYear } from '../utils/analytics';
import { loadAgricultureData } from '../utils/dataLoader';

const data = loadAgricultureData();
const tableData = getMaxMinProductionPerYear(data);

const MaxMinProductionTable: React.FC = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Crop with Maximum Production</th>
          <th>Crop with Minimum Production</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map(row => (
          <tr key={row.year}>
            <td>{row.year}</td>
            <td>{row.max}</td>
            <td>{row.min}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MaxMinProductionTable;

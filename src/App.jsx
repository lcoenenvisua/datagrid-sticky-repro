import { useState } from 'react'
import { LicenseInfo } from '@mui/x-license-pro';
LicenseInfo.setLicenseKey('25c7e7101ecebd5d21fb882ce02e263dTz02NDg1NCxFPTE3MTM1OTY5NDQxODgsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=');

import { DataGridPro } from '@mui/x-data-grid-pro';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();


const range = (start, end) => (
  new Array(end - start + 1)).fill(undefined).map((_, i) => i + start); 

const rowsSample = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const rows = range(0, 1000).reduce( (arr) => [...arr, ...rowsSample], [])

const columns =  [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 }, 
]


function App() {

  return (
    <ThemeProvider theme={theme}>
      <div>
        <DataGridPro 
          enableStickyHeader 
          rows={rows} 
          columns={columns}
        />  
      </div>
    </ThemeProvider>
  )
}

export default App

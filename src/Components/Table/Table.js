import React from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const Table = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      experimentalFeatures={{ newEditingApi: true }}
    />
  </Box>
  )
}

const columns = [
  
    { field: 'الحالة', 
    headerName: 'الحالة', 
    width: 110 },
    {
      field: 'العزبة',
      headerName: 'العزبة',
      width: 110,
    },
    {
      field: 'الشياخة',
      headerName: 'الشياخة',
      width: 110,
    },
    {
      field: 'المركز',
      headerName: 'المركز',
      width: 110,
    },
    {
      field: 'التاريخ',
      headerName: 'التاريخ',
      width: 110,
    },
    {
      field: 'الاسم',
      headerName: 'الاسم',
      width: 140,
    },
    {
      field: 'id',
      headerName: 'الرقم المرجعي',
      width: 120,
    },
  ];
  const rows = [
    { الحالة: "كفر الشيخ", العزبة: 'Snow', الشياخة: 'Jon', المركز: 35, التاريخ: "10/3/2022", الاسم: "احمد محمد اسماعيل السيد",id: 1},
    { الحالة: "كفر الشيخ", العزبة: 'Lan', الشياخة: 'Cersei', المركز: 42, التاريخ: "10/3/2022", الاسم: "احمد محمد اسماعيل السيد",id:2  },
    { الحالة: "كفر الشيخ", العزبة: 'Lan', الشياخة: 'Jaime', المركز: 45, التاريخ: "10/3/2022", الاسم: "احمد محمد اسماعيل السيد",id: 3 },
    { الحالة: "كفر الشيخ", العزبة: null, الشياخة: null, المركز: 35, التاريخ: null, الاسم: "احمد محمد اسماعيل السيد",id: 4 },
    { الحالة: "كفر الشيخ", العزبة: null, الشياخة: null, المركز: 42, التاريخ: null, الاسم: "احمد محمد اسماعيل السيد",id: 5 },  
  ];

export default Table

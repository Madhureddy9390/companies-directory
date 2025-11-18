import axios from "axios";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { MaterialReactTable } from "material-react-table";

export default function App() {
  const [companies, setCompanies] = useState([]);
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    fetchCompanies();
  }, [])
  async function fetchCompanies() {
    try {
      const res = await axios.get("/companies.json")
      console.log(res.data)
      setCompanies(res.data)

      // Auto-generate columns from JSON keys
      if (res.data.length > 0) {
        const cols = Object.keys(res.data[0]).map((key) => ({
          accessorKey: key,
          header: key.charAt(0).toUpperCase() + key.slice(1),
        }));

        setColumns(cols);
      }
    }
    catch (e) {
      console.log("Error while fetching data from the API")
      console.log(e)
    }
  }
  // const columns = [
  //   { accessorKey: "id", header : "ID"},
  //   { accessorKey: "name", header: "Name" },
  //   { accessorKey: "location", header: "Location" },
  //   { accessorKey: "employees", header: "Employees" },
  // ];

  return (
    <Box
    >
      <Card >
        <MaterialReactTable
          columns={columns}
          data={companies}
          // enableColumnFilters ={false}
          // enableSorting={false}
          // enablePagination ={false}
          // enableGlobalFilter ={false}
        />
      </Card>
    </Box>
  );
}

import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get("/companies.json")
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching companies:", error);
      });
  }, []);

  return (
    <div>
      <h2>Company List</h2>
      <h2>Just Checking</h2>

      {companies.map((company) => (
        <div key={company.id}>
          <p><strong>Name:</strong> {company.name}</p>
          <p><strong>Location:</strong> {company.location}</p>
          <p><strong>Employees:</strong> {company.employees}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

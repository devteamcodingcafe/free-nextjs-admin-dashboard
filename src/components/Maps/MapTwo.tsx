import React, { useEffect, useState } from "react";
import axios from "axios";
import MapOne from "./MapOne";

const MapTwo: React.FC = () => {
  const [dentistData, setDentistData] = useState<Record<string, number>>({});
  const [totalDentists, setTotalDentists] = useState(0);

  useEffect(() => {
    // Fetch dentist data from the API and map it for display
    axios
      .get("https://api.engagingsmiles.com/statewise_dentists")
      .then((response) => {
        const data = response.data;
        setDentistData(data);

        // Calculate the total number of dentists
        const total = Object.values(data).reduce((sum, count) => sum + count, 0);
        setTotalDentists(total);
      })
      .catch((error) => console.error("Error fetching dentist data:", error));
  }, []);

  return (
    <div>
      <h2>Total Number of Plotted Dentists: {totalDentists}</h2>
      <MapOne id="mapTwo" data={dentistData} />
    </div>
  );
};

export default MapTwo;

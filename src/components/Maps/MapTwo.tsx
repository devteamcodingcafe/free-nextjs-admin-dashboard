import React, { useEffect, useState } from "react";
import axios from "axios";
import MapOne from "./MapOne";

const MapTwo: React.FC = () => {
  const [dentistData, setDentistData] = useState<Record<string, number>>({});

  useEffect(() => {
    // Fetch dentist data from the API and map it for display
    axios
      .get("https://api.engagingsmiles.com/statewise_dentists")
      .then((response) => {
        const data = response.data;
        const mappedData = {};

        // Map data to the expected format: e.g., { "US-CA": 100, "US-TX": 50 }
        data.forEach((item) => {
          mappedData[item.state_code] = item.dentist_count;
        });

        setDentistData(mappedData);
      })
      .catch((error) => console.error("Error fetching dentist data:", error));
  }, []);

  return (
    <MapOne id="mapTwo" data={dentistData} />
  );
};

export default MapTwo;

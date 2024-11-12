import { useEffect, useState } from 'react';
import axios from 'axios';
import MapTwo from '../Maps/MapTwo';
import Link from 'next/link';

const HeroSection = () => {
  const [dentistData, setDentistData] = useState({});
  const [hoveredState, setHoveredState] = useState(null);

  useEffect(() => {
    // Fetch dentist data from the API
    axios.get('https://api.engagingsmiles.com/statewise_dentists')
      .then(response => {
        setDentistData(response.data);
      })
      .catch(error => console.error("Error fetching dentist data:", error));
  }, []);

  const handleMouseEnter = () => setHoveredState(null);
  const handleMouseLeave = () => setHoveredState(null);

  return (
    <section className="relative flex flex-col items-center text-center py-20 bg-gradient-to-r from-blue-500 to-green-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Transforming Dental Practice Analytics Across the Nation</h1>

      <div className="mt-16 w-full max-w-4xl h-96 relative bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <MapTwo />
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          {/* Implement an interactive map component */}
          <p className="text-lg">US Map with Interactive State Data</p>
        </div>
        {hoveredState && (
          <div className="absolute bottom-4 left-4 bg-white text-gray-800 p-4 rounded shadow">
            <p>{hoveredState}: {dentistData[hoveredState] || 'No data'} dentists monitored</p>
          </div>
        )}
      </div>
      <p className="text-lg mb-8">Join thousands of dental professionals leveraging data to stay ahead.</p>
      <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold">
        <Link href="/auth/signup">Sign Up</Link>

      </button>
    </section>
  );
}

export default HeroSection;
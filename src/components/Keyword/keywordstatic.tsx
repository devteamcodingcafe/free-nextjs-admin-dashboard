import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KeyStatistics = () => {
    const [stats, setStats] = useState({
        totalDentists: 0,
        citiesCovered: 0,
        dataPointsAnalyzed: 0,
        performanceIncrease: null,
        keywords: [],
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                // Replace with actual endpoints for each stat if available
                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get_statistics`); // Example: assumes an endpoint for stats
                const keywordsResponse = await axios.get('/get_getkeywords');

                setStats({
                    ...response.data,
                    keywords: keywordsResponse.data,  // Keywords should have popularity, search volume, and growth
                });
            } catch (error) {
                console.error("Error fetching statistics:", error);
            }
        };

        fetchStats();
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            {/* Key Statistics Section */}
            <div style={{ marginBottom: '20px' }}>
                <h2>Key Statistics</h2>
                <p><strong>Total Dentists Monitored:</strong> {stats.totalDentists}</p>
                <p><strong>Number of Cities Covered:</strong> {stats.citiesCovered}</p>
                <p><strong>Total Data Points Analyzed:</strong> {stats.dataPointsAnalyzed}</p>
                {stats.performanceIncrease && (
                    <p><strong>Average Increase in Practice Performance:</strong> {stats.performanceIncrease}%</p>
                )}
            </div>

            {/* Keyword Trend Cloud */}
            <div>
                <h3>Trending Keywords</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {stats.keywords.map((keyword) => (
                        <span
                            key={keyword.name}
                            style={{
                                fontSize: `${keyword.popularity * 1.5}px`,  // Adjust font size based on popularity
                                cursor: 'pointer',
                                color: '#0070f3'
                            }}
                            data-tip={`${keyword.searchVolume} searches | ${keyword.growth}% growth`}
                        >
                            {keyword.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KeyStatistics;

import { useEffect, useState } from 'react';
import apiClient from '../lib/axios';

export default function Dashboard() {
  const [mortgages, setMortgages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMortgages = async () => {
      try {
        const response = await apiClient.get('/mortgages');
        setMortgages(response.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMortgages();
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>User Dashboard</h1>
      <p>Connected to Backend API: http://localhost:5000/api</p>

      {loading && <p>Loading mortgages...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      
      {mortgages.length > 0 && (
        <div>
          <h2>Your Mortgages</h2>
          <ul>
            {mortgages.map((m: any) => (
              <li key={m.id}>{JSON.stringify(m)}</li>
            ))}
          </ul>
        </div>
      )}

      {!loading && mortgages.length === 0 && !error && (
        <p>No mortgages found. Start by <a href="/mortgage-calculator">calculating a mortgage</a>.</p>
      )}
    </main>
  );
}

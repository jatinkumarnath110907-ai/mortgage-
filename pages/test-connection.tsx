export default function ApiTest() {
  const [status, setStatus] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const testHealthCheck = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/health');
      const data = await response.json();
      setStatus(`✅ Backend Health: ${data.status} - ${data.message}`);
    } catch (error) {
      setStatus(`❌ Backend Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const testApiEndpoint = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/mortgages');
      const data = await response.json();
      setStatus(`✅ API Response: ${JSON.stringify(data)}`);
    } catch (error) {
      setStatus(`❌ API Error: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Frontend & Backend Connection Test</h1>
      <p>Frontend running on: <strong>http://localhost:3000</strong></p>
      <p>Backend running on: <strong>http://localhost:5000</strong></p>
      
      <div style={{ marginTop: '2rem' }}>
        <button onClick={testHealthCheck} disabled={loading}>
          Test Health Check
        </button>
        <button onClick={testApiEndpoint} disabled={loading} style={{ marginLeft: '1rem' }}>
          Test API Endpoint
        </button>
      </div>

      {status && (
        <pre style={{ marginTop: '2rem', background: '#f3f3f3', padding: '1rem', borderRadius: '4px' }}>
          {status}
        </pre>
      )}
    </div>
  );
}

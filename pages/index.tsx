import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Mortgage Management Platform</h1>
      <p>Welcome to the mortgage platform. Use the navigation to access key features.</p>
      <nav style={{ marginTop: '1.5rem' }}>
        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/register">Register</Link></li>
        </ul>
      </nav>
    </main>
  );
}

export default function Installation() {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>Installation</h2>
      <h3>Clone Repository</h3>
      <pre>git clone https://github.com/yourusername/mortgage-management-platform.git</pre>
      <h3>Navigate to Project</h3>
      <pre>cd mortgage-management-platform</pre>
      <h3>Install Dependencies</h3>
      <pre>npm install</pre>
      <h3>Configure Environment Variables</h3>
      <pre>
MONGODB_URI=
JWT_SECRET=
EMAIL_USER=
EMAIL_PASS=
NEXT_PUBLIC_API_URL=
OPENAI_API_KEY=
      </pre>
      <h3>Start Development Server</h3>
      <pre>npm run dev</pre>
    </section>
  );
}

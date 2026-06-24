export default function ApiEndpoints() {
  return (
    <section style={{ padding: '2rem' }}>
      <h2>API Endpoints</h2>
      <h3>Authentication</h3>
      <pre>
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
      </pre>
      <h3>Users</h3>
      <pre>
GET    /api/users/profile
PUT    /api/users/update
      </pre>
      <h3>Mortgages</h3>
      <pre>
GET    /api/mortgages
POST   /api/mortgages/apply
PUT    /api/mortgages/:id
DELETE /api/mortgages/:id
      </pre>
      <h3>Payments</h3>
      <pre>
GET    /api/payments
POST   /api/payments/create
      </pre>
      <h3>Documents</h3>
      <pre>
POST   /api/documents/upload
GET    /api/documents
DELETE /api/documents/:id
      </pre>
    </section>
  );
}

import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mortgage Management Platform',
  description: 'Full-stack mortgage management platform'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

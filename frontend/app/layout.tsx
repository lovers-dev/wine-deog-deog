import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '와인덕덕',
  description: '와인을 덕질하면 덕이 쌓인다',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}

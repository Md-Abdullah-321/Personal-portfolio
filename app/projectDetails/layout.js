import Head from 'next/head';
export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <title>Md Abdullah</title>
        <meta name="description" content="Personal Portfolio" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}

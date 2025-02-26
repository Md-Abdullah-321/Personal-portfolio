import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>Md Abdullah</title>
        <meta name="description" content="Personal Portfolio" />
      </Head>
      {children}
    </>
  );
}

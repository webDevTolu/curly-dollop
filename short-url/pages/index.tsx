import Head from "next/head";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Head>
        <title>shortUrl</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>

      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto p-2 md:p-4 border">
        <h1>shortUrl</h1>
      </div>
    </div>
  );
}

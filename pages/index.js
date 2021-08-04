import Head from 'next/head';
import Nav from "../components/nav"

export default function Home() {
  return (
    
    <div className="bg-gray-800 min-h-screen">
      <Head>
        <title>CoinShooter | Admin Panel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
    </div>
    
  )
}

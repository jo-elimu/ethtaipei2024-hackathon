
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Header from "../../components/Header";
// import Header from '@/components/Header';
import Footer from "../../components/Footer";

export default function Organization() {
  console.log('Organization')

  const router = useRouter()
  const orgAddress = router.query.orgAddress
  console.log('orgAddress:', orgAddress)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-200">
        <Head>
          <title>Radical DAO Transparency 🐸</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <div>
            DAO title
          </div>
          <div>
            Role title 1
          </div>
          <div>
            Role title 2
          </div>
        </main>

        <Footer />
      </div>
  );
}

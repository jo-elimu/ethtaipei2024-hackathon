
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
        <Header />

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Frog DAO
          </h1>
          <code className="mt-4">
            0x43A30DB2d6962c37a702E869FbD15cFc4f86f621
          </code>

          <div id="daoRoles" className="mt-4">
            <div>
              Role title 1
            </div>
            <div>
              Role title 2
            </div>
            <div>
              Role title 3
            </div>
          </div>
        </main>

        <Footer />
      </div>
  );
}

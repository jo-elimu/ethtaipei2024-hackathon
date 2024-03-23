import { useRouter } from "next/router";
import Header from "../../components/Header";
// import Header from '@/components/Header';
import Footer from "../../components/Footer";
import Link from "next/link";
import Roles from "../../components/Roles";

export default function Organization() {
  console.log('Organization')

  const router = useRouter()
  const orgAddress: any = router.query.orgAddress
  console.log('orgAddress:', orgAddress)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-green-200">
        <Header />

        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">
            Hacker DAO
          </h1>

          <Link className="mt-4" href={`https://sepolia-optimism.etherscan.io/address/${orgAddress}`} target="_blank">
            <code className="bg-green-100 rounded-2xl p-2 px-4">{orgAddress} ↗️</code>
          </Link>

          <div id="orgRoles" className="mt-8">
            <Roles orgAddress={orgAddress} />
          </div>
        </main>

        <Footer />
      </div>
  );
}

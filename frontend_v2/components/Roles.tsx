import { useReadContract } from "wagmi";
import { abi } from "../../smart-contracts/ignition/deployments/chain-11155420/artifacts/DaoModule#Dao.json";
import { useIsMounted } from "../hooks/useIsMounted";

export default function Roles({ orgAddress }: any) {
    console.log('Roles')

    const { data, isLoading } = useReadContract({
        abi,
        address: orgAddress,
        functionName: 'getRolesCount'
    })
    console.log('data:', data )

    if (!useIsMounted || isLoading) {
        return (
            <>
                Loading DAO roles...
                <div className="mt-4 animate-spin text-6xl">🐸</div>
            </>
        )
    }

    return (
      <>
        <div className="bg-white rounded-2xl p-4">
            Role title 1
        </div>
        <div className="mt-4 bg-white rounded-2xl p-4">
            Role title 2
        </div>
        <div className="mt-4 bg-white rounded-2xl p-4">
            Role title 3
        </div>
      </>
    )
  }
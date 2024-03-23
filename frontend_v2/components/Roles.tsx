import { useReadContract } from "wagmi";
import { abi } from "../../smart-contracts/ignition/deployments/chain-11155420/artifacts/DaoModule#Dao.json";
import { useIsMounted } from "../hooks/useIsMounted";
import Role from "./Role";

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

    let rolesCount: any = null
    if (data != undefined) {
        rolesCount = Number(data)
    }
    console.log('rolesCount:', rolesCount)

    if (rolesCount == 0) {
        return (
            <>
                No roles have been added yet
            </>
        )
    }

    return (
      <>
        {[...Array(rolesCount)].map((data, index) => (
            <div className="mt-4 bg-white rounded-2xl p-4">
                <Role orgAddress={orgAddress} roleIndex={index} />
            </div>
        ))}
      </>
    )
  }
import { useReadContract } from "wagmi";
import { abi } from "../../smart-contracts/ignition/deployments/chain-11155420/artifacts/DaoModule#Dao.json";
import { useIsMounted } from "../hooks/useIsMounted";
import RoleMembers from "./RoleMembers";

export default function Role({ orgAddress, roleIndex }: any) {
    console.log('Role')

    const { data, isLoading } = useReadContract({
        abi,
        address: orgAddress,
        functionName: 'roles',
        args: [roleIndex]
    })
    console.log('data:', data )

    if (!useIsMounted() || isLoading) {
        return (
            <>
                Loading role...
                <div className="mt-4 animate-spin text-6xl">🐸</div>
            </>
        )
    }

    const roleTitle = data ? String(data) : null;
    console.log('roleTitle:', roleTitle)
    return (
        <>
            <h2 className="text-4xl"><span className="text-gray-300">Role:</span> {roleTitle}</h2>
            <div className="mt-4">
                <RoleMembers orgAddress={orgAddress} roleTitle={roleTitle} />
            </div>
        </>
    )
  }
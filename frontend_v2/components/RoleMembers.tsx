import { useReadContract, useReadContracts } from "wagmi";
import { abi } from "../../smart-contracts/ignition/deployments/chain-11155420/artifacts/DaoModule#Dao.json";
import { useIsMounted } from "../hooks/useIsMounted";

export default function RoleMembers({ orgAddress, roleTitle }: any) {
    console.log('RoleMembers')

    const { data, isLoading } = useReadContract({
        abi,
        address: orgAddress,
        functionName: 'getMembersCount'
    })
    console.log('data:', data )

    if (!useIsMounted() || isLoading) {
        return (
            <>
                Loading DAO member count...
                <div className="mt-4 animate-spin text-6xl">🐸</div>
            </>
        )
    }

    const memberCount = data ? Number(data) : null;
    console.log('memberCount:', memberCount)
    return (
        <OrgMemberAddresses orgAddress={orgAddress} roleTitle={roleTitle} memberCount={memberCount} />
    )
}

export function OrgMemberAddresses({ orgAddress, roleTitle, memberCount }: any) {
    console.log('OrgMemberAddresses')

    console.log('abi:', abi)

    let contracts = [memberCount]
    for (let i = 0; i < memberCount; i++) {
        contracts[i] = {
            address: orgAddress,
            abi: abi,
            functionName: 'members',
            args: [i]
        }
    }
    console.log('contracts:', contracts)

    const { data, isLoading } = useReadContracts({
        contracts: contracts
    })
    console.log('data:', data )

    if (!useIsMounted() || isLoading) {
        return (
            <>
                Loading DAO member addresses...
                <div className="mt-4 animate-spin text-6xl">🐸</div>
            </>
        )
    }

    let orgMemberAddresses: String[] = []
    if (data != null) {
        data.map((dataRow, index) => (
            orgMemberAddresses[index] = String(dataRow.result)
        ))
    }
    console.log('orgMemberAddresses:', orgMemberAddresses)
    return (
        <>
            DAO members that have been rated for this role:
            <div className="mt-2">
                <OrgMembersRatedForRole orgAddress={orgAddress} roleTitle={roleTitle} orgMemberAddresses={orgMemberAddresses} />
            </div>
        </>
    )
}

export function OrgMembersRatedForRole({ orgAddress, roleTitle, orgMemberAddresses }: any) {
    console.log('OrgMembersRatedForRole')

    console.log('abi:', abi)

    const orgMemberAddressesArray: String[] = orgMemberAddresses
    console.log('orgMemberAddressesArray:', orgMemberAddressesArray)
    console.log('orgMemberAddressesArray.length:', orgMemberAddressesArray.length)
    // let contracts = [orgMemberAddressesArray.length]
    // for (let i = 0; i < orgMemberAddressesArray.length; i++) {
    //     contracts[i] = {
    //         address: orgAddress,
    //         abi: abi,
    //         functionName: 'rates',
    //         args: [orgMemberAddressesArray[i], roleTitle, orgMemberAddressesArray[i]]
    //     }
    // }
    // console.log('contracts:', contracts)

    // const { data, isLoading } = useReadContracts({
    //     contracts: contracts
    // })
    // console.log('data:', data )

    // if (!useIsMounted() || isLoading) {
    //     return (
    //         <>
    //             Loading DAO members rated for role...
    //             <div className="mt-4 animate-spin text-6xl">🐸</div>
    //         </>
    //     )
    // }

    console.log('GetAvgRate')

    const { data, isLoading } = useReadContract({
        abi,
        address: orgAddress,
        functionName: 'ratings',
        args: ['0x1aB0bE0067c4C82725dDF8456fF3031c3da08329', 'swe', '0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf'],
    })
    console.log('data:', data )

    return (
        <>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Member</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orgMemberAddressesArray.map((address, index) => (
                            <tr key={index}>
                                <td><code>{address}</code> {data}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

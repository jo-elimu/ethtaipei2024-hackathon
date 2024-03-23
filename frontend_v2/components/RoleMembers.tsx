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
                        orgMemberAddressesArray.map((address, index) => {
                            const { data: data1, isLoading: isLoading1 } = useReadContract({
                                abi,
                                address: orgAddress,
                                functionName: 'ratings',
                                args: [address, roleTitle, orgMemberAddresses[0]], // member, role, rater
                            })
                            console.log('address, index, data', address, index, data1);

                            const { data: data2, isLoading: isLoading2 } = useReadContract({
                                abi,
                                address: orgAddress,
                                functionName: 'ratings',
                                args: [address, roleTitle, orgMemberAddresses[1]], // member, role, rater
                            })
                            console.log('address, index, data', address, index, data2);

                            // Convert data and data2 to integers
                            const integerData1 = parseInt(data1 as string);
                            const integerData2 = parseInt(data2 as string);

                            // Calculate average
                            const average = (integerData1 + integerData2) / 2;

                            return (
                                <tr key={index}>
                                    <td><code>{address}</code> --- rating: {average}</td>
                                </tr>
                            )}
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

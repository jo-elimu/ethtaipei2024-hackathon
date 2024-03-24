import { useReadContract, useReadContracts } from "wagmi";
import { abi } from "../../smart-contracts/ignition/deployments/chain-11155420/artifacts/DaoModule#Dao.json";
import { useIsMounted } from "../hooks/useIsMounted";
import BlockiesSvg from "blockies-react-svg";

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
                        <th>Average</th>
                        {orgMemberAddressesArray.map((address, index) => (
                            <th key={index}>
                                <BlockiesSvg className="rounded-full h-5 w-5" address={String(address)} />
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        orgMemberAddressesArray.map((address, index) => {
                            // *** The following code works but will cause webpage build failed, the code fetch actucal rating from smart contracts *** 
                            // var avg = 0;
                            // for (let index = 0; index < orgMemberAddressesArray.length; index++) {
                            //     const { data, isLoading } = useReadContract({
                            //         abi,
                            //         address: orgAddress,
                            //         functionName: 'ratings',
                            //         args: [address, roleTitle, orgMemberAddresses[index]], // member, role, rater
                            //     });
                            //     console.log('ratee, rate, rater', address, data, orgMemberAddresses[index]);

                            //     avg = avg + parseInt(data as string);
                            // }
                            const avg = parseFloat((Math.random() * 10).toFixed(2));

                            return (    
                                <tr key={index}>
                                    <td><code>{address.substring(0,6)}...{address.substring(38,42)}</code></td>
                                    <td>{avg}</td>
                                    {orgMemberAddressesArray.map((address, index) => (
                                        <td key={index}>
                                            <RandomRating />
                                        </td>
                                    ))}
                                </tr>
                            )}
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export function RandomRating() {
    console.log('RandomRating')

    // Get random rating from 1-10
    const rating = ((Math.random() * 9) + 1).toFixed()
    console.log('rating:', rating)

    if (rating == '1') {
        return (
            <div className={`bg-rose-400`}>
                {rating}
            </div>
        )
    } else if (rating == '2') {
        return (
            <div className={`bg-pink-400`}>
                {rating}
            </div>
        )
    } else if (rating == '3') {
        return (
            <div className={`bg-fuchsia-400`}>
                {rating}
            </div>
        )
    } else if (rating == '4') {
        return (
            <div className={`bg-purple-400`}>
                {rating}
            </div>
        )
    } else if (rating == '5') {
        return (
            <div className={`bg-violet-400`}>
                {rating}
            </div>
        )
    } else if (rating == '6') {
        return (
            <div className={`bg-indigo-400`}>
                {rating}
            </div>
        )
    } else if (rating == '7') {
        return (
            <div className={`bg-blue-400`}>
                {rating}
            </div>
        )
    } else if (rating == '8') {
        return (
            <div className={`bg-sky-400`}>
                {rating}
            </div>
        )
    } else if (rating == '9') {
        return (
            <div className={`bg-cyan-400`}>
                {rating}
            </div>
        )
    } else if (rating == '10') {
        return (
            <div className={`bg-teal-400`}>
                {rating}
            </div>
        )
    }
}

// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.19;

contract Dao {
    // dao member => role => rater => rate
    mapping(address => mapping(string => mapping(address => uint8))) public ratings;

    // all members of the dao
    address[] public members;
    mapping(address => bool) public isMember;

    // roles of a given dao member
    string[] public roles;
    mapping(string => bool) public roleExists;

    function addMember(address member) public {
        if (isMember[member] == false) {
            isMember[member] = true;
            members.push(member);
        }
    }

    function addRole(string memory role) public {
        if (roleExists[role] == false) {
            roleExists[role] = true;
            roles.push(role);
        }
    }

    function rateMember(address ratee, string memory role, address rater, uint8 rating) public {
        ratings[ratee][role][rater] = rating;
    }

    // Function to get the length of members array
    function getMembersCount() public view returns (uint256) {
        return members.length;
    }

    // Function to get the length of roles array
    function getRolesCount() public view returns (uint256) {
        return roles.length;
    }
}




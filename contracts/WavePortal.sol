// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {

uint256 totalWaves; //delcaring totalWaves to keep count of waves - state variable
  constructor() {
    console.log("smart contract");
  }

function wave() public {
  totalWaves += 1; //incrementing waves whenevr we recieve one
  console.log("%s has waved!", msg.sender); //msg.sender = wallet address of persin calling the wave function  
}

}
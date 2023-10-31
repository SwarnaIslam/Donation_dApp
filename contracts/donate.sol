// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Donate {
    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }
    address payable owner;

    Memo[] memo;

    constructor() {
        owner = payable(msg.sender);
    }

    function donating(
        string memory name,
        string memory message
    ) public payable {
        require(msg.value > 0, "Donated amount is zero ether");
        owner.transfer(msg.value);
        memo.push(Memo(name, message, block.timestamp, msg.sender));
    }

    function getMemos() public view returns (Memo[] memory) {
        return memo;
    }
}

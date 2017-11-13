pragma solidity ^0.4.17;

contract TestSmartContract {
    address public owner;
    uint public total;

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    function TestSmartContract() public {
        owner = msg.sender;
    }

    function add(uint amount) public restricted {
        total = total + amount;
    }
}

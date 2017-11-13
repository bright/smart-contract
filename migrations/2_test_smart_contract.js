var TestSmartContract = artifacts.require("./TestSmartContract.sol");

module.exports = function(deployer) {
    deployer.deploy(TestSmartContract);
};

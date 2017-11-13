const TestContract = artifacts.require('TestSmartContract')

let TestContractDeployed;
let ContractOwner;

contract('TestContract', (accounts) => {

    beforeEach('prepare', () => {
        return TestContract.new().then((instance) => {
            TestContractDeployed = instance;
            return TestContractDeployed.owner();
        }).then(function (owner) {
            ContractOwner = owner;
        });
    });

    describe('test add method', () => {

        it('total should be 4 if add(4)', (done) => {
            TestContractDeployed.add(4, {from: ContractOwner}).then(function () {
                TestContractDeployed.total({from: ContractOwner}).then(function (res) {
                    assert.equal(res.valueOf(), 4);
                    done();
                });
            });
        });

        it('total should be 30 if add(6);add(4);add(20);', (done) => {
            Promise.all([
                TestContractDeployed.add(6, {from: ContractOwner}),
                TestContractDeployed.add(4, {from: ContractOwner}),
                TestContractDeployed.add(20, {from: ContractOwner})
            ]).then(() => {
                TestContractDeployed.total({from: ContractOwner}).then(function (res) {
                    assert.equal(res.valueOf(), 30);
                    done();
                });
            });
        });

    });

});
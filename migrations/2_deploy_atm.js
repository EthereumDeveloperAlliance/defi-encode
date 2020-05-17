var ATM = artifacts.require("./ATM.sol");

module.exports = function (deployer) {
  deployer.deploy(ATM, "0x");
};

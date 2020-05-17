const Migrations = artifacts.require("./Migrations.sol");
// const ERC20 = artifacts.require("./ERC20.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  //   deployer.deploy(ERC20);
};

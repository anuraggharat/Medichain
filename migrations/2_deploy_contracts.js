const Medichain = artifacts.require("Medichain");

module.exports = function (deployer) {
  deployer.deploy(Medichain);
};

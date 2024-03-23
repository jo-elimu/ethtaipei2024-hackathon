const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("DaoModule", (m) => {
  const dao = m.contract("Dao", [], {});
  return { dao };
});

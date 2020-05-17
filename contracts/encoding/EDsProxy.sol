contract EDsProxy { 

  function openLockETHAndDraw(
    address manager,
    address jug,
    address ethJoin,
    address daiJoin,
    bytes32 ilk,
    uint wadD
  ) public pure returns (bytes memory) {
      return abi.encodeWithSignature("openLockETHAndDraw(address,address,address,address,bytes32,uint256)", manager, jug, ethJoin, daiJoin, ilk, wadD);
  }

  function openLockGemAndDraw(
    address manager,
    address jug,
    address gemJoin,
    address daiJoin,
    bytes32 ilk,
    uint amtC,
    uint wadD,
    bool transferFrom
  ) public pure returns (bytes memory) {
    return abi.encodeWithSignature("openLockGemAndDraw(address,address,address,address,bytes32,uint256,uint256,bool)", manager, jug, gemJoin, daiJoin, ilk, amtC, wadD, transferFrom);
  }
  
  function wipeAllAndFreeETH(
    address manager,
    address ethJoin,
    address daiJoin,
    uint cdp,
    uint wadC
  ) public pure returns (bytes memory) {
    return abi.encodeWithSignature("wipeAllAndFreeETH(address,address,address,uint256,uint256)", manager, ethJoin, daiJoin, cdp, wadC);
  }

  function wipeAllAndFreeGem(
    address manager,
    address gemJoin,
    address daiJoin,
    uint cdp,
    uint amtC
  ) public pure returns (bytes memory) {
    return abi.encodeWithSignature("wipeAllAndFreeGem(address,address,address,uint256,uint256)", manager, gemJoin, daiJoin, cdp, amtC);
  }
}
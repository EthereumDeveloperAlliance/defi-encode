pragma solidity ^0.5.15;

import "@openzeppelin/upgrades/contracts/Initializable.sol";

// Encoding Interfaces
import './encoding/EDsProxy.sol';

contract DeFiEncode is 
  Initializable, 
  EDsProxy {

  string public name;
  string public version;

  function initialize() initializer public {
    name = 'DeFiEncoding';
    version = '1.0.0';
  }
  
}
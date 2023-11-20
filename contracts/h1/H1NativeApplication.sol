// SPDX-License-Identifier: ISC
pragma solidity ^0.8.0;

import "./base/H1NativeBase.sol";

contract H1NativeApplication is H1NativeBase {
    constructor(address _feeContract) {
        _h1NativeBase_init(_feeContract);
    }
}

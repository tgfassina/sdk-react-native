//
//  MotorKitModule.swift
//  sdkreactnative
//
//  Created by Prad Nukala on 7/18/22.
//

import Foundation
import MotorKit
import React

@objc(MotorKitModule)
class MotorKitModule : RCTEventEmitter {
  @objc override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  override func constantsToExport() -> [AnyHashable : Any]! {
    [:]
  }
  override func supportedEvents() -> [String]! {
    return []
  }
  
  @objc func checkBridge(
    _ data : String,
    resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) -> Void {
    resolve(data)
  }

  @objc func createAccount(
    _ password : String,
    resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) -> Void {
    let motor = MotorKit()
    let account = motor.createAccount(password: password)

    resolve(account)
  }

  @objc(loginAccount:password:dscKey:pskey:)
  public func loginAccount(
    _ did : String, 
    password : String?, 
    dscKey: Data?, 
    pskKey: Data?,
    resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock) -> Void {
    let motor = MotorKit()
    let isLoggedIn = motor.loginAccount(did: did, password: password, dscKey: dscKey, pskKey: pskKey)

    resolve(isLoggedIn)
  }
}

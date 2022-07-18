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
  
  @objc func createAccount(
    _ resolve: @escaping RCTPromiseResolveBlock,
    rejecter reject: @escaping RCTPromiseRejectBlock
  ) -> Void {
    let motor = MotorKit()
    let passwd = "Hello"
    let account = motor.createAccount(password: passwd) //password
    print("debug", account)
    resolve(account) 
  }
}

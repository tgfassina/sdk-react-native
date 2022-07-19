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
  
  @objc(createAccount:)
  public func createAccount(_ password : String) -> String? {
    let motor = MotorKit()
    return motor.createAccount(password: password)
  }

  @objc(loginAccount:password:dscKey:pskey:)
  public func loginAccount(_ did : String, password : String?, dscKey: Data?, pskKey: Data?) -> Bool {
    let motor = MotorKit()
    return motor.loginAccount(did: did, password: password, dscKey: dscKey, pskKey: pskKey)
  }
}

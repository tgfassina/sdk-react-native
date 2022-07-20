//
//  MotorKitModule.m
//  sdkreactnative
//
//  Created by Prad Nukala on 7/18/22.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(MotorKitModule, RCTEventEmitter)
RCT_EXTERN_METHOD(createAccount:
                  (NSString)password
                  resolve:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject);

RCT_EXTERN_METHOD(checkBridge:
                  (NSString)data
                  resolve:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject);

RCT_EXTERN_METHOD(loginAccount:
                  (NSString)did
                  password: (NSString)password
                  dscKey: (NSDictionary)dscKey
                  pskKey: (NSDictionary)pskKey
                  resolve:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject);
@end

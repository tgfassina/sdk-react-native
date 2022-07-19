import { NativeModules } from "react-native";

class MotorKitBridgeModule {
  createAccount = async (username: string) => {
    return NativeModules.MotorKitModule.createAccount(username);
  };
  loginAccount = (
    did: String,
    password: String,
    dscKey: any,
    pskKey: any
  ): boolean => {
    return NativeModules.MotorKitModule.loginAccount(
      did,
      password,
      dscKey,
      pskKey
    );
  };
}
const Bridge = new MotorKitBridgeModule();
export default Bridge;

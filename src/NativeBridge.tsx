import { NativeModules } from "react-native";

class MotorKitBridgeModule {
  createAccount = async (password: string): Promise<string> => {
    return NativeModules.MotorKitModule.createAccount(password);
  };

  loginAccount = async (
    did: String,
    password: String,
    dscKey: any,
    pskKey: any
  ): Promise<boolean> => {
    return NativeModules.MotorKitModule.loginAccount(
      did,
      password,
      dscKey,
      pskKey
    );
  };

  checkBridge = async (data: string): Promise<string> => {
    return NativeModules.MotorKitModule.checkBridge(data);
  };
}
const Bridge = new MotorKitBridgeModule();
export default Bridge;

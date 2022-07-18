import { NativeModules } from "react-native";

class SampleModule {
  createAccount = async (username: string) => {
    console.log("here-bridge", username);
    return NativeModules.MotorKitModule.createAccount(); //username
  };
}
const Bridge = new SampleModule();
export default Bridge;

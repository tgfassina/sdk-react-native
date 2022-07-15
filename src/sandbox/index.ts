import AsyncStorage from "@react-native-async-storage/async-storage";
import { SonrUser, SonrUserData } from "../../types";

const login = async (
  username: string,
  password: string
): Promise<SonrUserData | null> => {
  const sessionDB = await AsyncStorage.getItem("database");
  const database: SonrUser[] = JSON.parse(sessionDB || "[]");

  const user = database.find((user) => user.username === username);
  if (!user || user.password !== password) {
    return null;
  }

  return {
    username,
    matrixUsername: user.matrixUsername,
    matrixPassword: user.matrixPassword,
  };
};

const createAccount = async (
  username: string,
  password: string
): Promise<boolean> => {
  if (username.length < 4 || password.length < 4) {
    return false;
  }
  const newRecord = {
    username,
    password,
    matrixUsername: username,
    matrixPassword: password,
  };

  const sessionDB = await AsyncStorage.getItem("database");
  const database = JSON.parse(sessionDB || "[]");
  database.push(newRecord);
  AsyncStorage.setItem("database", JSON.stringify(database));

  return true;
};

export default {
  login,
  createAccount,
};

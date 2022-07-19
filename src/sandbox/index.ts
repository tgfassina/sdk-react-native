import AsyncStorage from "@react-native-async-storage/async-storage";
import { SonrUser, SonrUserData } from "../../types";

const login = async (
  username: string,
  password: string
): Promise<SonrUserData | null> => {
  const sessionDB = await AsyncStorage.getItem("database");
  const database: SonrUser[] = JSON.parse(sessionDB || "[]");

  const user = database.find((user) => user.username === username);
  if (!user || user.password !== password) return null;

  return {
    username,
    matrixUsername: user.matrixUsername,
    matrixPassword: user.matrixPassword,
  };
};

const createAccount = async (
  username: string,
  password: string,
  matrixUsername: string,
  matrixPassword: string
): Promise<SonrUserData> => {
  if (matrixUsername.length < 2 || matrixPassword.length < 4) null;

  const newRecord = {
    username,
    password,
    matrixUsername,
    matrixPassword,
  };

  const sessionDB = await AsyncStorage.getItem("database");
  const database = JSON.parse(sessionDB || "[]");
  database.push(newRecord);
  AsyncStorage.setItem("database", JSON.stringify(database));

  const { password: _, ...userData } = newRecord;
  return userData;
};

export default {
  login,
  createAccount,
};

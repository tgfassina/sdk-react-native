import AsyncStorage from "@react-native-async-storage/async-storage";

const database = [
  {
    username: "bob",
    password: "doug",
    matrixUsername: "usera",
    matrixPassword: "eBY89ZF8JeXqadJNihhwx3cZH2TK7K",
  },
  {
    username: "doug",
    password: "bob",
    matrixUsername: "userb",
    matrixPassword: "9S9Wihktc49YYCAvg3h3Fv3KKyNbDF",
  },
];

const login = async (username: string, password: string) => {
  const sessionDB = await AsyncStorage.getItem("database");
  const database = sessionDB != null ? JSON.parse(sessionDB) : null;

  if (!database) {
    return null;
  }

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

const createAccount = async (username: string, password: string) => {
  if (username.length < 4 || password.length < 4) {
    return null;
  }
  const newRecord = {
    username,
    password,
    matrixUsername: username,
    matrixPassword: password,
  };

  const sessionDB = await AsyncStorage.getItem("database");
  if (!sessionDB) {
    database.push(newRecord);
    const jsonValue = JSON.stringify(database);
    AsyncStorage.setItem("database", jsonValue);
  } else {
    const jsonValue: any[] = JSON.parse(sessionDB);
    jsonValue.push(newRecord);
    const strJsonValue = JSON.stringify(jsonValue);
    AsyncStorage.setItem("database", strJsonValue);
  }
  return true;
};

export default {
  login,
  createAccount,
};

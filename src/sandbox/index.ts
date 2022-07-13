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
  const sessionUser = await AsyncStorage.getItem("userSessionUsername");
  const sessionToken = await AsyncStorage.getItem("userSessionPassword");
  if (sessionToken && sessionToken) {
    return { username: sessionUser };
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
  database.push(newRecord);

  AsyncStorage.setItem("userSessionUsername", username);
  AsyncStorage.setItem("userSessionPassword", password);

  return newRecord;
};

export default {
  login,
  createAccount,
};

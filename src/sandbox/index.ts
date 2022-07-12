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

const login = (username: string, password: string) => {
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

export default {
  login,
};

const database = [
  { username: "bob", password: "doug" },
  { username: "doug", password: "bob" },
];

const login = (username: string, password: string) => {
  const user = database.find((user) => user.username === username);
  if (!user || user.password !== password) {
    return null;
  }

  return {
    username: username,
    matrixUsername: "usera",
    matrixPassword: "eBY89ZF8JeXqadJNihhwx3cZH2TK7K",
  };
};

export default {
  login,
};

export type SonrUser = {
  username: string;
  password: string;
  matrixUsername: string;
  matrixPassword: string;
};

export type SonrUserData = Omit<SonrUser, "password">;

export type ScreenTitle =
  | "PromptRecognized"
  | "ConnectWithVault"
  | "CreateAccount"
  | "AccountCreated";

export type InputIcon = "IconUser" | "SecuritySafe";

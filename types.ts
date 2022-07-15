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
  | "AccountCreated"
  | "SandboxOptions"
  | "CreateAccountMatrix";

export type InputIcon = "IconUser" | "SecuritySafe";

export type AuthenticationProps = {
  onSuccess: (userData: SonrUserData) => void;
};

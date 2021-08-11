export const signUpErrors: { [key: string]: string } = {
  "auth/email-already-in-use": "This email already used",
};

export const signInErrors: { [key: string]: string } = {
  "auth/wrong-password": "Wrong password",
  "auth/user-not-found": "Wrong email",
  "auth/too-many-requests": "Too many attempts. Try again later",
};

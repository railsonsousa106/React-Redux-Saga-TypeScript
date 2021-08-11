export interface ContactUs {
  user: ContactUsUser;
  ui: ContactUsUI;
}

export interface ContactUsUser {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
}

export interface PayloadContactUsUser {
  user: ContactUsUser;
}

export interface ContactUsUI {
  loading?: boolean;
  errors?: ContactUsErrors;
  success?: boolean;
}

export interface PayloadContactUsUI {
  ui: ContactUsUI;
}

export interface ContactUsErrors extends ContactUsUser {
  main?: string;
}

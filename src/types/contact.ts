export interface TContactForm {
  name: string;
  email: string;
  message: string;
}

export interface TEmailResponse {
  status: number;
  text: string;
}

export interface TFormState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
} 
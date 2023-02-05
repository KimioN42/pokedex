export interface BtnProps {
  name: string;
  style: any;
  handleClick: () => void;
}

export interface StepperProps {
  activeStep: number;
  setActiveStep: (step: number | any) => void;
  userData: userInfo;
  setUserData: (user: userInfo) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValidForm: boolean;
  setValidation: (validation: boolean) => void;
  resetForm: () => void;
}

export interface FormProps {
  userData: userInfo;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
  setValidation: (validation: boolean) => void;
  isValidForm: boolean;
}

export interface userInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface PokemonListProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
}

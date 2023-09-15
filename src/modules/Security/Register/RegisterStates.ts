export enum RegisterStates {
  Status = 1,
  Email = 2,
}

export const RegisterStatesLastStep = RegisterStates.Email

export enum RegisterStateDirectionsEnum {
  Forward = 'Forward',
  Backward = 'Backward',
}

export enum RegisterSupportStatesEnum {
  Success = 'success',
  Home = 'home',
  Profile = 'profile',
}

export enum RegisterStatesTypeEnum {
  Steps = 'Steps',
  Support = 'Support',
}

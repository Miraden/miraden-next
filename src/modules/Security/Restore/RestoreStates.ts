export enum RestoreStates {
  Form = 1,
  Confirm = 2,
}

export const RestoreStatesLastStep = RestoreStates.Confirm
export const RestoreStatesFirstStep = RestoreStates.Form

export enum RestoreStateDirectionsEnum {
  Forward = 'Forward',
  Backward = 'Backward',
}

export enum RestoreSupportStatsEnum {
  Login = 'login',
  Success = 'success',
}

export enum RestoreStatesTypeEnum {
  Steps = 'Steps',
  Support = 'Support',
}

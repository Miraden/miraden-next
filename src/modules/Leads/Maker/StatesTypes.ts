export enum StateDirection {
  Forward = 'Forward',
  Backward = 'Backward',
}

export enum LeadMakerStates {
  Location = 1,
  Format = 2,
  EstateType = 3,
  Status = 4,
  Area = 5,
  Rooms = 6,
  Purpose = 7,
  ReadyDeal = 8,
  Budget = 9,
  Purchase = 10,
  Wishes = 11,
}

export enum FormatRentStates {
  Area = 5,
  Period = 7,
  ReadyDeal = 8,
  Budget = 9,
  Wishes = 11,
}

export enum SupportStates {
  Intro = 'intro',
  Payment = 'payment',
}

export enum StatesType {
  Steps = 'Steps',
  Support = 'Support',
}

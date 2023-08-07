interface LocalisationStruct {
  name: {
    ru: string
    en: string
  }
}

export interface LeadEstateTypesStruct extends LocalisationStruct {
  label: string
  subtypes?: LeadEstateTypesStruct[]
}

const LeadEstateTypes: LeadEstateTypesStruct[] = [
  {
    label: 'apartment',
    name: {
      ru: 'Квартира',
      en: 'Apartments',
    },
    subtypes: [
      {
        label: 'flat',
        name: {
          ru: 'Квартира',
          en: 'Apartments',
        },
      },
      {
        label: 'studio',
        name: {
          ru: 'Студия',
          en: 'studio',
        },
      },
      {
        label: 'apartments',
        name: {
          ru: 'Апартаменты',
          en: 'Apartments',
        },
      },
      {
        label: 'condominium',
        name: {
          ru: 'Кондоминиум',
          en: 'Сondominium',
        },
      },
      {
        label: 'penthouse',
        name: {
          ru: 'Пентхаус',
          en: 'Penthouse',
        },
      },
      {
        label: 'townhouse',
        name: {
          ru: 'Таунхаус',
          en: 'Townhouse',
        },
      },
      {
        label: 'loft',
        name: {
          ru: 'Лофт',
          en: 'Loft',
        },
      },
    ],
  },

  {
    label: 'house',
    name: {
      ru: 'Дом',
      en: 'House',
    },
    subtypes: [
      {
        label: 'villa',
        name: {
          ru: 'Вилла',
          en: 'Cilla',
        },
      },
      {
        label: 'cottage',
        name: {
          ru: 'Коттедж',
          en: 'Сottage',
        },
      },
      {
        label: 'private',
        name: {
          ru: 'Частный дом',
          en: 'Private',
        },
      },
      {
        label: 'duplex',
        name: {
          ru: 'Дуплекс',
          en: 'Duplex',
        },
      },
      {
        label: 'townhouse',
        name: {
          ru: 'Таунхаус',
          en: 'Townhouse',
        },
      },
      {
        label: 'manor',
        name: {
          ru: 'Усадьба',
          en: 'Manor',
        },
      },
      {
        label: 'mansion',
        name: {
          ru: 'Особняк',
          en: 'Mansion',
        },
      },
      {
        label: 'estate',
        name: {
          ru: 'Поместье',
          en: 'Estate',
        },
      },
      {
        label: 'maisonette',
        name: {
          ru: 'Мезонет',
          en: 'Maisonette',
        },
      },
      {
        label: 'castle',
        name: {
          ru: 'Замок',
          en: 'Castle',
        },
      },
    ],
  },

  {
    label: 'land',
    name: {
      ru: 'Земля',
      en: 'Land',
    },
    subtypes: [
      {
        label: 'area',
        name: {
          ru: 'Участок земли',
          en: 'Land area',
        },
      },
      {
        label: 'island',
        name: {
          ru: 'Остров',
          en: 'Island',
        },
      },
      {
        label: 'vineyard',
        name: {
          ru: 'Виноградник',
          en: 'Vineyard',
        },
      },
    ],
  },

  {
    label: 'commercial',
    name: {
      ru: 'Коммерческая',
      en: 'Сommercial',
    },
    subtypes: [
      {
        label: 'hotel',
        name: {
          ru: 'Отель',
          en: 'Hotel',
        },
      },
      {
        label: 'office',
        name: {
          ru: 'Офис',
          en: 'Office',
        },
      },
      {
        label: 'commerce',
        name: {
          ru: 'Торговля',
          en: 'Commerce',
        },
      },
      {
        label: 'warehouse',
        name: {
          ru: 'Склад',
          en: 'Warehouse',
        },
      },
      {
        label: 'catering',
        name: {
          ru: 'Общепит',
          en: 'Catering',
        },
      },
      {
        label: 'manufacture',
        name: {
          ru: 'Производство',
          en: 'Manufacture',
        },
      },
      {
        label: 'free',
        name: {
          ru: 'Свободное назначение',
          en: 'Free purpose',
        },
      },
    ],
  },
]

export function findLeadEstateTypesSubLevelByRoot(
  rootLabel: string
): LeadEstateTypesStruct[] {
  let found: any = []
  LeadEstateTypes.map((i, id) => {
    if (!i) return
    if (i.label === rootLabel) {
      if (i.subtypes) {
        found.push(i.subtypes)
      }
    }
  })

  if (found.length > 0) return found[0]

  return []
}

export function findLeadEstateTypesRootLabels(): string[] {
  let found: string[] = []

  LeadEstateTypes.map((i, id) => {
    if (!i) return
    found.push(i.label)
  })

  return found
}

export interface LeadEstateStatusStruct {
  label: LeadEstateStatusesEnum
  name: {
    ru: string
    en: string
  }
}

export enum LeadEstateStatusesEnum {
  New = 'new',
  Secondary = 'secondary',
  Any = 'any',
}

export const LeadEstateStatuses: LeadEstateStatusStruct[] = [
  {
    label: LeadEstateStatusesEnum.New,
    name: {
      ru: 'Новая',
      en: 'New',
    },
  },
  {
    label: LeadEstateStatusesEnum.Secondary,
    name: {
      ru: 'Вторичная',
      en: 'Secondary',
    },
  },
  {
    label: LeadEstateStatusesEnum.Any,
    name: {
      ru: 'Неважно',
      en: 'Any',
    },
  },
]

export function findEstateStatuses(): string[] {
  return Object.keys(LeadEstateStatuses)
}

export enum LeadPurposesEnum {
  Living = 'live',
  Rest = 'rest',
  Rent = 'rent',
  Resale = 'resale',
  Residence = 'residence',
  Citizenship = 'citizenship',
}

export interface LeadPurposesStruct {
  label: LeadPurposesEnum
  name: {
    ru: string
    en: string
  }
}

export const LeadPurposes: LeadPurposesStruct[] = [
  {
    label: LeadPurposesEnum.Living,
    name: {
      ru: 'Для проживания',
      en: 'For living',
    },
  },
  {
    label: LeadPurposesEnum.Rest,
    name: {
      ru: 'Для сезонного отдыха',
      en: 'For rest',
    },
  },
  {
    label: LeadPurposesEnum.Rent,
    name: {
      ru: 'Для инвестиций (сдавать)',
      en: 'For rent',
    },
  },
  {
    label: LeadPurposesEnum.Resale,
    name: {
      ru: 'Для инвестиций (перепродать)',
      en: 'For resale',
    },
  },
  {
    label: LeadPurposesEnum.Residence,
    name: {
      ru: 'Для ВНЖ/ПМЖ',
      en: 'For residence',
    },
  },
  {
    label: LeadPurposesEnum.Citizenship,
    name: {
      ru: 'Для гражданства',
      en: 'For citizenship',
    },
  },
]

export enum LeadReadyDealEnum {
  Immediately = 'immediately',
  OneMonth = 'monthOne',
  TwoMonth = 'monthTwo',
  ThreeMonth = 'monthThree',
  WhenFound = 'whenFound',
  Monitoring = 'monitoring',
}

export interface LeadReadyDealStruct {
  label: LeadReadyDealEnum
  name: {
    ru: string
    en: string
  }
}

export const LeadReadyDeals: LeadReadyDealStruct[] = [
  {
    label: LeadReadyDealEnum.Immediately,
    name: {
      ru: 'Срочно',
      en: 'Immediately',
    },
  },
  {
    label: LeadReadyDealEnum.OneMonth,
    name: {
      ru: 'Через 1 месяц',
      en: 'One month',
    },
  },
  {
    label: LeadReadyDealEnum.TwoMonth,
    name: {
      ru: 'Через 2 месяца',
      en: 'Two month',
    },
  },
  {
    label: LeadReadyDealEnum.ThreeMonth,
    name: {
      ru: 'Через 3 месяца',
      en: 'Three month',
    },
  },
  {
    label: LeadReadyDealEnum.WhenFound,
    name: {
      ru: 'Сразу как найду',
      en: 'When dound',
    },
  },
  {
    label: LeadReadyDealEnum.Monitoring,
    name: {
      ru: 'Пока просто изучаю',
      en: 'Monitoring',
    },
  },
]

export enum LeadPurchasesEnum {
  Any = 'any',
  Installment = 'installment',
  Mortgage = 'mortgage',
  Personal = 'personal',
}

export interface LeadPurchasesStruct {
  label: LeadPurchasesEnum
  name: {
    ru: string
    en: string
  }
}

export const LeadPurchases: LeadPurchasesStruct[] = [
  {
    label: LeadPurchasesEnum.Any,
    name: {
      ru: 'Неважно',
      en: 'Any',
    },
  },
  {
    label: LeadPurchasesEnum.Installment,
    name: {
      ru: 'В рассрочку',
      en: 'Installment',
    },
  },
  {
    label: LeadPurchasesEnum.Mortgage,
    name: {
      ru: 'В ипотеку',
      en: 'Mortgage',
    },
  },
  {
    label: LeadPurchasesEnum.Personal,
    name: {
      ru: 'Личные средства',
      en: 'Personal',
    },
  },
]

export enum LeadPurchasesFormatEnum {
  Cash = 'cash',
  NonCash = 'non_cash',
  Crypto = 'crypto',
}

export interface LeadPurchasesFormatStruct {
  label: LeadPurchasesFormatEnum
  name: {
    ru: string
    en: string
  }
}

export const LeadPurchasesFormats: LeadPurchasesFormatStruct[] = [
  {
    label: LeadPurchasesFormatEnum.Cash,
    name: {
      ru: 'Наличный',
      en: 'Cache',
    },
  },
  {
    label: LeadPurchasesFormatEnum.NonCash,
    name: {
      ru: 'Безналичный',
      en: 'Non Cache',
    },
  },
  {
    label: LeadPurchasesFormatEnum.Crypto,
    name: {
      ru: 'Криптовалютой',
      en: 'Crypto',
    },
  },
]

export enum LeadPeriodEnum {
  Night = 'night',
  Month = 'month',
}

export interface LeadPeriodsStruct extends LocalisationStruct {
  label: LeadPeriodEnum
}

export const LeadPeriods: LeadPeriodsStruct[] = [
  {
    label: LeadPeriodEnum.Night,
    name: {
      ru: 'За ночь',
      en: 'Night',
    },
  },
  {
    label: LeadPeriodEnum.Month,
    name: {
      ru: 'За месяц',
      en: 'Month',
    },
  },
]

export { LeadEstateTypes }

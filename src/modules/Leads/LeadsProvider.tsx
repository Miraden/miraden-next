import {
  ApiRequest,
  ApiRequestMethods,
} from '@/infrastructure/Network/Http/ApiRequest'

const leadsSampleAll = {
  payload: [
    {
      id: 1,
      createdAt: '2023-04-07 18:34:04',
      locationDistance: 10,
      format: 'buy',
      status: 'secondary',
      deadlineAt: '2023-04-07 20:10:45',
      areas: {
        total: {
          value: 10,
          unit: 'м²',
        },
        living: {
          value: 1,
          unit: 'м²',
        },
      },
      rooms: {
        total: 3,
        beds: 2,
        bathroom: 1,
      },
      purpose: 'rent',
      readyDeal: 'monthOne',
      rentPeriod: '2023-04-07 20:10:45',
      purchaseType: 'any',
      wishes: {
        title: 'title',
        text: 'some description',
      },
      paidOptions: {
        accessAny: false,
        pin: false,
        autoTop: false,
      },
      isHidden: false,
      tags: ['buy', 'commercial/apartments', 'secondary', 'rent'],
      type: {
        commercial: 'apartments',
      },
      city: {
        id: 3,
        name: 'Ларнака',
        country: 'Кипр',
      },
      budget: {
        startFrom: 10,
        endAt: 20,
        currency: {
          id: 3,
          code: 'RUB',
          symbol: '₽',
        },
      },
    },
    {
      id: 1,
      createdAt: '2023-04-07 18:34:04',
      locationDistance: 10,
      format: 'buy',
      status: 'secondary',
      deadlineAt: '2023-04-07 20:10:45',
      areas: {
        total: {
          value: 10,
          unit: 'м²',
        },
        living: {
          value: 1,
          unit: 'м²',
        },
      },
      rooms: {
        total: 3,
        beds: 2,
        bathroom: 1,
      },
      purpose: 'rent',
      readyDeal: 'monthOne',
      rentPeriod: '2023-04-07 20:10:45',
      purchaseType: 'any',
      wishes: {
        title: 'title',
        text: 'some description',
      },
      paidOptions: {
        accessAny: false,
        pin: false,
        autoTop: false,
      },
      isHidden: false,
      tags: ['buy', 'commercial/apartments', 'secondary', 'rent'],
      type: {
        commercial: 'apartments',
      },
      city: {
        id: 3,
        name: 'Ларнака',
        country: 'Кипр',
      },
      budget: {
        startFrom: 10,
        endAt: 20,
        currency: {
          id: 3,
          code: 'RUB',
          symbol: '₽',
        },
      },
    },
    {
      id: 1,
      createdAt: '2023-04-07 18:34:04',
      locationDistance: 10,
      format: 'buy',
      status: 'secondary',
      deadlineAt: '2023-04-07 20:10:45',
      areas: {
        total: {
          value: 10,
          unit: 'м²',
        },
        living: {
          value: 1,
          unit: 'м²',
        },
      },
      rooms: {
        total: 3,
        beds: 2,
        bathroom: 1,
      },
      purpose: 'rent',
      readyDeal: 'monthOne',
      rentPeriod: '2023-04-07 20:10:45',
      purchaseType: 'any',
      wishes: {
        title: 'title',
        text: 'some description',
      },
      paidOptions: {
        accessAny: false,
        pin: false,
        autoTop: false,
      },
      isHidden: false,
      tags: ['buy', 'commercial/apartments', 'secondary', 'rent'],
      type: {
        commercial: 'apartments',
      },
      city: {
        id: 3,
        name: 'Ларнака',
        country: 'Кипр',
      },
      budget: {
        startFrom: 10,
        endAt: 20,
        currency: {
          id: 3,
          code: 'RUB',
          symbol: '₽',
        },
      },
    },
  ],
  metadata: {
    pages: {
      total: 1,
      current: 1,
      items: 3,
    },
  },
}

const leadsSampleSimilar = [
  {
    title: 'Куплю 3-х комнатную квартиру на Кипре для инвестиций и ВНЖ',
    location: 'Кипр / Лимассол / Все районы',
    id: '1445',
    price: '158 000 – 230 000',
    year: '2022',
    square: '294 м²',
    rooms: 10,
    sleeps: 6,
    baths: 2,
    yieldCount: 8,
    firstInstallment: '12000 €',
    firstInstallmentPercent: '20%',
    singleCost: '120 €',
    deal: 'Покупка',
    type: 'Жилая | Квартира / апартаменты',
    condition: 'Новая',
    purpose: 'Для инвестиций (сдавать в аренду)',
    isPublished: true,
    isTrue: true,
    publishedAt: 'Создана 12 января',
    requestsCount: 5,
    watched: 264,
    list: 1268,
  },
]

const leadsSampleMyRequests = [
  {
    title: 'Куплю 3-х комнатную квартиру на Кипре для инвестиций и ВНЖ',
    location: 'Кипр / Лимассол / Все районы',
    id: '1445',
    price: '158 000 – 230 000',
    year: '2022',
    square: '294 м²',
    rooms: 10,
    sleeps: 6,
    baths: 2,
    yieldCount: 8,
    firstInstallment: '12000 €',
    firstInstallmentPercent: '20%',
    singleCost: '120 €',
    deal: 'Покупка',
    type: 'Жилая | Квартира / апартаменты',
    condition: 'Новая',
    purpose: 'Для инвестиций (сдавать в аренду)',
    isPublished: true,
    isTrue: true,
    publishedAt: 'Создана 12 января',
    watched: 264,
    list: 1268,
    messagesCount: 10,
  },
]

const leadsSampleAimExecutant = [
  {
    title: 'Куплю 3-х комнатную квартиру на Кипре для инвестиций и ВНЖ',
    location: 'Кипр / Лимассол / Все районы',
    id: '1445',
    price: '158 000 – 230 000',
    year: '2022',
    square: '294 м²',
    rooms: 10,
    sleeps: 6,
    baths: 2,
    yieldCount: 8,
    firstInstallment: '12000 €',
    firstInstallmentPercent: '20%',
    singleCost: '120 €',
    deal: 'Покупка',
    type: 'Жилая | Квартира / апартаменты',
    condition: 'Новая',
    purpose: 'Для инвестиций (сдавать в аренду)',
    isPublished: true,
    isTrue: false,
    publishedAt: 'Создана 12 января',
    watched: 264,
    list: 1268,
  },
  {
    title: 'Куплю 3-х комнатную квартиру на Кипре для инвестиций и ВНЖ',
    location: 'Кипр / Лимассол / Все районы',
    id: '1445',
    price: '158 000 – 230 000',
    year: '2022',
    square: '294 м²',
    rooms: 10,
    sleeps: 6,
    baths: 2,
    yieldCount: 8,
    firstInstallment: '12000 €',
    firstInstallmentPercent: '20%',
    singleCost: '120 €',
    deal: 'Покупка',
    type: 'Жилая | Квартира / апартаменты',
    condition: 'Новая',
    purpose: 'Для инвестиций (сдавать в аренду)',
    isPublished: true,
    isTrue: true,
    publishedAt: 'Создана 12 января',
    requestsCount: 5,
    watched: 264,
    list: 1268,
  },
]

const leadsSampleFavorites = [
  {
    title: 'Куплю 3-х комнатную квартиру на Кипре для инвестиций и ВНЖ',
    location: 'Кипр / Лимассол / Все районы',
    id: '1445',
    price: '158 000 – 230 000',
    year: '2022',
    square: '294 м²',
    rooms: 10,
    sleeps: 6,
    baths: 2,
    yieldCount: 8,
    firstInstallment: '12000 €',
    firstInstallmentPercent: '20%',
    singleCost: '120 €',
    deal: 'Покупка',
    type: 'Жилая | Квартира / апартаменты',
    condition: 'Новая',
    purpose: 'Для инвестиций (сдавать в аренду)',
    isPublished: true,
    isTrue: true,
    publishedAt: 'Создана 12 января',
    watched: 264,
    list: 1268,
    messagesCount: 10,
  },
]

async function leadsGetAll(): Promise<any> {
  const apiRequest: ApiRequest = new ApiRequest()
  const headers: HeadersInit = {
    'Content-Type': 'application/x-www-form-urlencoded',
    "Authorization": 'Bearer ' + localStorage.getItem('token')
  }

  return apiRequest.fetch({
    method: ApiRequestMethods.GET,
    headers: headers,
    endpoint: "/leads",
  })
}

export {
  leadsSampleAll,
  leadsSampleAimExecutant,
  leadsSampleFavorites,
  leadsSampleMyRequests,
  leadsSampleSimilar,
  leadsGetAll
}

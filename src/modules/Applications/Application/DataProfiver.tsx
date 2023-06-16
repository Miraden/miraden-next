const requestsUsers = [
  {
    name: "Ангелина Синичкина",
    type: "seller",
    isVerified: true,
    isPro: true,
    rating: 4.8,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "HomeSweet",
    isOnline: true,
    unreadMessages: 0,
  },
  {
    name: "Андрей Макеев",
    type: "seller",
    isVerified: true,
    isPro: false,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "Realhome",
    isOnline: false,
    unreadMessages: 1,
  },
  {
    name: "Валентина Антонова",
    type: "object",
    isVerified: true,
    isPro: false,
    rating: 5.0,
    image: "/images/avatar.jpg",
    status: "Риелтор",
    isOnline: false,
    unreadMessages: 0,
  },
  {
    name: "Константин Гриндин",
    type: "seller",
    isVerified: true,
    isPro: true,
    image: "/images/avatar.jpg",
    status: "Собственник",
    isOnline: false,
    unreadMessages: 0,
  },
];

const objects = [
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Северный Кипр",
    id: "1445",
    cashBack: 6,
    yieldCount: 8,
    year: "2022",
    square: "294",
    rooms: 10,
    sleeps: 6,
    baths: 2,
    price: "158 000",
    status: "Собственник",
    name: "Анастасия Петрова",
    image: "/images/avatar.jpg",
    isBooked: false,
    isUnpublished: false,
    image1: "/images/img.jpg",
    image2: "/images/img.jpg",
    image3: "/images/img.jpg",
    firstInstallment: "34 000 $",
    singleCost: "1 200 $",
    firstInstallmentPercent: "30 %",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Северный Кипр",
    id: "1445",
    cashBack: 6,
    yieldCount: 8,
    year: "2022",
    square: "294",
    rooms: 10,
    sleeps: 6,
    baths: 2,
    price: "158 000",
    status: "Собственник",
    name: "Анастасия Петрова",
    image: "/images/avatar.jpg",
    isBooked: true,
    isUnpublished: false,
    image1: "/images/img.jpg",
    image2: "/images/img.jpg",
    image3: "/images/img.jpg",
    firstInstallment: "34 000 $",
    singleCost: "1 200 $",
    firstInstallmentPercent: "30 %",
  },
  {
    title: "3-х комнатная квартира на Кипре для ВНЖ",
    location: "Северный Кипр",
    id: "1445",
    cashBack: 6,
    yieldCount: 8,
    year: "2022",
    square: "294",
    rooms: 10,
    sleeps: 6,
    baths: 2,
    price: "158 000",
    status: "Собственник",
    name: "Анастасия Петрова",
    image: "/images/avatar.jpg",
    isBooked: false,
    isUnpublished: true,
    image1: "/images/img.jpg",
    image2: "/images/img.jpg",
    image3: "/images/img.jpg",
    firstInstallment: "34 000 $",
    singleCost: "1 200 $",
    firstInstallmentPercent: "30 %",
  },
];

const executorsUsers = [
  {
    name: "Ангелина Синичкина",
    type: "seller",
    isVerified: true,
    isPro: true,
    rating: 4.8,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "HomeSweet",
    isOnline: true,
    unreadMessages: 0,
    isPerformer: true,
  },
  {
    name: "Андрей Макеев",
    type: "seller",
    isVerified: true,
    isPro: false,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "Realhome",
    isOnline: false,
    unreadMessages: 0,
    isPerformer: true,
  },
];

const refusalsUsers = [
  {
    name: "Ангелина Синичкина",
    type: "seller",
    isVerified: true,
    isPro: true,
    rating: 4.8,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "HomeSweet",
    isOnline: true,
    unreadMessages: 0,
    isRefusal: true,
  },
  {
    name: "Андрей Макеев",
    type: "seller",
    isVerified: true,
    isPro: false,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "Realhome",
    isOnline: false,
    unreadMessages: 0,
    isRefusal: true,
  },
  {
    name: "Валентина Антонова",
    type: "object",
    isVerified: true,
    isPro: false,
    rating: 5.0,
    image: "/images/avatar.jpg",
    status: "Риелтор",
    isOnline: false,
    unreadMessages: 0,
    isRefusal: true,
  },
  {
    name: "Константин Гриндин",
    type: "seller",
    isVerified: true,
    isPro: true,
    image: "/images/avatar.jpg",
    status: "Собственник",
    isOnline: false,
    unreadMessages: 0,
    isRefusal: true,
  },
];

const recommendUsers = [
  {
    name: "Ангелина Синичкина",
    type: "seller",
    isVerified: true,
    isPro: true,
    rating: 4.8,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "HomeSweet",
    isOnline: true,
    unreadMessages: 0,
    isRefusal: true,
    isRecommend: true,
  },
  {
    name: "Андрей Макеев",
    type: "seller",
    isVerified: true,
    isPro: false,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "Realhome",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Валентина Антонова",
    type: "object",
    isVerified: true,
    isPro: false,
    rating: 5.0,
    image: "/images/avatar.jpg",
    status: "Риелтор",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Константин Гриндин",
    type: "seller",
    isVerified: true,
    isPro: true,
    image: "/images/avatar.jpg",
    status: "Собственник",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Ангелина Синичкина",
    type: "seller",
    isVerified: true,
    isPro: true,
    rating: 4.8,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "HomeSweet",
    isOnline: true,
    unreadMessages: 0,
    isRefusal: true,
    isRecommend: true,
  },
  {
    name: "Андрей Макеев",
    type: "seller",
    isVerified: true,
    isPro: false,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "Realhome",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Валентина Антонова",
    type: "object",
    isVerified: true,
    isPro: false,
    rating: 5.0,
    image: "/images/avatar.jpg",
    status: "Риелтор",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Константин Гриндин",
    type: "seller",
    isVerified: true,
    isPro: true,
    image: "/images/avatar.jpg",
    status: "Собственник",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Ангелина Синичкина",
    type: "seller",
    isVerified: true,
    isPro: true,
    rating: 4.8,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "HomeSweet",
    isOnline: true,
    unreadMessages: 0,
    isRefusal: true,
    isRecommend: true,
  },
  {
    name: "Андрей Макеев",
    type: "seller",
    isVerified: true,
    isPro: false,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "Realhome",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Валентина Антонова",
    type: "object",
    isVerified: true,
    isPro: false,
    rating: 5.0,
    image: "/images/avatar.jpg",
    status: "Риелтор",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Константин Гриндин",
    type: "seller",
    isVerified: true,
    isPro: true,
    image: "/images/avatar.jpg",
    status: "Собственник",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Ангелина Синичкина",
    type: "seller",
    isVerified: true,
    isPro: true,
    rating: 4.8,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "HomeSweet",
    isOnline: true,
    unreadMessages: 0,
    isRefusal: true,
    isRecommend: true,
  },
  {
    name: "Андрей Макеев",
    type: "seller",
    isVerified: true,
    isPro: false,
    image: "/images/avatar.jpg",
    status: "Агентство недвижимости",
    agencyName: "Realhome",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Валентина Антонова",
    type: "object",
    isVerified: true,
    isPro: false,
    rating: 5.0,
    image: "/images/avatar.jpg",
    status: "Риелтор",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
  {
    name: "Константин Гриндин",
    type: "seller",
    isVerified: true,
    isPro: true,
    image: "/images/avatar.jpg",
    status: "Собственник",
    isOnline: false,
    unreadMessages: 0,
    isRecommend: true,
    isRefusal: true,
  },
];

export {requestsUsers, objects, executorsUsers, refusalsUsers, recommendUsers}

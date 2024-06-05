export const TYPES_TABS = [
  {
    type: 'AllQuests',
    name: 'Все квесты'
  },
  {
    type: 'adventures',
    name: 'Приключения'
  },
  {
    type: 'horror',
    name: 'Ужасы'
  },
  {
    type: 'mystic',
    name: 'Мистика'
  },
  {
    type: 'detective',
    name: 'Детектив'
  },
  {
    type: 'sci-fi',
    name: 'Sci-fi'
  },
]
export const DEFAULT_TYPE = TYPES_TABS[0];

export const getMenuItems = () => [
  {
    path: '/',
    name: 'Квесты'
  },
  {
    path: '#',
    name: 'Новичкам'
  },
  {
    path: '#',
    name: 'Отзывы'
  },
  {
    path: '#',
    name: 'Акции'
  },
  {
    path: '/contacts/',
    name: 'Контакты'
  },
]
  
export const StoreSlice = {
  QUESTS: 'QUESTS',
  DATA : 'DATA',
}

export const APIRoute = {
  QUESTS: '/quests',
  ORDERS: '/orders',
};

export const TYPES_TABS = [
    {
        type: 'AllQuests',
        name: 'Все квесты'
    },
    {
        type: 'Adventures',
        name: 'Приключения'
    },
    {
        type: 'Horrors',
        name: 'Ужасы'
    },
    {
        type: 'Mystic',
        name: 'Мистика'
    },
    {
        type: 'Detective',
        name: 'Детективы'
    },
    {
        type: 'Scifi',
        name: 'scifi'
    },
]

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
    QUESTS : 'QUESTS',
    DATA : 'DATA',
}

export const APIRoute = {
    QUESTS: '/quests',
    ORDERS: '/orders',
  };

export const DEFAULT_TYPE = TYPES_TABS[0];
import Screen from './Screens';

export const getIconName = (route: string): string => {
  switch (route) {
    case Screen.Home:
      return 'home';
    case Screen.Buy:
      return 'storefront';
    case Screen.Transactions:
      return 'payments';
    case Screen.Profile:
      return 'person';
    default:
      return 'home';
  }
};

import Screen from './Screens';

export type RootStackParamList = {
  [Screen.Main]: undefined;
  [Screen.Notification]: undefined;
  [Screen.TransactionDetails]: {txnId: string};
  [Screen.Home]: undefined;
  [Screen.Buy]: undefined;
  [Screen.Scanner]: undefined;
  [Screen.Transactions]: any;
  [Screen.Profile]: undefined;
};

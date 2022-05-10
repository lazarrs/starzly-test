export type RootStackParamList = {
  AuthStack: undefined;
  BottomStack: undefined;
};

export type BottomStackParamList = {
  Discover: undefined;
  Stars: undefined;
  Cart: undefined;
  Profile: undefined;
};

export type StackParams = RootStackParamList & BottomStackParamList;

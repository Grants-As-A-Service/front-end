export type ProjectADT = {
    owner: string;
    title: string;
};

export type MainStackScreens = 'Home' | 'Registration' | 'OnBoarding' | "ProjectOnbaord"

export type SwapScreenADT<T> = (screenName: T) => void;

export type StackProps<T> = {
    Component: ({ swapScreen }: { swapScreen: SwapScreenADT<T> }) => JSX.Element;
    name: string;
};

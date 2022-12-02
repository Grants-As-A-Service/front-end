export type ProjectADT = {
    owner: string;
    title: string;
    description: string;
    status: string;
};

export type MainStackScreens = "Home" | "Registration" | "OnBoarding" | "ProjectOnbaord" | "ProjectView";

export type SwapScreenADT<T> = (screenName: T, props?: any) => void;

export type StackProps<T> = {
    Component: (props: { swapScreen: SwapScreenADT<T> } & any) => JSX.Element;
    name: string;
};

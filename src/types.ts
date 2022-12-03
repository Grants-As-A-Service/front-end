export type ImpactTag = {
    name: string;
    strength: number;
    description: string,
}

export type ProjectADT = {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    capex: number;
    annualOpex: number;
    impactTags: ImpactTag[]
    status: string;
};

export type MainStackScreens = "Home" | "Registration" | "OnBoarding" | "ProjectOnboard" | "ProjectView";

export type SwapScreenADT<T> = (screenName: T, props?: any) => void;

export type StackProps<T> = {
    Component: (props: { swapScreen: SwapScreenADT<T> } & any) => JSX.Element;
    name: string;
};

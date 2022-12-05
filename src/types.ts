export type ImpactTag = {
    name: string;
    strength: number;
    description: string,
}

type Project = {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    capex: number;
    annualOpex: number;
    impactTags: ImpactTag[]
    status: string;
};

export interface ProjectADT extends Project {
    [key: string]: string | number | ImpactTag[],
}

type UserADT = {
    name: string,
    email: string,
    phone: string
}

type BusinessADT = {
    name: string,
    phone: string,
    address: string,
    city: string,
    province: string,
    postalCode: string,
    industry: string,
    projects: ProjectADT[]
}

export type AccountInfoADT = {
    user: UserADT,
    business: BusinessADT
}

export type MainStackScreens = "Home" | "Registration" | "OnBoarding" | "ProjectOnboard" | "ProjectView";

export type SwapScreenADT<T> = (screenName: T, props?: any) => void;

export type StackProps<T> = {
    Component: (props: { swapScreen: SwapScreenADT<T> } & any) => JSX.Element;
    name: string;
};

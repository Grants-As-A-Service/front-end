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
    tags: ImpactTag[]
    status: string;
};

export interface ProjectADT extends Project {
    [key: string]: string | number | ImpactTag[],
}

type User = {
    name: string,
    email: string,
    phone: string
}

type Business = {
    name: string,
    phone: string,
    address: string,
    city: string,
    province: string,
    postalCode: string,
    industry: string,
    fte: number,
    pte: number,
    annualRevenue: number,
    yearOfInception: number,
    projects: string[]
}

type AccountInfo = {
    user: UserADT,
    business: BusinessADT
}

export interface UserADT extends User {
    [key: string]: string
}

export interface BusinessADT extends Business {
    [key: string]: string | number | string[],
}

export interface AccountInfoADT extends AccountInfo {
    [key: string]: UserADT | BusinessADT,
}

export type MainStackScreens = "Home" | "Registration" | "OnBoarding" | "ProjectOnboard" | "ProjectView";

export type SwapScreenADT<T> = (screenName: T, props?: any) => void;

export type StackProps<T> = {
    Component: (props: { swapScreen: SwapScreenADT<T> } & any) => JSX.Element;
    name: string;
};

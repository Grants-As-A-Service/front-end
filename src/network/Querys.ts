import { activateBanner } from "../components/items/banner";
import { activateLoader } from "../components/items/loader";
import { AccountInfoADT, ProjectADT } from "../types";
import { RequestBuilder, Requestor } from "./Requestor";
import { connect } from "./ServerHandler";
import Cache from "./Cache";

const manageUiConnection = (args: Requestor): Promise<any> => {
    let promise = connect(args);
    promise.catch((message) => {
        console.log(message)
        activateBanner(JSON.stringify(message), "red");
    });
    activateLoader(promise)
    return promise
};

export const createAccount = (accountInfo: AccountInfoADT) => {
    return manageUiConnection(
        new RequestBuilder()
            .setURL("/account/create")
            .setMethod("POST")
            .setBody(accountInfo)
            .build()
    );
};

export const getAccount = () => {
    return manageUiConnection(
        new RequestBuilder()
            .setURL("/account")
            .setMethod("GET")
            .build()
    );
};

export const getProjects = () => {
    return manageUiConnection(
        new RequestBuilder()
            .setURL('/project/getAll')
            .setMethod('GET')
            .setResponseType('JSON')
            .build()
    )
};


export const onBoardProject = (project: ProjectADT) => {
    console.log(project)
    return manageUiConnection(
        new RequestBuilder()
            .setURL('/project/create')
            .setMethod('POST')
            .setBody(project)
            .build()
    )
}
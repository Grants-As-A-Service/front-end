import { activateBanner } from "../components/items/banner";
import { activateLoader } from "../components/items/loader";
import { Account } from "../providers/AuthProvider";
import { ProjectADT } from "../types";
import { RequestBuilder, Requestor } from "./Requestor";
import { connect } from "./ServerHandler";

const manageUiConnection = (args: Requestor): Promise<any> => {
    let promise = connect(args);
    promise.catch((message) => {
        console.log(message)
        activateBanner(JSON.stringify(message), "red");
    });
    activateLoader(promise)
    return promise
};

export const registerWithServer = (account: Account) => {
    return manageUiConnection(
        new RequestBuilder()
            .setURL("/testRegister")
            .setMethod("POST")
            .setBody(account)
            .build()
    );
};




export const getProjects = () => {
    return new Promise<Array<ProjectADT>>((resolve, reject) => {
        setTimeout(() => {
            resolve([{
                title: "Boats",
                description: "some boat grant",
                owner: "Magnus",
                status: "under review",
            },
            {
                title: "Boats",
                description: "some boat grant",
                owner: "Magnus",
                status: "under review",
            },
            {
                title: "Boats",
                description: "some boat grant",
                owner: "Magnus",
                status: "under review",
            },
            {
                title: "Boats",
                description: "some boat grant",
                owner: "Magnus",
                status: "under review",
            },
            {
                title: "Boats",
                description: "some boat grant",
                owner: "Magnus",
                status: "under review",
            },
            {
                title: "Boats",
                description: "some boat grant",
                owner: "Magnus",
                status: "under review",
            },
            {
                title: "Boats",
                description: "some boat grant",
                owner: "Magnus",
                status: "under review",
            },
        ]);
        }, 500);
    });
};

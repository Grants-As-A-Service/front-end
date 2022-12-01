import { Account } from "../providers/AuthProvider";
import { Requestor } from "./Requestor";
import { connect } from "./ServerHandler";

export const registerWithServer = (account: Account) => {
    return connect(new Requestor("/testRegister", "post", account));
};

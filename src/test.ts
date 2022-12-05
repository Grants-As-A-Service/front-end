import { ProjectADT, ImpactTag } from "./types";
import { onBoardProject } from "./network/Querys";

let project: ProjectADT = {
    name: "MagnusTets",
    description: "test",
    startDate: "2000-20-20",
    endDate: "2000-20-20",
    capex: 1000,
    annualOpex: 2000,
    impactTags: [
        {
            name: "cool",
            strength: 5,
            description: "dope",
        },
    ],
    status: "pending",
};

export default function test() {
    onBoardProject(project).then(() => {
        console.log("success");
    });
}

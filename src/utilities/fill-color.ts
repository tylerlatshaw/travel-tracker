import { stateList } from "@/lib/state-list";

export function getFillColor(abbreviation: string) {
    const status = stateList.find((state) => state.abbreviation === abbreviation)?.status;

    switch (status) {
        case "unvisited":
            return "5d5d5d";
        default:
            return "0069AA";
    }
}
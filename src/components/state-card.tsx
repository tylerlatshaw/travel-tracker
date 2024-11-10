import { StateType } from "@/lib/state-list";

export default function StateCard(selectedState: StateType) {

    return (
        <div>
            <div>
                {selectedState ? selectedState.stateName: "Select something"}
            </div>
        </div>
    );
}
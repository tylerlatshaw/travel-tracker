import { StateType } from "@/lib/state-list";
import { getFillColor } from "@/utilities/fill-color";
import { Anton_SC } from "next/font/google";

const Anton = Anton_SC({
    subsets: ["latin"],
    display: "swap",
    weight: "400"
});

export default function StateCard(selectedState: StateType) {

    if (selectedState.abbreviation === undefined)
        return null;

    let visitStatus = "Visited";

    if (selectedState.status === "unvisited")
        visitStatus = "Not Yet Visited";

    const fillColor = getFillColor(selectedState.abbreviation);

    return (
        <div className="mx-4 my-8">
            <div className="relative">

                <div className="absolute spinner aspect-square rounded-3xl -inset-0 bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-600 via-indigo-600 to-sky-600 opacity-30 blur-3xl"
                ></div>
                <div className="absolute reverse-spinner aspect-square rounded-3xl -inset-0 bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-600 via-indigo-600 to-sky-600 opacity-30 blur-3xl"
                ></div>

                <div className="relative p-6 flex flex-col w-full aspect-square border-2 border-zinc-700 rounded-lg bg-zinc-900 text-slate-300 gap-8">
                    <div className="flex flex-row h-fit w-full items-start gap-4">
                        <div className={"flex z-50 h-16 w-16 aspect-square p-4 rounded-lg shadow text-4xl sm:text-2xl md:text-xl lg:text-2xl xl:text-4xl font-bold items-center justify-center " + "bg-" + fillColor} style={Anton.style}>
                            {selectedState?.abbreviation}
                        </div>
                        <h2 className={"flex self-center h-fit text-3xl sm:text-xl md:text-lg lg:text-xl xl:text-3xl font-semibold " + Anton.className}>
                            {selectedState.stateName}
                        </h2>
                    </div>

                    <div className="status-chip flex items-center gap-3">
                        <div className={"ml-1 h-3 w-3 rounded-full bg-" + fillColor}></div>
                        <div className="text-lg font-semibold">
                            {visitStatus}
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
}
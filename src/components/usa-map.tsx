"use client";

import { StateAbbreviations, USAMap } from "@mirawision/usa-map-react";
import { styled } from "styled-components";
import { stateList, StateType } from "@/lib/state-list";
import { useMemo, useState } from "react";
import { Anton_SC } from "next/font/google";

const Anton = Anton_SC({
    subsets: ["latin"],
    display: "swap",
    weight: "400"
});

type MapSettings = Record<string, {
    fill?: string,
    stroke?: string,
    onClick?: () => void,
}>;

export default function Usa() {

    const [selectedState, setSelectedState] = useState<StateType>();

    function getFillColor(abbreviation: string) {
        const status = stateList.find((state) => state.abbreviation === abbreviation)?.status;

        switch (status) {
            case "unvisited":
                return "#5d5d5d";
            default:
                return "#0069AA";
        }
    }

    const USAMapStyled = styled(USAMap)({
        ".usa-map": {
            "border": "0.0625rem solid var(--surface-border)",
            "borderRadius": "0.5rem",
            "width": "max-content",
            "height": "max-content"
        },
        ".usa-state:hover": {
            "filter": "brightness(80%)"
        }
    });

    const mapSettings = useMemo<MapSettings>(() => {
        const settings: MapSettings = {};

        StateAbbreviations.forEach((state) => {
            settings[state] = {
                fill: getFillColor(state),
                onClick: () => setSelectedState(stateList.find((value) => value.abbreviation === state)),
            };
        });

        return settings;
    }, [setSelectedState]);

    const MapCard = () => <>
        <div className="mx-4 my-8">
            <div className="relative">
                <div className="absolute spinner aspect-square rounded-3xl -inset-0 bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-600 via-indigo-600 to-sky-600 opacity-30 blur-3xl"
                ></div>
                <div className="absolute reverse-spinner aspect-square rounded-3xl -inset-0 bg-[conic-gradient(var(--tw-gradient-stops))] from-blue-600 via-indigo-600 to-sky-600 opacity-30 blur-3xl"
                ></div>
                <div className="relative px-4 py-8 flex w-full aspect-square justify-center border-2 border-zinc-700 rounded-lg bg-zinc-900 text-slate-300">
                    <div className="flex flex-row items-center justify-center">
                        <div className={"flex h-fit p-4 rounded-lg shadow text-5xl font-semibold bg-[#0069AA] aspect-square items-center justify-center " + Anton.className}>
                            {selectedState?.abbreviation}
                        </div>
                        <h2 className={"h-fit text-3xl sm:text-xl md:text-lg lg:text-xl xl:text-3xl font-semibold text-center " + Anton.className}>
                            {selectedState?.stateName}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </>;

    return (<>
        <div className="flex flex-col lg:flex-row w-full h-full">
            <div className="w-full lg:w-3/4">
                <USAMapStyled customStates={mapSettings} />
            </div>
            <div className="w-full lg:w-1/4">
                <MapCard />
            </div>
        </div>
    </>);
}

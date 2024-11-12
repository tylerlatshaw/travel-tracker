"use client";

import { StateAbbreviations, USAMap } from "@mirawision/usa-map-react";
import { styled } from "styled-components";
import { stateList, StateType } from "@/lib/state-list";
import { useMemo, useState } from "react";
import StateCard from "./state-card";
import { getFillColor } from "@/utilities/fill-color";

type MapSettings = Record<string, {
    fill?: string,
    stroke?: string,
    onClick?: () => void,
}>;

export default function Usa() {

    const [selectedState, setSelectedState] = useState<StateType>();

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
                fill: "#" + getFillColor(state),
                onClick: () => setSelectedState(stateList.find((value) => value.abbreviation === state)),
            };
        });

        return settings;
    }, [setSelectedState]);

    return (<>
        <div className="flex flex-col lg:flex-row w-full h-full">
            <div className="w-full lg:w-3/4">
                <USAMapStyled customStates={mapSettings} />
            </div>
            <div className="w-full lg:w-1/4">
                <StateCard {...selectedState!} />
            </div>
        </div>
    </>);
}

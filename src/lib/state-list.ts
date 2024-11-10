export type StateType = {
    abbreviation: string,
    stateName: string,
    status: "visited" | "unvisited" | "airplane" | "driveThrough"
}

export const stateList: StateType[] = [
    {
        "abbreviation": "AL",
        "stateName": "Alabama",
        "status": "unvisited"
    },
    {
        "abbreviation": "AK",
        "stateName": "Alaska",
        "status": "unvisited"
    },
    {
        "abbreviation": "AZ",
        "stateName": "Arizona",
        "status": "unvisited"
    },
    {
        "abbreviation": "AR",
        "stateName": "Arkansas",
        "status": "unvisited"
    },
    {
        "abbreviation": "CA",
        "stateName": "California",
        "status": "airplane"
    },
    {
        "abbreviation": "CO",
        "stateName": "Colorado",
        "status": "visited"
    },
    {
        "abbreviation": "CT",
        "stateName": "Connecticut",
        "status": "visited"
    },
    {
        "abbreviation": "DE",
        "stateName": "Delaware",
        "status": "visited"
    },
    {
        "abbreviation": "DC",
        "stateName": "District of Columbia",
        "status": "visited"
    },
    {
        "abbreviation": "FL",
        "stateName": "Florida",
        "status": "visited"
    },
    {
        "abbreviation": "GA",
        "stateName": "Georgia",
        "status": "driveThrough"
    },
    {
        "abbreviation": "HI",
        "stateName": "Hawaii",
        "status": "unvisited"
    },
    {
        "abbreviation": "ID",
        "stateName": "Idaho",
        "status": "unvisited"
    },
    {
        "abbreviation": "IL",
        "stateName": "Illinois",
        "status": "visited"
    },
    {
        "abbreviation": "IN",
        "stateName": "Indiana",
        "status": "unvisited"
    },
    {
        "abbreviation": "IA",
        "stateName": "Iowa",
        "status": "unvisited"
    },
    {
        "abbreviation": "KS",
        "stateName": "Kansas",
        "status": "unvisited"
    },
    {
        "abbreviation": "KY",
        "stateName": "Kentucky",
        "status": "unvisited"
    },
    {
        "abbreviation": "LA",
        "stateName": "Louisiana",
        "status": "unvisited"
    },
    {
        "abbreviation": "ME",
        "stateName": "Maine",
        "status": "visited"
    },
    {
        "abbreviation": "MD",
        "stateName": "Maryland",
        "status": "visited"
    },
    {
        "abbreviation": "MA",
        "stateName": "Massachusetts",
        "status": "visited"
    },
    {
        "abbreviation": "MI",
        "stateName": "Michigan",
        "status": "airplane"
    },
    {
        "abbreviation": "MN",
        "stateName": "Minnesota",
        "status": "unvisited"
    },
    {
        "abbreviation": "MS",
        "stateName": "Mississippi",
        "status": "unvisited"
    },
    {
        "abbreviation": "MO",
        "stateName": "Missouri",
        "status": "unvisited"
    },
    {
        "abbreviation": "MT",
        "stateName": "Montana",
        "status": "unvisited"
    },
    {
        "abbreviation": "NE",
        "stateName": "Nebraska",
        "status": "visited"
    },
    {
        "abbreviation": "NV",
        "stateName": "Nevada",
        "status": "visited"
    },
    {
        "abbreviation": "NH",
        "stateName": "New Hampshire",
        "status": "visited"
    },
    {
        "abbreviation": "NJ",
        "stateName": "New Jersey",
        "status": "visited"
    },
    {
        "abbreviation": "NM",
        "stateName": "New Mexico",
        "status": "unvisited"
    },
    {
        "abbreviation": "NY",
        "stateName": "New York",
        "status": "visited"
    },
    {
        "abbreviation": "NC",
        "stateName": "North Carolina",
        "status": "driveThrough"
    },
    {
        "abbreviation": "ND",
        "stateName": "North Dakota",
        "status": "unvisited"
    },
    {
        "abbreviation": "OH",
        "stateName": "Ohio",
        "status": "driveThrough"
    },
    {
        "abbreviation": "OK",
        "stateName": "Oklahoma",
        "status": "unvisited"
    },
    {
        "abbreviation": "OR",
        "stateName": "Oregon",
        "status": "unvisited"
    },
    {
        "abbreviation": "PA",
        "stateName": "Pennsylvania",
        "status": "visited"
    },
    {
        "abbreviation": "RI",
        "stateName": "Rhode Island",
        "status": "visited"
    },
    {
        "abbreviation": "SC",
        "stateName": "South Carolina",
        "status": "visited"
    },
    {
        "abbreviation": "SD",
        "stateName": "South Dakota",
        "status": "unvisited"
    },
    {
        "abbreviation": "TN",
        "stateName": "Tennessee",
        "status": "unvisited"
    },
    {
        "abbreviation": "TX",
        "stateName": "Texas",
        "status": "unvisited"
    },
    {
        "abbreviation": "UT",
        "stateName": "Utah",
        "status": "unvisited"
    },
    {
        "abbreviation": "VT",
        "stateName": "Vermont",
        "status": "visited"
    },
    {
        "abbreviation": "VA",
        "stateName": "Virginia",
        "status": "visited"
    },
    {
        "abbreviation": "WA",
        "stateName": "Washington",
        "status": "unvisited"
    },
    {
        "abbreviation": "WV",
        "stateName": "West Virginia",
        "status": "visited"
    },
    {
        "abbreviation": "WI",
        "stateName": "Wisconsin",
        "status": "unvisited"
    },
    {
        "abbreviation": "WY",
        "stateName": "Wyoming",
        "status": "visited"
    }
];
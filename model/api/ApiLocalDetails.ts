interface ApiLocalDetails {
    __component: string;
    roomsNumber: number;
    buildYear: number;
    buildingType: {
        name: string;
    };
    market: {
        name: string;
    }
}

export default ApiLocalDetails;
import {Advertising} from "./advertising.types.ts";

export const getAdvertisings: () => Advertising[] = () => [{
    advertisingId: '1',
    title: 'ad 1',
    description: "this is a short description",
    category: "Relationship",
    tags: ["Love", "Enchant", "Magic"]
},
    {
        advertisingId: '2',
        title: 'ad 2',
        description: "this is a short description",
        category: "Relationship",
        tags: ["Love", "Enchant", "Magic"]
    }]
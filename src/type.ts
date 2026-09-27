export interface CountryType {
    name?: {
        common?: string;
        official?: string;
    };
    ccn3?: {
        ccn3?: string;
    };
    currencies?: {
        currencies?: {
            [key: string]: {
                name?: string;
                symbol?: string;
            };
        };
    };
    capital?: {
        capital?: string[];
    };
    region?: {
        region?: string;
    };
    languages?: {
        languages?: {
            [key: string]: string;
        };
    };
    area?: {
        area?: number;
    };
    cca3?: {
        cca3?: string;
    };
    population?: {
        population?: number;
    };
    continents?: {
        continents?: string[];
    };
    flags?: {
        flags?: {
            png?: string;
            svg?: string;
            alt?: string;
        };
    };
}
import { use, useState } from "react";

import type { CountryType } from "../type";

import Country from "./Country/Country";

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {

    const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);

    const [vistedFlags, setVisitedFlags] = useState<string[]>([]);

    const countries = use(countriesPromise);

    const handleVisitedCountries = (country: CountryType): void => {

        const exists = visitedCountries.find(
            c => c.ccn3.ccn3 === country.ccn3.ccn3
        );

        if (exists) {

            const remainingCountries = visitedCountries.filter(
                c => c.ccn3.ccn3 !== country.ccn3.ccn3
            );

            setVisitedCountries(remainingCountries);
            return;
        }

        const newVisitedCountries = [...visitedCountries, country];

        setVisitedCountries(newVisitedCountries);
    };

    const handleVisitedFlag = (flag: string): void => {

        if (vistedFlags.includes(flag)) {
            alert("Flag already visited");
            return;
        }

        const newVisitedFlags = [...vistedFlags, flag];

        setVisitedFlags(newVisitedFlags);
    };

    return (
        <div>

            <h2>Countries: {countries.length}</h2>

            <h4>Visited Countries: {visitedCountries.length}</h4>

            <h4>Visited Flags: {vistedFlags.length}</h4>

            <div className="visited-country-list">
                <ul>
                    {
                        visitedCountries.map(country =>
                            <li key={country.ccn3.ccn3}>
                                {country.name.common}
                            </li>
                        )
                    }
                </ul>
            </div>

            <div className="visited-flags">
                {
                    vistedFlags.map((flag, index) =>
                        <img
                            key={index}
                            src={flag}
                            alt="Visited Flag"
                        />
                    )
                }
            </div>

            <div className="countries">
                {
                    countries.map(country =>
                        <Country
                            key={country.ccn3.ccn3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                            handleVisitedFlag={handleVisitedFlag}
                        />
                    )
                }
            </div>

        </div>
    );
}
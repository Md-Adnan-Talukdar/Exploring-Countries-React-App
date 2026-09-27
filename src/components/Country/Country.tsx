import { useState } from "react";
import type { CountryType } from "../../type";
import "./Country.css";

export interface CountryProps {
    country: CountryType;
    handleVisitedCountries: (country: CountryType) => void;
    handleVisitedFlag: (flag: string) => void;
}

export default function Country({
    country,
    handleVisitedCountries,
    handleVisitedFlag
}: CountryProps) {
    const [visited, setVisited] = useState<boolean>(false);

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountries(country);
    };

    // Safely extract currencies
    const currenciesObj = country?.currencies?.currencies || {};
    const currencyKeys = Object.keys(currenciesObj);
    const currency = currencyKeys.length > 0 ? currenciesObj[currencyKeys[0]] : null;

    // Safely extract languages
    const languagesObj = country?.languages?.languages || {};
    const languagesList = Object.values(languagesObj);

    // Safely extract capital
    const capitals = country?.capital?.capital || [];

    // Safely extract continents
    const continentsList = country?.continents?.continents || [];

    // Safely extract flag image
    const flagSrc = country?.flags?.flags?.png || "";
    const flagAlt = country?.flags?.flags?.alt || "Country flag";

    return (
        <div className={`country ${visited ? "country-visited" : ""}`}>
            <h2>{country?.name?.common || "N/A"}</h2>
            {flagSrc && <img src={flagSrc} alt={flagAlt} />}

            <div className="country-info">
                <p>
                    <strong>Official Name:</strong> {country?.name?.official || "N/A"}
                </p>
                <p>
                    <strong>Capital:</strong> {capitals.length > 0 ? capitals.join(", ") : "N/A"}
                </p>
                <p>
                    <strong>Region:</strong> {country?.region?.region || "N/A"}
                </p>
                <p>
                    <strong>Continent:</strong> {continentsList.length > 0 ? continentsList.join(", ") : "N/A"}
                </p>
                <p>
                    <strong>Population:</strong> {country?.population?.population ? country.population.population.toLocaleString() : "N/A"}
                </p>
                <p>
                    <strong>Area:</strong> {country?.area?.area ? country.area.area.toLocaleString() : "N/A"} km²
                </p>
                <p>
                    <strong>Country Code:</strong> {country?.cca3?.cca3 || "N/A"}
                </p>
                <p>
                    <strong>Currency:</strong> {currency ? `${currency.name} (${currency.symbol})` : "N/A"}
                </p>
                <p>
                    <strong>Languages:</strong> {languagesList.length > 0 ? languagesList.join(", ") : "N/A"}
                </p>
            </div>

            <button onClick={handleVisited}>
                {visited ? "Visited" : "Mark as Visited"}
            </button>
            <button onClick={() => flagSrc && handleVisitedFlag(flagSrc)}>
                Add Flag as Visited
            </button>
        </div>
    );
}
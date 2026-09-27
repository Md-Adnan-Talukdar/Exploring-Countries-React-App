import { useState } from "react";
import type{ CountryType } from "../../type";
import './Country.css'
export interface CountryProps{
    country : CountryType;
    handleVisitedCountries: (country: CountryType) => void;
    handleVisitedFlag: (flag: string) => void;
}

export default function Country({country, handleVisitedCountries,handleVisitedFlag}:CountryProps) {
  
  const [visited, setVisited] = useState<boolean>(false);

  const handleVisited= ()=>{
     if(visited)
     {
        setVisited(false);
     }
     else setVisited(true);

     handleVisitedCountries(country);

  }


     return (
        <div className={`country ${visited? 'country-visited': '...'}`}>
   
        <h2>{country.name.common}</h2>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
         <button onClick={handleVisited}>{visited? 'Visited': 'Mark as Visited'}</button>
        <button
        onClick={() => handleVisitedFlag(country.flags.flags.png)}
        >
          Add Flag as Visited
        </button>
        </div>
     )

}


import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries';
import type { CountryType } from './type';

// step 1: Create a promise to load data from API

const countriesPromise = async():Promise<CountryType[]> =>{
  const res= await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data.countries;

}



function App() {
  

  return (
    <>
     <h1>World on the GO</h1>
     <Suspense fallback={<h1>Loading...</h1>}>
   <Countries countriesPromise={countriesPromise()}></Countries>
     </Suspense>

    </>
  )
}

export default App

export const GET_COUNTRIES = 'GET_COUNTRIES'; // all
export const GET_COUNTRY = 'GET_COUNTRY'; // info o 1 państwie
export const DELETE_COUNTRY = 'DELETE_COUNTRY'; // usuwanie
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY'; // po nazwie
export const SET_CONTINENT = 'SET_CONTINENT'; // państwa kontynentu
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'; // po nazwie

// listowanie państw
export function getCountries() {
    return {
        type: GET_COUNTRIES
    }
}

// usuwanie panstwa (1)
export function deleteCountry(id) {
    return {
        type: DELETE_COUNTRY,
        id
    }
}

// konkretne państwo
export function getCountry(id) {
    return {
        type: GET_COUNTRY,
        id
    }
}

// wyszukiwanie państw
// substring - czyli po wpisaniu "dia" znajdzie
// irlandia i holandia
export function searchCountry(searchText) {
    return {
        type: SEARCH_COUNTRY,
        searchText
    }
}

export function searchCountries(searchText) {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}

// państwa na kontynencie
// każdy obiekt w tablicy zostanie przeszukany po polu continent
export function setContinent(name) {
    return {
        type: SET_CONTINENT,
        name
    }
}
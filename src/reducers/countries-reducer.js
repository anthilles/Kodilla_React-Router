import { GET_COUNTRIES, GET_COUNTRY, SEARCH_COUNTRIES, DELETE_COUNTRY, SET_CONTINENT } from '../actions/Actions';
import countriesData from '../data/countries.json';

// stan aplikacji zawiera pole countries, które opisuje wszystkie dostępne państwa
// po wystartowaniu aplikacji przypisane do niego zostają wszystko z json'a
const initialState = {
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: []
};

const countriesReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
        // po wywołaniu tej metody reducer tworzy kopię obiektu state i do
        // pola countries przypisuje obecną wartość pola
            return Object.assign({}, state, {countries: state.countries})

        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.id == action.id);
            return Object.assign({}, state, {selectedCountry});

        case SEARCH_COUNTRIES:
            const foundCountries = state.countries.filter(country => country.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, {visibleCountries: foundCountries});

        case DELETE_COUNTRY:
            const notDeletedCountries = state.countries.filter(country => country.id != action.id);
            const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id != action.id);
            return Object.assign({}, state, {countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries});

        case SET_CONTINENT:
            const continentCountries = state.countries.filter(country => country.continent === action.name);
            return Object.assign({}, state, {visibleCountries: continentCountries});

        default:
            return state;
    }
}

export default countriesReducer;
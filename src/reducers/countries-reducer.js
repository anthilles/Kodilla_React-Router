import { GET_COUNTRIES } from '../actions/Actions';
import countriesData from '../data/countries.json';

// stan aplikacji zawiera pole countries, które opisuje wszystkie dostępne państwa
// po wystartowaniu aplikacji przypisane do niego zostają wszystko z json'a
const initialState = {
    countries: countriesData
};

const countriesReducer = function (state = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
        // po wywołaniu tej metody reducer tworzy kopię obiektu state i do
        // pola countries przypisuje obecną wartość pola
            return Object.assign({}, state, {countries: state.countries})
        default:
            return state;
    }
}

export default countriesReducer;
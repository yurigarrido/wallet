// Esse reducer será responsável por tratar o todas as informações// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SUCCESS_FETCH, SUCCESS_FETCH_EXPENSES } from '../actions/walletActions';

const initialState = {
  currencies: [],
  expenses: [],
};

function wallet(state = initialState, { type, payload, stat }) {
  switch (type) {
  case SUCCESS_FETCH:
    return {
      ...state, currencies: { ...payload },
    };
  case SUCCESS_FETCH_EXPENSES:
    return {
      ...state,
      expenses:
      [...state.expenses,
        { ...stat, exchangeRates: [{ ...payload }] }],
    };
  default:
    return state;
  }
}

export default wallet;

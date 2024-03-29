import { useDispatch } from "react-redux";
import { AMOUNT_CHANGED } from "../store/rates";

export function AmountField({ amount }) {
  const dispatch = useDispatch();
  function onChange(e) {
    dispatch({ type: AMOUNT_CHANGED, payload: e.target.value });
  }
  return (
    <form className="ExchangeRate-form">
      <input
        aria-label="Amount in base currency"
        type="text"
        value={amount}
        onChange={onChange}
      />
    </form>
  );
}



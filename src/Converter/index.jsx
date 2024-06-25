import { useDispatch, useSelector } from "react-redux";
import { setUSD, setEUR } from "../redux/currencySlice";
import "./Converter.css";

const Converter = () => {
  const dispatch = useDispatch();
  const { usd, eur } = useSelector((state) => state.currency);

  const handleUSDChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      dispatch(setUSD(value));
    }
  };

  const handleEURChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && value >= 0) {
      dispatch(setEUR(value));
    }
  };

  return (
    <div className="converter">
      <div className="input-container">
        <label className="label" htmlFor="usd">
          USD
        </label>
        <input
          className="input"
          type="number"
          id="usd"
          name="usd"
          value={usd}
          onChange={handleUSDChange}
        />
      </div>

      <div className="input-container">
        <label className="label" htmlFor="eur">
          EUR
        </label>
        <input
          className="input"
          type="number"
          id="eur"
          name="eur"
          value={eur}
          onChange={handleEURChange}
        />
      </div>
    </div>
  );
};

export default Converter;

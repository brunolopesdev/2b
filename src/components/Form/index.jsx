import "./index.scss";
import { useContext, useState } from "react";
import DataContext from "../../context/DataContext";

export const Form = () => {
  const { data, submitLocation } = useContext(DataContext);
  const [searchValue, setSearchValue] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!searchValue || searchValue === "") {
      return;
    }

    submitLocation(searchValue);
  };

  return (
    <form className="input_wrapper" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder={data ? "Pesquise novamente..." : "Digite uma cidade..."}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit" onClick={onSubmit}>
        Buscar
      </button>
    </form>
  );
};

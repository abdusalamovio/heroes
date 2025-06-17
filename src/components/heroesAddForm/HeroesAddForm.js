import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { heroCreated } from "../heroesList/heroesSlice";
import { selectAll } from "../heroesFilters/filtersSlice";
import { v4 as uuidv4 } from "uuid";

// import store from "../../store";

const HeroesAddForm = () => {
  const [heroName, setHeroName] = useState("");
  const [heroDescr, setHeroDescr] = useState("");
  const [heroElement, setHeroElement] = useState("");

  // const filters = selectAll(store.getState());
  const filters = useSelector(selectAll);
  const { filtersLoadingStatus } = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const { request } = useHttp();

  const onSubmit = (e) => {
    e.preventDefault();
    const newHero = {
      id: uuidv4(),
      name: heroName,
      description: heroDescr,
      element: heroElement,
    };
    request("http://localhost:3001/heroes", "POST", JSON.stringify(newHero))
      .then(dispatch(heroCreated(newHero)))
      .catch((err) => console.log(err));
    setHeroName("");
    setHeroDescr("");
    setHeroElement("");
  };

  const renderFilters = (filters, status) => {
    if (status === "loading") {
      return <option>Загрузка элементов</option>;
    } else if (status === "error") {
      return <option>Ошибка загрузки</option>;
    }

    if (filters && filters.length > 0) {
      return filters.map(({ name, label }) => {
        // eslint-disable-next-line
        if (name === "all") return;
        return (
          <option key={name} value={name}>
            {label}
          </option>
        );
      });
    }
  };

  return (
    <form className="border p-4 shadow-lg rounded" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          onChange={(e) => setHeroName(e.target.value)}
          value={heroName}
          id="name"
          className="form-control"
          name="name"
          placeholder="Как меня зовут?"
          type="text"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Описание
        </label>
        <textarea
          onChange={(e) => setHeroDescr(e.target.value)}
          value={heroDescr}
          id="text"
          className="form-control"
          style={{ height: "130px" }}
          name="text"
          placeholder="Что я умею?"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select
          onChange={(e) => setHeroElement(e.target.value)}
          value={heroElement}
          id="element"
          className="form-select"
          name="element"
          required
        >
          <option value="">Я владею элементом...</option>
          {renderFilters(filters, filtersLoadingStatus)}
        </select>
      </div>

      <button className="btn btn-primary" type="submit">
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;

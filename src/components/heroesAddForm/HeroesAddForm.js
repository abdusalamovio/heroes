import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHttp } from "../../hooks/http.hook";
import { heroCreated } from "../../actions";
import { v4 as uuid } from "uuid";

const HeroesAddForm = () => {
  const [heroName, setHeroName] = useState("");
  const [heroDescr, setHeroDescr] = useState("");
  // const [heroElement, setHeroElement] = useState("");
  const dispatch = useDispatch();
  const { request } = useHttp();

  const onSubmit = (e) => {
    e.preventDefault();

    const newHero = {
      id: uuid(),
      name: heroName,
      description: heroDescr,
      // element: heroElement,
    };

    request("http://localhost:3001/heroes", "POST", JSON.stringify(newHero))
      .catch((error) => console.log(error))
      .then(dispatch(heroCreated(newHero)));

    setHeroName("");
    setHeroDescr("");
  };

  return (
    <form onSubmit={onSubmit} className="border p-4 shadow-lg rounded">
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
          required
          placeholder="Что я умею?"
        />
      </div>

      {/* <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select
          required
          className="form-select"
          id="element"
          name="element"
          value={heroElement}
          onChange={(e) => setHeroElement(e.target.value)}
        >
          <option value="">Я владею элементом...</option>
        </select>
      </div> */}

      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;

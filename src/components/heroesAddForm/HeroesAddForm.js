const HeroesAddForm = () => {
  return (
    <form className="border p-4 shadow-lg rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
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
        <select id="element" className="form-select" name="element" required>
          <option>Я владею элементом...</option>
          <option value="fire">Огонь</option>
          <option value="water">Вода</option>
          <option value="wind">Ветер</option>
          <option value="earth">Земля</option>
        </select>
      </div>

      <button className="btn btn-primary" type="submit">
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;

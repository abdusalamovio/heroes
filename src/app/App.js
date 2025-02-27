import "./App.scss";

import HeroesList from "../components/heroesList/HeroesList";
import HeroesAddForm from "../components/heroesAddForm/HeroesAddForm";
import HeroesFilters from "../components/heroesFilters/HeroesFilters";

const App = () => {
  return (
    <main className="app">
      <div className="content">
        <HeroesList />
        <div className="content__interactive">
          <HeroesAddForm />
          <HeroesFilters />
        </div>
      </div>
    </main>
  );
};

export default App;

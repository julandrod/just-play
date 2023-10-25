import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGames, selectGamesState } from "../features/gamesSlice";
import { selecFiltersState } from "../features/filtersSlice";
import { Filters, GamesList, Hero } from "../components";

const Games = () => {
  const dispatch = useDispatch();
  const { games, gamesCount } = useSelector(selectGamesState);
  const { query, status, date, time} = useSelector(selecFiltersState);

  useEffect(() => {
    dispatch(getAllGames({ filter: query, status, date, time }));
  }, [dispatch, query, date, status, time]);

  return (
    <main>
      <Hero
        title="Discover a vast selection of soccer games"
        description="Explore our extensive catalog of soccer games, where the thrill of the pitch and the passion of the sport come to life."
      />
      <Filters />
      <div className="flex items-center justify-center py-6">
        <h2 className="font-semibold text-xl">{gamesCount} matches listed</h2>
      </div>
      <GamesList games={games} />
    </main>
  );
};

export default Games;

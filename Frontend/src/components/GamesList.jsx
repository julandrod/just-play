import { Link } from "react-router-dom";
import GameCard from "./GameCard";

/**
 * Render a list of GameCard components 
 * @param {Array} games An array of objects with the properties of the games 
 * @returns An Array of GameCard's React component
 * 
 * @example
 * <GamesList games={games} />
 */
const GamesList = ({ games }) => {
  // If no games are found, render a message 
  if (!games || games.length === 0) {
    return (
      <div className="flex items-center justify-center">
        <h2 className="font-semibold text-xl">No games found</h2>
      </div>
    );
  }

  return (
    <>
      <div className="p-8 grid sm::grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
        {games.map((game) => (
          <Link key={game.id} to={`/${game.id}`}>
            <GameCard game={game} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default GamesList;

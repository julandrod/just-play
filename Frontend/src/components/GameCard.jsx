import formatDate from "../helpers/formatDate.js";
import formatTime from "../helpers/formatTime.js";

/**
 * Render a card component with the game info 
 * @param {Object} game Object with game data
 * @returns A card component
 * 
 * @example
 * <GameCard game={game}/>
 */
const GameCard = ({ game }) => {
  const { location, city, date, time, image, teams, status } = game;

  return (
    <div className="flex w-full h-64 md:h-60 md:w-96 border-4 capitalize hover:border-primary-red">
      <div className="flex w-2/5 items-center justify-center">
        <img src={image} alt="" className="h-32 w-auto" />
      </div>
      <div className="flex flex-col pl-2">
        <h1 className="font-extrabold text-2xl mt-2 text-primary-red">
          {city}
        </h1>
        <h1 className="font-extrabold text-xl mt-2">{location}</h1>
        <div className="flex flex-col mt-2 text-xl">
          <h2>{teams[0]?.team}</h2>
          <div className="border-2 border-slate-800"/>
          <h2>{teams[1]?.team}</h2>
        </div>
        <div className="flex text-xl mt-2 px-2 border-2 border-black items-center justify-center">
          <h2 className="mr-4">{formatDate(date)}</h2>
          <h2 className="border-l-2 border-black pl-2">{formatTime(time)}</h2>
        </div>
        <div
          className={`flex items-center justify-center mt-2 font-semibold w-24 rounded-lg ${
            status === "pending"
              ? "bg-orange-400"
              : status === "done"
              ? "bg-green-400"
              : status === "cancel"
              ? "bg-red-400"
              : ""
          }`}
        >
          <h3 className="text-lg ">{status}</h3>
        </div>
      </div>
    </div>
  );
};

export default GameCard;

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleGame, selectGamesState } from "../features/gamesSlice";
import { useEffect } from "react";
import { BsCalendar3, BsClock } from "react-icons/bs";
import Error from "./Error";
import { formatDate, formatTime } from "../helpers";
import { Loading } from "../components";

const DateContainer = ({ icon, dateInfo }) => {
  return (
    <div className="flex p-8 items-center">
      <div className="text-4xl text-primary-red px-6">{icon}</div>
      <h3 className="font-bold text-2xl">{dateInfo}</h3>
    </div>
  );
};

const SingleGame = () => {
  const { gameId } = useParams();
  const dispatch = useDispatch();
  const { singleGame, gamesLoading, errorInfo } = useSelector(selectGamesState);
  const { location, date, time, teams, image, status } = singleGame;

  useEffect(() => {
    console.log("useeffect");
    dispatch(getSingleGame({ gameId }));
  }, [dispatch, gameId]);

  if (errorInfo) {
    return <Error />;
  }

  return (
    <div className="flex justify-center items-center">
      {gamesLoading ? (
        <Loading />
      ) : singleGame ? (
        <div className="flex flex-col w-full capitalize">
          <div className="bg-soccer-field w-full h-[500px] bg-cover z-10 flex items-center justify-center">
            <img className="h-auto w-96" src={image} alt="" />
          </div>
          <div className="flex p-10 items-center justify-center">
            <div className="flex flex-col align-top">
              <h1 className="font-bold text-3xl">Soccer game in {location}</h1>
              <h2 className="font-bold text-2xl py-4">
                Team: {teams[0]?.team}
              </h2>
              <h2 className="font-bold text-2xl">Team: {teams[1]?.team}</h2>
            </div>
            <div className="flex flex-col align-top">
              <DateContainer
                icon={<BsCalendar3 />}
                dateInfo={formatDate(date)}
              />
              <DateContainer icon={<BsClock />} dateInfo={formatTime(time)} />
            </div>
          </div>
          <div className="flex items-center justify-center pb-8 text-2xl font-semibold">
            <h3>
              The game is currently <span>{status}</span>
            </h3>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SingleGame;

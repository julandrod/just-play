import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrorInfo,
  clearStatusCode,
  createGame,
  selectGamesState,
} from "../features/gamesSlice";
import { gameSchema } from "../helpers";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Hero, InputForm } from "../components";

const CreateGame = () => {
  const dispatch = useDispatch();
  const { statusCode, errorInfo } = useSelector(selectGamesState);

  useEffect(() => {
    if (statusCode === 201) {
      Swal.fire({
        icon: "success",
        title: "New Game Created!",
        text: "Now you can see this new game in the main list",
        allowEscapeKey: false,
        allowOutsideClick: false,
      }).then(dispatch(clearStatusCode()));
    }
    if(errorInfo){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorInfo.error,
      }).then(dispatch(clearErrorInfo()));
    }
  }, [statusCode, dispatch, errorInfo]);

  const onSubmit = (values, actions) => {
    const { location, city, date, time, team1, team2 } = values;
    const teams = [{ team: team1 }, { team: team2 }];
    dispatch(createGame({ location, city, date, time, teams }));

    actions.resetForm();
  };
  return (
    <>
      <Hero
        title="Create your own game match"
        description=" It's time to be the mastermind behind the plays and let your football imagination run wild!"
      />
      <section className="flex bg-soccer-field items-center justify-center">
        <div className="w-full lg:w-6/12 px-4 m-8 md:px-0 bg-white">
          <div className="md:p-12 md:mx-6">
            <Formik
              initialValues={{
                location: "",
                city: "",
                date: "",
                time: "",
                team1: "",
                team2: "",
              }}
              validationSchema={gameSchema}
              onSubmit={onSubmit}
            >
              {(props) => (
                <Form>
                  <h3 className="mb-5 text-2xl font-bold text-center">
                    Create a new game
                  </h3>

                  <InputForm
                    labelText="Location:"
                    type="text"
                    placeholder="Location to play ..."
                    name="location"
                    required
                  />
                  <InputForm
                    labelText="City:"
                    type="text"
                    placeholder="City to play ..."
                    name="city"
                    required
                  />
                  <InputForm
                    labelText="Date:"
                    type="date"
                    placeholder="Date..."
                    name="date"
                    required
                  />
                  <InputForm
                    labelText="Time:"
                    type="time"
                    placeholder="Time to play ..."
                    name="time"
                    required
                  />
                  <InputForm
                    labelText="Team 1:"
                    type="text"
                    placeholder="Team 1 name..."
                    name="team1"
                    required
                  />
                  <InputForm
                    labelText="Team 2:"
                    type="text"
                    placeholder="Team 2 name..."
                    name="team2"
                    required
                  />
                  <div className="text-center pt-1 my-4 pb-1">
                    <button
                      type="submit"
                      className="mt-2 text-white bg-primary-red hover:bg-secondary-red focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                      disabled={!props.isValid}
                    >
                      Create a new game
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateGame;

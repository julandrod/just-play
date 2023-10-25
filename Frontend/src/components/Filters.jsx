import { useDispatch, useSelector } from "react-redux";
import {
  clearFilters,
  selecFiltersState,
  updateFilters,
} from "../features/filtersSlice";
import FilterItem from "./FilterItem";

/**
 * Render a list of input's to filter the Games in the database
 * @returns React component.
 */
const Filters = () => {
  // Destructure the filters from the store
  const { query, date, time, status } = useSelector(selecFiltersState);
  const dispatch = useDispatch();

  const handleFilters = (e) => {
    dispatch(updateFilters({ name: e.target.name, value: e.target.value }));
  };

  return (
    <section className="flex flex-wrap justify-center items-center bg-zinc-600">
      <FilterItem
        placeholder="Location, city or team ..."
        type="text"
        name="query"
        value={query}
        onChange={handleFilters}
      />
      {/* date */}
      <FilterItem
        type="date"
        name="date"
        value={date}
        onChange={handleFilters}
      />
      {/* time */}
      <FilterItem
        type="time"
        name="time"
        value={time}
        onChange={handleFilters}
      />
      {/* status */}
      <div className="my-4 px-2">
        <select
          name="status"
          onChange={handleFilters}
          className="block w-80 md:w-52 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          defaultValue={status}
        >
          <option disabled value="">
            -- Select an status --{" "}
          </option>
          <option value="pending">pending</option>
          <option value="done">done</option>
          <option value="cancel">cancel</option>
        </select>
      </div>
      <div className="my-4 px-2">
        <button
          className="block w-80 md:w-52 py-1.5 text-white bg-primary-red hover:bg-secondary-red focus:outline-none font-medium rounded-lg text-sm px-5 text-center mr-2"
          onClick={() => dispatch(clearFilters())}
        >
          Clear Filters
        </button>
      </div>
    </section>
  );
};

export default Filters;

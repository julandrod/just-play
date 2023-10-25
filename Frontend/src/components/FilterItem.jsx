/**
 * 
 * @param {String} placeholder Text of the placeholder 
 * @param {String} type Type of the input 
 * @param {String} name Name of the input 
 * @param {String} value Value that come's from the store 
 * @param {Function} onChange Function to handle the change of values in the input
 * @returns React component
 */
const FilterItem = ({ placeholder, type, name, value, onChange }) => {
  return (
    <div className="my-4 px-2">
      <input className="block w-52 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FilterItem;

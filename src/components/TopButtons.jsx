import skysage from '../assets/icons8-storm-96.png'

const TopButtons = ({setQuery}) => {
  const cities = [
    {
      id: 1,
      name: "Ahmedabad",
    },
    {
      id: 2,
      name: "Delhi",
    },
    {
      id: 3,
      name: "Kolkata",
    },
    {
      id: 4,
      name: "Tokyo",
    },
  ];

  return (
    <div className="flex items-center justify-around md:my-6 my-2">

      <img src={skysage} alt="SkySage" className='w-12' />
      {cities.map((city) => (
        <button
          key={city.id}
          className="md:text-lg text-xs font-medium hover:bg-gray-700/50 px-1 md:px-3 py-2 rounded-md transition ease-in"
          onClick={() => setQuery({ q: city.name })}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;

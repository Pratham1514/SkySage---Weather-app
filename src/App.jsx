import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const App = () => {
  const [query, setQuery] = useState({ q: "mumbai" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    const cityName = query.q ? query.q : "current location";
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`);

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched weather data for ${data.name}, ${data.country}`);
      setWeather(data);
    });
    console.log(data);
  };

  useEffect(() => {
    getWeather();
  }, [query, units]);

  const formatBackground = () => {
    if (!weather) return "from-cyan-600 to-blue-700";
    const threshold = units === "metric" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-600 to-blue-700";
    return "from-yellow-600 to-orange-700";
  };

  return (
    <>
      <div
        className={`mx-auto xl:max-w-screen-lg md:max-w-screen-sm sm:max-w-screen-lg max-w-screen-lg mt-0 md:py-5 py-2 md:px-32 sm:px-5 px-2 bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()} opacity-60`}
      >
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} setUnits={setUnits} />

        {weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TempAndDetails weather={weather} units={units} />
            <Forecast title="3 hour step forecast" data={weather.hourly} />
            <Forecast title="daily forecast" data={weather.daily} />
          </>
        )}

        <ToastContainer
          autoClose={1500}
          hideProgressBar={true}
          theme="colored"
        />
      </div>
    </>
  );
};

export default App;

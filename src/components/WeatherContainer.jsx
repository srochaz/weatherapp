import { useState } from "react";
import WeatherStat from "./WeatherStat";

const Weathercontainer = ({ weather }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const changeUnitTemp = (temp) => {
    if (isCelsius) {
      const celsiusTemp = (temp - 273.15).toFixed(1);
      return `${celsiusTemp}°C`;
    } else {
      const fahrenheitTemp = (((temp - 273.15) * 9) / 5 + 32).toFixed(1);
      return `${fahrenheitTemp}°F`;
    }
  };

  const handelChangeUnit = () => {
    setIsCelsius(!isCelsius);
  };

  return (
    <section className="text-center gap-5 grid">
      <h3 className="text-xl font-semibold">
        {weather.name}, {weather.sys.country}
      </h3>

      <div className="grid gap-5 sm:grid-cols-[1fr_auto] ">
        {/* seccion superior */}
        <article className="bg-slate-500/50 rounded-2xl grid grid-cols-2 items-center p-3 ">
          <h4 className="col-span-2 text-lg capitalize">
            {weather.weather[0].description}
          </h4>
          <span className="text-5xl">{changeUnitTemp(weather.main.temp)}</span>
          <picture>
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt=""
            />
          </picture>
        </article>

        {/* seccion inferior */}
        <article className="grid grid-cols-3 justify-items-center bg-slate-500/50 rounded-2xl p-2 py-3 sm:grid-cols-1 place-content-between">
          <WeatherStat icon="/wind.png" unit="m/s" value={weather.wind.speed} />
          <WeatherStat
            icon="/humidity.png"
            unit="%"
            value={weather.main.humidity}
          />
          <WeatherStat
            icon="/pressure.png"
            unit="hPa"
            value={weather.main.pressure}
          />
        </article>
      </div>
      <div className="object-center">
      <button className="button"  onClick={handelChangeUnit}>°C / °F</button>
      </div>
    </section>
  );
};

export default Weathercontainer;

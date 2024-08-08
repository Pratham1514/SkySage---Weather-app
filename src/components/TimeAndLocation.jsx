const TimeAndLocation = ({
  weather: { formattedLocalTime, name, country },
}) => {
  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="md:text-xl text-sm font-extralight">{formattedLocalTime}</p>
      </div>

      <div className="flex items-center justify-center my-3">
        <p className="md:text-3xl text-lg font-medium">{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;

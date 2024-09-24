const API_KEY = "6a4330ecce54d6aa71d8aad4bd4ddca6";
const Base_URL = "http://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(Base_URL + infoType);
    url.search = new URLSearchParams({...searchParams, appid: API_KEY});

    return fetch(url)
    .then(res => res.json())
};

const formatToLocalTime = (
    secs,
    offset,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs + offset, {zone: "utc"}).toFormat(format);

const formatCurrent = (data) => {
    const {
        coord: {lat, lon},
        main: {tmep, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed},
        timezone
    } = data;

    const {main: details, icon} = weather[0];
    const formattedLocalTime = formatToLocalTime(dt, timezone);

    return {};
}

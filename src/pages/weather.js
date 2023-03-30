import Head from "next/head";
import { useState, useEffect } from "react";
export default function Weather() {
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchWeather() {
            const res = await fetch(
                "https://api.openweathermap.org/data/2.5/weather?lat=-33.5538400&lon=-71.6076100&appid=088a8dd3ffd2fb73650655f8c113f5d8"
            );
            const data = await res.json();
            setWeather(data);
            setLoading(false);
        }

        fetchWeather();
    }, []);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Head>
                <title>Weather App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-4">
                    {loading ? "Loading..." : weather.name}
                </h1>
                <p className="text-xl mb-4">
                    {loading
                        ? ""
                        : `${Math.round(weather.main.temp - 273.15)}°C`}
                </p>
            </main>
        </div>
    );
}

const formatWeather = weather => {
    return weather.charAt(0).toUpperCase() + weather.slice(1).toLowerCase();
};

function recommendOutfit(weather, temperature, isWindy) {
    let outfit;
    if (weather.toLowerCase() === 'sunny' && temperature > 20) {
        outfit = 'T-shirt and shorts';
    } else if (weather.toLowerCase() === 'rainy') {
        outfit = 'Raincoat and boots';
    } else if (weather.toLowerCase() === 'cold' || temperature <= 10) {
        outfit = 'Sweater and jacket';
    } else {
        outfit = 'Jacket and jeans';
    }
    
    outfit = isWindy ? `${outfit} with a scarf` : outfit;

    return `For ${formatWeather(weather)} weather at ${temperature}°C, wear a ${outfit}`;
};



console.log(recommendOutfit('sUNny', 50, false));
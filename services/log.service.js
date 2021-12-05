import chalk from "chalk";
import dedent from "dedent-js";

const printError = (err) => {
    console.log(chalk.bgRed(`Error ${err}`));
};

const printSuccess = (msg) => {
    console.log(chalk.bgGreen(` Success ${msg}`));
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan('Help')}
        'Без параметров - вывод погоды'
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена
        `
    );
};

const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgBlueBright(' WEATHER ')} погода в городе ${res.name}
        ${icon}   ${res.weather[0].description}
        Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
        Влажность: ${res.main.humidity}%
        Скорость ветра: ${res.wind.speed}
        `
    );
}

export { printError, printSuccess, printHelp, printWeather };
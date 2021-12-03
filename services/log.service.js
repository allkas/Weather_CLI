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

export { printError, printSuccess, printHelp };
import dayjs from "dayjs";

export function generateDatesFromYearBegging( ){
    const firstDayOfTheYear = dayjs().startOf('year') // retorna o primeiro dia do ano
    const today = new Date();
    const dates = [];

    let compareDate = firstDayOfTheYear;
    while (compareDate.isBefore(today)){ //enquanto compareDate for anterior a today faz o while
        dates.push(compareDate.toDate()); // converter a data para data do js, antes esta como do dayjs
        compareDate = compareDate.add(1, 'day');
    }

    return dates;
}
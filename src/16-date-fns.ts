import {subDays, format} from 'date-fns';

const date = new Date(1994, 5, 16);
const result = subDays(date, 3);
const str = format(result, 'dd-MMM-yyyy');

console.log(str); // 13-06-1994

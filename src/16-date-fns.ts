import { subDays, format, addDays } from 'date-fns';

const date = new Date(1998, 1, 28); // February 28, 1998
const res = subDays(date, 30); // February 2, 1998

const str = format(res, 'yyyy-MM-dd'); // "1998-02-02"
console.log(str); // Output: "1998-02-02"

const res2 = addDays(res, 31); // March 1, 1998
const str2 = format(res2, 'yyyy-MM-dd'); // "1998-03-01"
console.log(str2); // Output: "1998-03-01"

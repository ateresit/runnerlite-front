import * as _moment from 'moment';

const moment = _moment;

export function dateToString(d:string): string {
    return moment(d).format('DD.MM.YYYY'); 
}

export function secondsToTimeString(s: number): string {
    return moment("2015-01-01").startOf('day').seconds(s).format('HH:mm:ss');
}
import moment from 'moment';

export function getTodayDateFormat (date) {
    return moment(date).format("MMMM Do YYYY, h:mm:ss a");
}
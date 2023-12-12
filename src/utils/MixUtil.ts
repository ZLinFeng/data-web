//import jwt from "jsonwebtoken";
import * as moment from "moment/moment";

export const DEFAULT_DATETIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
export const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";
export const expiryDate = (token: string): boolean => {
    if (!token) {
        return true;
    }
    try {
        console.log(token)
        //let decodeStr = jwt.decode(token);
        //console.log(decodeStr);
    } catch {
        return true;
    }
    return false;
}

export const seconds2string = (timestamp: number): string => {
    const dateTime = moment.unix(timestamp);
    return dateTime.format(DEFAULT_DATETIME_FORMAT);
}
//import jwt from "jsonwebtoken";
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
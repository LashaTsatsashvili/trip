import {Trip} from "../entities";

export interface User {
    username: string,
    role: string,
    trips?: Trip[],
}
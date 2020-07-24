import {Trip} from "../entities";

export interface User {
    id: number,
    username: string,
    role: string,
    trips?: Trip[],
}
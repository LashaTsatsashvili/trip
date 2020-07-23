import {User} from "../entities";

export interface Trip {
    destination: string,
    startDate: Date,
    endDate: Date,
    comment: string,
    user?: User,
}
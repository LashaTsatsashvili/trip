import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {User} from "./user.entity";

@Entity('Trips')
export class Trip {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    destination: string;

    @Column()
    startDate: Date;

    @Column()
    endDate: Date;

    @Column({type: "text"})
    comment: string;

    @ManyToOne(() => User)
    user: User;
}

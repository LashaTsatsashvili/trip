import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Trip} from "./trip.entity";

@Entity('Users')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    role: string;

    @OneToMany(() => Trip, trip => trip.user, {cascade: true})
    trips: Trip[];
}

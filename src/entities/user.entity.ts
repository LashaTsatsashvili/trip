import {Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn} from 'typeorm';

@Entity('shares')
export class Share {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text"})
    title: string;

    @Column({nullable: true, type: "text"})
    description?: string | null;

    @Column({nullable: true})
    src?: string | null;

    @Column({type: "text"})
    url: string;

    @Column({type: "text"})
    type: string;

    @Column({unique: true})
    slug: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

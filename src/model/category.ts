import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn({type: 'int'})
    public readonly id: number;
    @Column({type: 'varchar'})
    public nameC: string;
}
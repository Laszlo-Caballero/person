import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  lastName: string;
  @Column()
  gender: string;
  @Column()
  age: number;
  @Column()
  phone: string;
}

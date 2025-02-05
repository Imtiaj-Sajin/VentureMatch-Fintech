import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Lead {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  email: string;

  @Column()
  ip: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  country: string;

  @Column()
  source: string;  

  @Column({ nullable: true })
  userAgent: string;

  @Column({ nullable: true })
  referrer: string;

  @CreateDateColumn()
  createdAt: Date;
}

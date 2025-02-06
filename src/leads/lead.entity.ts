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
    regionName: string;

    @Column({ nullable: true })
    latitude: string;

    @Column({ nullable: true })
    longitude: string;

    @Column({ nullable: true })
    country: string;

    @Column({ nullable: true })
    timezone: string;

    @Column({ nullable: true })
    currency: string;

    @Column({ type: 'boolean', nullable: true })  
    mobile: boolean;

    @Column({ nullable: true })
    device: string;

    @Column()
    source: string;

    @Column({ nullable: true })
    userAgent: string;

    @Column({ nullable: true })
    referrer: string;

    @CreateDateColumn()
    createdAt: Date;
  }

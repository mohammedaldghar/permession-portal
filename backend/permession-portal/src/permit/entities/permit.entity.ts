import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('permits')
export class Permit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  applicant_name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  applicant_email: string;

  @Column({ type: 'varchar', length: 255 })
  permit_type: string;

  @Column({
    type: 'enum',
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  })
  application_status: 'Pending' | 'Approved' | 'Rejected';

  @CreateDateColumn({ type: 'timestamp' })
  submitted_at: Date;
}
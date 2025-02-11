import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InventoryBasic {
  @PrimaryGeneratedColumn()
  product_code: string;

  @Column()
  product_name: string;

  @Column()
  quantity: string;

  @Column()
  units: string;

  @Column()
  reason: string;
}

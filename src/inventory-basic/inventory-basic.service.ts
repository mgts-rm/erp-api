import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InventoryBasic } from './inventory-basic.entity';

@Injectable()
export class InventoryBasicService {
  constructor(
    @InjectRepository(InventoryBasic)
    private inventoryRepository: Repository<InventoryBasic>,
  ) {}

  async findAll(): Promise<InventoryBasic[]> {
    return this.inventoryRepository.find();
  }

  async findByFilter(product_name?: string): Promise<InventoryBasic[]> {
    const query = this.inventoryRepository.createQueryBuilder('inventory');
  
    if (product_name) {
      query.andWhere('inventory.product_name ILIKE :product_name', { product_name: `%${product_name}%` });
    }
    return query.getMany();
  }

  async create(inventoryData: { product_code: string, product_name:string, quantity: string, units: string, reason: string }): Promise<InventoryBasic> {
    const newInventory = this.inventoryRepository.create(inventoryData);
    return this.inventoryRepository.save(newInventory);
  }

  async update(product_code: string, updateData: { quantity?: string; units?: string; reason?: string }): Promise<InventoryBasic> {
    const inventory = await this.inventoryRepository.findOne({ where: { product_code } });
  
    if (!inventory) {
      throw new NotFoundException(`Inventory with product_code "${product_code}" not found.`);
    }
  
    Object.assign(inventory, updateData); // Merge updateData with existing inventory object
  
    return this.inventoryRepository.save(inventory);
  }

  async delete(product_code: string): Promise<void> {
    await this.inventoryRepository.delete(product_code);
  }
}

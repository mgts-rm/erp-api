import { Controller, Get, Post, Delete, Body, Param, Query, Put } from '@nestjs/common';
import { InventoryBasicService } from './inventory-basic.service';
import { InventoryBasic } from './inventory-basic.entity';

@Controller('inventory-basic')
export class InventoryBasicController {
  constructor(private readonly inventoryService: InventoryBasicService) { }

  @Get()
  getAllInventory(): Promise<InventoryBasic[]> {
    return this.inventoryService.findAll();
  }

  @Get('search')
  getInventoryByFilter(
    @Query('product_name') product_name?: string,
  ): Promise<InventoryBasic[]> {
    return this.inventoryService.findByFilter(product_name);
  }


  @Post()
  createInventory(@Body() inventoryData: { product_code: string; product_name: string, quantity: string, units: string, reason: string }): Promise<InventoryBasic> {
    return this.inventoryService.create(inventoryData);
  }

  @Put(':product_code')
  async updateInventory(
    @Param('product_code') product_code: string,
    @Body() updateData: { quantity?: string; units?: string; reason?: string }
  ): Promise<InventoryBasic> {
    return this.inventoryService.update(product_code, updateData);
  }


  @Delete(':product_code')
  deleteInventory(@Param('product_code') product_code: string): Promise<void> {
    return this.inventoryService.delete(product_code);
  }
}

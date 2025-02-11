import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InventoryBasic } from './inventory-basic.entity';
import { InventoryBasicService } from './inventory-basic.service';
import { InventoryBasicController } from './inventory-basic.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InventoryBasic])],
  controllers: [InventoryBasicController],
  providers: [InventoryBasicService],
})
export class InventoryBasicModule {}

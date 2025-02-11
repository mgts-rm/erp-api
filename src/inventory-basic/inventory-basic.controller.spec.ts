import { Test, TestingModule } from '@nestjs/testing';
import { InventoryBasicController } from './inventory-basic.controller';

describe('InventoryBasicController', () => {
  let controller: InventoryBasicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InventoryBasicController],
    }).compile();

    controller = module.get<InventoryBasicController>(InventoryBasicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

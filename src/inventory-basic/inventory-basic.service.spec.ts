import { Test, TestingModule } from '@nestjs/testing';
import { InventoryBasicService } from './inventory-basic.service';

describe('InventoryBasicService', () => {
  let service: InventoryBasicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InventoryBasicService],
    }).compile();

    service = module.get<InventoryBasicService>(InventoryBasicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

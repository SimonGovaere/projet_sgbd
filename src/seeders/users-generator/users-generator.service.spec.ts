import { Test, TestingModule } from '@nestjs/testing';
import { UsersGeneratorService } from './users-generator.service';

describe('UsersGeneratorService', () => {
  let service: UsersGeneratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersGeneratorService],
    }).compile();

    service = module.get<UsersGeneratorService>(UsersGeneratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

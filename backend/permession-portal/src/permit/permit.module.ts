// backend/src/permit/permit.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermitService } from './permit.service';
import { PermitController } from './permit.controller';
import { Permit } from './entities/permit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Permit])],
  controllers: [PermitController],
  providers: [PermitService],
})
export class PermitModule {}

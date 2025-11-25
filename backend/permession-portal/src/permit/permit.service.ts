// backend/src/permit/permit.service.ts ← الكود النهائي 100%
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permit } from './entities/permit.entity';
import { CreatePermitDto } from './dto/create-permit.dto';
import { UpdatePermitDto } from './dto/update-permit.dto';

@Injectable()
export class PermitService {
  constructor(
    @InjectRepository(Permit)
    private permitRepository: Repository<Permit>,
  ) {}

  async create(createPermitDto: CreatePermitDto) {
    const permit = this.permitRepository.create({
      ...createPermitDto,
      application_status: 'Pending',
    });
    return await this.permitRepository.save(permit);
  }

  async findAll() {
    return await this.permitRepository.find({
      order: { submitted_at: 'DESC' },
    });
  }

  async findOne(id: number) {
    return await this.permitRepository.findOneBy({ id });
  }

  async update(id: number, updatePermitDto: UpdatePermitDto) {
    await this.permitRepository.update(id, updatePermitDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.permitRepository.delete(id); // ← الحل النهائي
    return { message: 'تم الحذف بنجاح' };
  }
}

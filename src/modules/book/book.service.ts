import { Injectable } from '@nestjs/common';
import { BookDto } from './book.dto';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async create(data: BookDto) {
    const bookExists = await this.prisma.book.findFirst({
      where: {
        bar_code: data.bar_code,
      },
    });
    if (bookExists) {
      throw new Error('Book already exists');
    }
    const book = await this.prisma.book.create({
      data,
    });
    return book;
  }

  async findAll() {
    return this.prisma.book.findMany();
  }
}

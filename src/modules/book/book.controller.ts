import { Body, Controller, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async create(@Body() data: BookDto) {
    return this.bookService.create(data);
  }
}

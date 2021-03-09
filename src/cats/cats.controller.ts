import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAllCats(@Req() request: Request, @Res() response: Response): void {
    response.json({
      cats: [],
    });
  }

  @Post()
  @HttpCode(201)
  addCat(@Req() request: Request, @Res() response: Response): void {
    response.json({
      cat: {},
    });
  }

  @Put()
  @HttpCode(200)
  updateCat(@Req() request: Request, @Res() response: Response): void {
    response.json({
      cat: {},
    });
  }

  @Delete(':id')
  @HttpCode(204)
  deleteCat(@Req() request: Request, @Res() response: Response): void {
    console.log(request.params.id);
    response.json({
      message: 'ok',
    });
  }

  @Get(':id')
  @HttpCode(200)
  getACat(@Req() request: Request, @Res() response: Response): void {
    console.log(request.params.id);
    response.json({
      cat: {},
    });
  }
}

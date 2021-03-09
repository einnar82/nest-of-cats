import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request, @Res() response: Response): void {
        response.json({
            cats: []
        })
    }
}

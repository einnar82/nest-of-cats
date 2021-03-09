import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request, @Res() response): void {
        response.json({
            cats: []
        })
    }
}

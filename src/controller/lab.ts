import { Controller, Get, Inject } from '@midwayjs/core';
import { Context } from 'egg';

@Controller('/')
export class LabController {
  @Inject()
  ctx: Context;

  @Get('/lab')
  @Get('/lab/*')
  async lab() {
    await this.ctx.render('lab.ejs', {
      appKey: 'xxtest327',
    });
  }
}

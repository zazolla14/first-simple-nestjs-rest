import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('app')
export class AppController {
        constructor(private readonly appService: AppService) {}

        @Get()
        getHello(): string {
                return this.appService.getHello()
        }

        @Get('tes')
        getTrue(): boolean {
                return this.appService.getTrue()
        }

        @Get('array')
        getArray(): any[] {
                return this.appService.getArray()
        }
}

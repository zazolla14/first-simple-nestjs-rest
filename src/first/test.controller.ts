import { Controller, Get } from '@nestjs/common'
import { TestService } from './test.service'

@Controller('test')
export class TestController {
        constructor(private readonly testService: TestService) {}

        private name = false
        @Get()
        getFalse(): boolean {
                return this.name
        }

        @Get('test1')
        getNameTest(): string {
                return this.testService.getNameTest()
        }
}

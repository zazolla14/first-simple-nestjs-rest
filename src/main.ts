import { NestFactory } from '@nestjs/core'
import { UsersModule } from './users/users.module'
import { Logger, ValidationPipe } from '@nestjs/common'

async function bootstrap() {
        const app = await NestFactory.create(UsersModule)
        app.useGlobalPipes(new ValidationPipe())
        await app.listen(4000)

        Logger.log(`Running at port 4000`, 'RunningPort')
}
bootstrap()

import {
        ArgumentsHost,
        Catch,
        ExceptionFilter,
        HttpStatus,
} from '@nestjs/common'
import { EntityNotFoundError } from 'typeorm'

@Catch(EntityNotFoundError)
export class EntityNotFoundExceprtionFilter implements ExceptionFilter {
        catch(error: EntityNotFoundError, host: ArgumentsHost) {
                const respone = host.switchToHttp().getResponse()
                respone.status(HttpStatus.NOT_FOUND).json({
                        statusCode: HttpStatus.NOT_FOUND,
                        message: 'not found',
                })
        }
}

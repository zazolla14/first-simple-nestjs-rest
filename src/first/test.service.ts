import { Injectable } from '@nestjs/common'

@Injectable()
export class TestService {
        getNameTest(): string {
                return 'Azola'
        }
}

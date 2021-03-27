import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'
import { AppModule } from '../src/users/users.module'

describe('AppController (e2e)', () => {
        let app: INestApplication

        beforeEach(async () => {
                const moduleFixture: TestingModule = await Test.createTestingModule(
                        {
                                imports: [AppModule],
                        },
                ).compile()

                app = moduleFixture.createNestApplication()
                await app.init()
        })

        it('/app (GET)', () => {
                return request(app.getHttpServer())
                        .get('/app/')
                        .expect(200)
                        .expect('Hello World!')
        })

        it(`/app/test/ GET()`, () => {
                return request(app.getHttpServer())
                        .get(`/app/tes/`)
                        .expect(200)
                        .expect('true')
        })

        it(`/app/array/ GET()`, () => {
                return request(app.getHttpServer())
                        .get(`/app/array/`)
                        .expect(200)
                        .expect(['Azola', 1, false])
        })
})

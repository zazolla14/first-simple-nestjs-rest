import { Test, TestingModule } from '@nestjs/testing'
import { TestController } from './test.controller'
import { TestService } from './test.service'

describe('TestController', () => {
        let testController: TestController

        beforeEach(async () => {
                const test: TestingModule = await Test.createTestingModule({
                        controllers: [TestController],
                        providers: [TestService],
                }).compile()

                testController = test.get<TestController>(TestController)
        })

        describe('Test for TestController', () => {
                it('should return "Azola"', () => {
                        expect(testController.getNameTest()).toBe('Azola')
                })
                it(`should be TRUE`, () => {
                        expect(testController.getFalse()).toBeFalsy()
                })
        })
})

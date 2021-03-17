import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World!";
  }
  getTrue(): boolean {
    return true;
  }

  getArray(): any[] {
    return ["Azola", 1, false];
  }
}

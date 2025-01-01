import { Injectable } from '@nestjs/common';

@Injectable()
export class TempforgotpassDataService {
  private dataProvider: Record<string, any> = {};


  set(email: string, data: any): void {
    this.dataProvider[email] = data;
  }

  get(email: string): any {
    return this.dataProvider[email];
  }

  delete(email: string): void {
    delete this.dataProvider[email];
  }
}

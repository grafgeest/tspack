import { IDataService } from "./../services/data.service";
export class DataController {
  constructor(private dataService: IDataService) {
  }
  public getDataWithPromise() {
    return this.dataService.getDataWithPromise();
  }

  public getDataWithCallback(callback: any) {
    return this.dataService.getDataWithCallback(callback);
  }

  public getDataWithGenerator() {
    return this.dataService.getDataWithGenerator();
  }
}

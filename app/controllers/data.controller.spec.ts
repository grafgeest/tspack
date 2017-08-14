import { IDataService } from "./../services/data.service";
import { DataController } from "./data.controller";
class DataServiceFixture implements IDataService {
  public getDataWithCallback(callback: (data: string) => void) {
    throw new Error("Method not implemented.");
  }
  public getDataWithPromise(): Promise<string> {
    throw new Error("Method not implemented.");
  }
  public getDataWithGenerator(): Promise<number> {
    throw new Error("Method not implemented.");
  }
}

describe("data controller spec", () => {
  it("should create data controller", () => {
    const fakeService = new DataServiceFixture();
    const ctrl = new DataController(fakeService);
    expect(ctrl).toBeDefined();
  });

  it("should return data from the service", () => {
    const fakeService = new DataServiceFixture();
    const data = "DATA";
    spyOn(fakeService, "getDataWithPromise").and.
      returnValue(new Promise((resolve) => resolve(data)));
    const ctrl = new DataController(fakeService);
    ctrl.getDataWithPromise()
      .then((result) => {
        expect(result).toEqual(data);
      });
  });
});

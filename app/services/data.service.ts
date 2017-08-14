export interface IDataService {
  getDataWithCallback(callback: (data: string) => void): void;
  getDataWithPromise(): Promise<string>;
  getDataWithGenerator(): Promise<number>;
}

export class DataService implements IDataService {
  private generator: IterableIterator<number>;
  constructor() {
    this.generator = this.generateRange(5, 15);
  }

  public getDataWithCallback(callback: any) {
    setTimeout(() => {
      callback((new Date()).toJSON());
    }, 1000);
  }

  public getDataWithPromise(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve((new Date()).toJSON());
      }, 1000);
    });
  }

  public getDataWithGenerator(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.generator.next().value);
      }, 1000);
    });
  }

  private *generateRange(start: number, end: number): IterableIterator<number> {
    for (let index = start; index < end; index++) {
      yield index;
    }
  }
}

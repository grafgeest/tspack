import { DataController } from "./controllers/data.controller";
import { DataService } from "./services/data.service";

class AppController {
  public loading: boolean;
  private ctrl: DataController;
  constructor() {
    this.ctrl = new DataController(new DataService());
  }
  public updateWithPromise(id: string) {
    this.loading = true;
    const output = document.getElementById(id) || document.documentElement;
    this.ctrl.getDataWithPromise()
      .then((result) => {
        output.innerText = result;
        this.loading = false;
      })
      .catch((err) => {
        this.loading = false;
      });
  }

  public updateWithGenerator(id: string) {
    this.loading = true;
    const output = document.getElementById(id) || document.documentElement;
    this.ctrl.getDataWithGenerator()
      .then((result) => {
        output.innerText = result.toString();
        this.loading = false;
      })
      .catch((err) => {
        this.loading = false;
      });
  }

  public updateWithCallback(id: string) {
    this.loading = true;
    const output = document.getElementById(id) || document.documentElement;
    this.ctrl.getDataWithCallback((result: any) => {
      output.innerText = result;
      this.loading = false;
    });
  }
}

(window as any).appCtrl = new AppController();

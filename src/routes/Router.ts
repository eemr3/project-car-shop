import { Router } from 'express';
import ControllerGeneric from '../controllers/Controller.generic';

class CustomRoutes<T> {
  public router: Router;

  constructor() {
    this.router = Router();
  }

  public addRoute(
    controller: ControllerGeneric<T>,
    route: string = controller.route,
  ) {
    this.router.post(route, controller.create);
    this.router.get(route, controller.read);
    this.router.get(route, controller.readOne);
    this.router.put(route, controller.update);
    this.router.delete(route, controller.delete);
  }
}

export default CustomRoutes;
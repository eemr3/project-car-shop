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
    this.router.get(route, controller.read);
    this.router.get(`${route}/:id`, controller.readOne);
    this.router.post(route, controller.create);
    this.router.put(`${route}/:id`, controller.update);
    this.router.delete(`${route}/:id`, controller.delete);
  }
}

export default CustomRoutes;
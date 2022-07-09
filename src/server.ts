import CustomRouter from './routes/Router';
import App from './app';

import CarController from './controllers/Car.controller';

import { Car } from './interfaces/CarInterface';
import MortorcycleController from './controllers/Motorcycle.controller';
import { Motorcycle } from './interfaces/MotorcycleInterface';

const server = new App();

const carController = new CarController();
const motorcycleController = new MortorcycleController();

const carRouter = new CustomRouter<Car>();
const motocycleRouter = new CustomRouter<Motorcycle>();
carRouter.addRoute(carController);
motocycleRouter.addRoute(motorcycleController);

server.addRouter(carRouter.router);
server.addRouter(motocycleRouter.router);

export default server;

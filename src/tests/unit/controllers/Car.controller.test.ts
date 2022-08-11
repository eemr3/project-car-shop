import * as sinon from 'sinon';
import chai from 'chai';
import { IRequestWithBody } from '../../../controllers/interfaces/Controller.interface';
import { Car } from '../../../interfaces/CarInterface';
import { Response } from 'express';
import CarService from '../../../services/Car.service';
import CarController from '../../../controllers/Car.controller';
import chaiHttp = require('chai-http');

import { bodyCar, returnCreateCar } from '../../mocks/CarMocks';


chai.use(chaiHttp);

const { expect } = chai;

const carController = new CarController()
describe('Sua descrição', () => {
  
  const req = {} as IRequestWithBody<Car>
  const res = {} as Response
  
  before(() => {
    sinon.stub(carController.service, 'create').resolves(returnCreateCar)
    res.status = sinon.stub().returns(res)
    res.json = sinon.stub().returns(res)
    req.body = bodyCar
  });

  after(()=>{
    (carController.service.create as sinon.SinonStub).restore();
  })

  it('',  async () => {    
    await carController.create(req, res)
    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
  });

});
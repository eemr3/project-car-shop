import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon, { SinonStub } from 'sinon';
import CarService from '../../../services/Car.service';
import {
  bodyCar,
  bodyUpdate,
  returnCreateCar,
  returnFindAllCars,
  returnUpdateCar,
} from '../../mocks/CarMocks';

describe('Service de Car', () => {
  describe('create rota "/cars"', () => {
    before(() => {
      sinon.stub(Model, 'create').resolves(returnCreateCar);
    });

    after(() => {
      (Model.create as SinonStub).restore();
    });
    it('create new car', async () => {
      const car = new CarService();
      const result = await car.create(bodyCar);

      expect(result).to.be.deep.equal(returnCreateCar);
    });
  });

  describe('find all rota "/cars"', () => {
    before(() => {
      sinon.stub(Model, 'find').resolves(returnFindAllCars);
    });

    
    after(() => {
      (Model.find as SinonStub).restore();
    });
    it('find all cars', async () => {
      const car = new CarService();
      const result = await car.read();

      expect(result).to.be.deep.equal(returnFindAllCars);
    });
  });

  describe('find by id rota "/cars"', () => {
    before(() => {
      sinon.stub(Model, 'findOne').resolves(returnCreateCar);
    });

    
    after(() => {
      (Model.findOne as SinonStub).restore();
    });
    it('find a car by id', async () => {
      const car = new CarService();
      const result = await car.readOne('62c87efaf1f9d111bf4b6acc');

      expect(result).to.be.deep.equal(returnCreateCar);
    });
  });

  describe('update rota "/cars"', () => {
    before(() => {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(returnUpdateCar);
    });

    
    after(() => {
      (Model.findByIdAndUpdate as SinonStub).restore();
    });
    it('update a car', async () => {
      const car = new CarService();
      const result = await car.update('62c87efaf1f9d111bf4b6acc', bodyUpdate);

      expect(result).to.be.deep.equal(returnUpdateCar);
    });
  });

  describe('delete rota "/cars"', () => {
    before(() => {
      sinon.stub(Model, 'findOneAndDelete').resolves(1);
    });

    
    after(() => {
      (Model.findOneAndDelete as SinonStub).restore();
    });
    it('delete a car', async () => {
      const car = new CarService();
      const result = await car.delete('62c87efaf1f9d111bf4b6acc');

      expect(result).to.be.deep.equal(1);
    });
  });
});

import { expect } from 'chai';
import { Model } from 'mongoose';
import sino, { SinonStub } from 'sinon';
import CarModel from '../../../models/Car.model';

import { bodyCar, bodyUpdate, returnCreateCar, returnFindAllCars, returnUpdateCar } from '../../mocks/CarMocks';

describe('Camada Model Car', () => {
  describe('create rota "/cars"', () => {
    before(() => {
      sino.stub(Model, 'create').resolves(returnCreateCar);
    });

    after(() => {
      (Model.create as SinonStub).restore();
    });

    it('create new car', async () => {
      const car = new CarModel();

      const result = await car.create(bodyCar);

      expect(result).to.be.deep.equal(returnCreateCar);
    });
  });
  
  describe('find all rota "/cars"', () => {
    before(() => {
      sino.stub(Model, 'find').resolves(returnFindAllCars);
    });

    after(() => {
      (Model.find as SinonStub).restore();
    });

    it('find all cars', async () => {
      const car = new CarModel();

      const result = await car.read();

      expect(result).to.be.deep.equal(returnFindAllCars);
    });
  });

  describe('find by id rota "/cars/:id"', () => {
    before(() => {
      sino.stub(Model, 'findOne').resolves(returnCreateCar);
    });

    after(() => {
      (Model.findOne as SinonStub).restore();
    });

    it('find by id a car', async () => {
      const car = new CarModel();

      const result = await car.readOne('62c87efaf1f9d111bf4b6acc');

      expect(result).to.be.deep.equal(returnCreateCar);
    });
  });

  describe('update rota "/cars/:id"', () => {
    before(() => {
      sino.stub(Model, 'findByIdAndUpdate').resolves(returnUpdateCar);
    });

    after(() => {
      (Model.findByIdAndUpdate as SinonStub).restore();
    });

    it('update a car', async () => {
      const car = new CarModel();

      const result = await car.update('62c87efaf1f9d111bf4b6acc', bodyUpdate);

      expect(result).to.be.deep.equal(returnUpdateCar);
    });
  });

  describe('delete rota "/cars/:id"', () => {
    before(() => {
      sino.stub(Model, 'findOneAndDelete').resolves(1);
    });

    after(() => {
      (Model.findOneAndDelete as SinonStub).restore();
    });

    it('delete a car', async () => {
      const car = new CarModel();

      const result = await car.delete('62c87efaf1f9d111bf4b6acc');

      expect(result).to.be.equal(1);
    });
  });
});

import { expect } from 'chai';
import { Model } from 'mongoose';
import sino, { SinonStub } from 'sinon';

import MotorcycleModel from '../../../models/Motorcycle.model';

import { bodyMotor,returnCreateMotor,bodyUpdate,returnFindAllMotor,returnUpdateMotor } from '../../mocks/MotorcycleMocks';

describe('Camada Model Motorcycle', () => {
  describe('create rota "/motorcycles"', () => {
    before(() => {
      sino.stub(Model, 'create').resolves(returnCreateMotor);
    });

    after(() => {
      (Model.create as SinonStub).restore();
    });

    it('create new motorcycle', async () => {
      const motor = new MotorcycleModel();

      const result = await motor.create(bodyMotor);

      expect(result).to.be.deep.equal(returnCreateMotor);
    });
  });
  
  describe('find all rota "/motorcycles"', () => {
    before(() => {
      sino.stub(Model, 'find').resolves(returnFindAllMotor);
    });

    after(() => {
      (Model.find as SinonStub).restore();
    });

    it('find all motorcycles', async () => {
      const car = new MotorcycleModel();

      const result = await car.read();

      expect(result).to.be.deep.equal(returnFindAllMotor);
    });
  });

  describe('find by id rota "/motorcycles/:id"', () => {
    before(() => {
      sino.stub(Model, 'findOne').resolves(returnCreateMotor);
    });

    after(() => {
      (Model.findOne as SinonStub).restore();
    });

    it('find by id a motorcycle', async () => {
      const car = new MotorcycleModel();

      const result = await car.readOne('62c87efaf1f9d111bf4b6acc');

      expect(result).to.be.deep.equal(returnCreateMotor);
    });
  });

  describe('update rota "/motorcycles/:id"', () => {
    before(() => {
      sino.stub(Model, 'findByIdAndUpdate').resolves(returnUpdateMotor);
    });

    after(() => {
      (Model.findByIdAndUpdate as SinonStub).restore();
    });

    it('update a motorcylce', async () => {
      const car = new MotorcycleModel();

      const result = await car.update('62c87efaf1f9d111bf4b6acc', bodyMotor);

      expect(result).to.be.deep.equal(returnUpdateMotor);
    });
  });

  describe('delete rota "/motorcycles/:id"', () => {
    before(() => {
      sino.stub(Model, 'findOneAndDelete').resolves(1);
    });

    after(() => {
      (Model.findOneAndDelete as SinonStub).restore();
    });

    it('delete a motorcylce', async () => {
      const car = new MotorcycleModel();

      const result = await car.delete('62c87efaf1f9d111bf4b6acc');

      expect(result).to.be.equal(1);
    });
  });
});

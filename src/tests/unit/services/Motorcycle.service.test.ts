import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon, { SinonStub } from 'sinon';
import MotorcycleService from '../../../services/Motorcycle.service';
import {
  bodyMotor,
  bodyUpdate,
  returnCreateMotor,
  returnFindAllMotor,
  returnUpdateMotor,
} from '../../mocks/MotorcycleMocks';

describe('Service de Motorcycle', () => {
  describe('create rota "/motorcycles"', () => {
    before(() => {
      sinon.stub(Model, 'create').resolves(returnCreateMotor);
    });

    after(() => {
      (Model.create as SinonStub).restore();
    });

    it('create new car', async () => {
      const motor = new MotorcycleService();
      const result = await motor.create(bodyMotor);

      expect(result).to.be.deep.equal(returnCreateMotor);
    });
  });

  describe('find all rota "/motorcycles"', () => {
    before(() => {
      sinon.stub(Model, 'find').resolves(returnFindAllMotor);
    });

    
    after(() => {
      (Model.find as SinonStub).restore();
    });
    it('find all motorcycles', async () => {
      const motor = new MotorcycleService();
      const result = await motor.read();

      expect(result).to.be.deep.equal(returnFindAllMotor);
    });
  });

  describe('find by id rota "/motorcycles"', () => {
    before(() => {
      sinon.stub(Model, 'findOne').resolves(returnCreateMotor);
    });

    
    after(() => {
      (Model.findOne as SinonStub).restore();
    });
    it('find a motorcycle by id', async () => {
      const motor = new MotorcycleService();
      const result = await motor.readOne('4edd40c86762e0fb12000003');

      expect(result).to.be.deep.equal(returnCreateMotor);
    });
  });

  describe('update rota "/motorcycles"', () => {
    before(() => {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(returnUpdateMotor);
    });

    
    after(() => {
      (Model.findByIdAndUpdate as SinonStub).restore();
    });
    it('update a motorcycle', async () => {
      const motor = new MotorcycleService();
      const result = await motor.update('4edd40c86762e0fb12000003', bodyUpdate);

      expect(result).to.be.deep.equal(returnUpdateMotor);
    });
  });

  describe('delete rota "/motorcycles"', () => {
    before(() => {
      sinon.stub(Model, 'findOneAndDelete').resolves(1);
    });

    
    after(() => {
      (Model.findOneAndDelete as SinonStub).restore();
    });
    it('delete a motorcycle', async () => {
      const motor = new MotorcycleService();
      const result = await motor.delete('4edd40c86762e0fb12000003');

      expect(result).to.be.deep.equal(1);
    });
  });
});

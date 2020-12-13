/* eslint-disable arrow-body-style */

import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

import { getUserContactData } from '../src/domain-models/users.domain-model';

chai.use(chaiAsPromised);

const { expect } = chai;

describe('users.domain-model', () => {
  describe('getUserContactData', () => {
    it('should get contact data', () => {
      return expect(getUserContactData(1)).to.eventually.have.all.keys(
        'name',
        'username',
        'email',
        'phone'
      );
    });

    it('should throw an error if user id is not provided', () => {
      return expect(getUserContactData()).to.be.rejectedWith('User id was not provided');
    });

    it('should throw an http-error if no user found', () => {
      return expect(
        getUserContactData('I-am-sure-there-is-no-user-with-this-id')
      ).to.be.rejectedWith('Request failed with status code 404');
    });
  });
});

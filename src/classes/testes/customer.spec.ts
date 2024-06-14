import { IndividualCustomer, EnterpriseCustomer } from '../classe-customer';

const createIndividualCustomer = (firstName: string, lastName: string, cpf: string): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('tem firstName, lastName, Cpf ', () => {
    const sut = createIndividualCustomer('edsu', 'teles', '111.111.111-11');

    expect(sut).toHaveProperty('firstName', 'edsu');
    expect(sut).toHaveProperty('lastName', 'teles');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('tem os methods GET e IDN', () => {
    const sut = createIndividualCustomer('edsu', 'teles', '111.111.111-11');

    expect(sut.getName()).toBe('edsu teles');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

//ENTERPRISE
describe('EnterpriseCustomer', () => {
  it('Tem nome e cnpj ', () => {
    const sut = createEnterpriseCustomer('Udemy', '222.222.222/0001-11');

    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '222.222.222/0001-11');
  });

  it('tem os methods GET e IDN', () => {
    const sut = createEnterpriseCustomer('Udemy', '222.222.222/0001-11');

    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('222.222.222/0001-11');
  });
});

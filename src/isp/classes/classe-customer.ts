import { CustumerOrderEnterpriseAndJuridic, EnterpriseCustomerProtocol, IndividualCustomerProtocol } from './interfaces-protocolos/customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol, CustumerOrderEnterpriseAndJuridic {
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }
  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer implements EnterpriseCustomerProtocol, CustumerOrderEnterpriseAndJuridic {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
  getName(): string {
    return this.name;
  }
  getIDN(): string {
    return this.cnpj;
  }
}

import { Persistency } from './classe-persistency';

describe('Testando o Persistency', () => {
  afterEach(() => jest.clearAllMocks()); // limpe depois de cada teste

  it('Retorno do Persistency precisa ser Undefined', () => {
    //system under test = SUT
    const sutRetornoDoPersistency = new Persistency();
    expect(sutRetornoDoPersistency.saveOrder()).toBeUndefined();
  });

  it('Retorno do Persistency precisa ter console.log', () => {
    //system under test = SUT
    const sutRetornoDoPersistency = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');

    sutRetornoDoPersistency.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Retorno do valor console.log "Pedido salvo com sucesso..."', () => {
    //system under test = SUT
    const sutRetornoDoPersistency = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');

    sutRetornoDoPersistency.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});

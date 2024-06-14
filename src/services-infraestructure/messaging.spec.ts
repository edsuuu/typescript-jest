import { Messaging } from './classe-messaging';

const createSut = (): Messaging => {
  return new Messaging();
};

describe('Testando o Messaging', () => {
  afterEach(() => jest.clearAllMocks()); // limpe depois de cada teste

  it('Retorno do Messaging precisa ser uma string', () => {
    //system under test = SUT
    const sutRetornoDoPersistency = createSut();
    expect(sutRetornoDoPersistency.sendMessage('teste')).toBeUndefined();
  });

  it('Retorno do Messaging precisa ter console.log', () => {
    //system under test = SUT
    const sutRetornoDoPersistency = createSut();

    const consoleSpy = jest.spyOn(console, 'log');

    sutRetornoDoPersistency.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('Retorno do valor console.log =  ("Mensagem enviada:, msg") ', () => {
    //system under test = SUT
    const sutRetornoDoPersistency = createSut();

    const consoleSpy = jest.spyOn(console, 'log');

    sutRetornoDoPersistency.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
});

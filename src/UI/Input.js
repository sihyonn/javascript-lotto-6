import { Console } from '@woowacourse/mission-utils';
export const Input = {
  // 구매금액
  async getPurchaseAmout(msg) {
    const inputAmount = await Console.readLineAsync(msg);
    Console.print('');

    return Number(inputAmount);
  },

  // 당첨번호
  async getWinningNumbers(msg) {
    const inputNum = await Console.readLineAsync(msg);
    const winningNumList = inputNum.split(',').map(Number);
    Console.print('');

    return winningNumList;
  },

  // 보너스번호
  async getBounsNumber(msg) {
    const inputBonus = await Console.readLineAsync(msg);
    Console.print('');

    return inputBonus;
  },
};

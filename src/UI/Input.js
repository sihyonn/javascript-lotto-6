import { Console } from '@woowacourse/mission-utils';
import { INPUT } from '../constants/Messages.js';

export const Input = {
  // 구매금액
  async getPurchaseAmout() {
    const inputAmount = await await Console.readLineAsync(INPUT.AMOUNT);
    Console.print('');

    return Number(inputAmount);
  },

  // 당첨번호
  async getWinningNumbers() {
    const inputNum = await Console.readLineAsync(INPUT.WINNIN_NUM);
    const winningNumList = inputNum.split(',').map(Number);
    Console.print('');

    return winningNumList;
  },

  // 보너스번호
  async getBounsNumber() {
    const inputBonus = await Console.readLineAsync(INPUT.BONUS_NUM);
    Console.print('');

    return inputBonus;
  },
};

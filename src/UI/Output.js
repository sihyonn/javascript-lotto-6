import { Console } from '@woowacourse/mission-utils';
import { OUTPUT } from '../constants/Messages.js';

const Output = {
  // 발행한 로또 구매개수 출력
  printPurchaseQuantity(quantity) {
    Console.print(`${quantity}` + OUTPUT.PURCHASE);
  },

  // 발행한 로또번호리스트 출력
  printLottoList(lottos) {
    lottos.forEach((lotto) => {
      Console.print(lotto);
    });
  },

  // 당첨통계 출력
  printWinningStatistics(winningInfo) {
    Console.print(OUTPUT.WINNING_STATS);
    OUTPUT.RESULT.forEach((v, idx) => {
      Console.print(OUTPUT.RESULT + `${winningInfo[idx]}개`);
    });
  },

  // 수익률 출력
  printRateOfReturn(rate) {
    Console.print(OUTPUT.RETURN_RATE(rate));
  },
};

export default Output;

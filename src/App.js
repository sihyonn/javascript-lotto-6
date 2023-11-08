import { Console } from '@woowacourse/mission-utils';
import { Input } from './UI/Input.js';
import Lotto from './Lotto.js';
import MakeLotto from './MakeLotto.js';
import Result from './Result.js';
import { INPUT } from './constants/Messages.js';

class App {
  async play() {
    let validAmount = false;
    let validWinningNum = false;
    let validBounsNum = false;

    let amount;
    let winningNum;
    let lottos;
    let bonusNum;

    while (!validAmount) {
      try {
        amount = await Input.getPurchaseAmout(INPUT.AMOUNT);
        const makeLotto = new MakeLotto([1, 2, 3, 4, 5, 6], amount);
        lottos = await makeLotto.makeLottos();
        validAmount = true;
      } catch (e) {
        Console.print(e);
      }
    }

    while (!validWinningNum) {
      try {
        winningNum = await Input.getWinningNumbers(INPUT.WINNING_NUM);
        const lotto = new Lotto(winningNum);
        validWinningNum = true;
      } catch (e) {
        Console.print(e);
      }
    }

    while (!validBounsNum) {
      try {
        bonusNum = await Input.getBounsNumber(INPUT.BONUS_NUM);
        const result = new Result(winningNum, bonusNum, amount, lottos);
        await result.printTotalResult();
        validBounsNum = true;
      } catch (e) {
        Console.print(e);
        break;
      }
    }
  }
}

export default App;

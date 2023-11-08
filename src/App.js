import Lotto from './Lotto.js';
import MakeLotto from './MakeLotto.js';
import { Input } from './UI/Input.js';

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
        amount = await Input.getPurchaseAmout();
        const makeLotto = new MakeLotto([1, 2, 3, 4, 5, 6], amount);
        lottos = await makeLotto.makeLottos();
        validAmount = true;
      } catch (e) {}
    }

    while (!validWinningNum) {
      try {
        winningNum = await Input.getWinningNumbers();
        const lotto = new Lotto(winningNum);
        validWinningNum = true;
      } catch (e) {
        Console.print(e);
      }
    }
  }
}

export default App;

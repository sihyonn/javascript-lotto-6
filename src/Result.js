import { Random, Console } from '@woowacourse/mission-utils';

import Validation from './utils/Validation.js';
import Lotto from './Lotto.js';

class Result extends Lotto {
  #bonusNum;
  #amount;
  #lottos;

  constructor(numbers, bonusNum, amount, lottos) {
    super(numbers);
    this.#validate(numbers, bonusNum, amount, lottos);
    this.#bonusNum = parseInt(bonusNum, 10);
    this.#amount = amount;
    this.#lottos = lottos;
  }

  #validate(number, bonusNum, amount, lottos) {
    Validation.validateBonus.validateBonusType(bonusNum);
    Validation.validateBonus.validateBonusDuplicate(
      bonusNum,
      this.getWinningNum
    );
    Validation.validateBonus.validateBonusRange(bonusNum);
  }

  #initializeMatchObj() {
    return {
      three: 0,
      four: 0,
      five: 0,
      bonus: 0,
      six: 0,
    };
  }

  countMatchNumbers(curLotto) {
    const count = curLotto.filter(
      (number) => this.winningNum.includes(number) || this.#bonusNum === number
    ).length;
    return count;
  }
  updateMatchObj(matchObj, count, curLotto) {
    switch (count) {
      case 3:
        matchObj.three += 1;
        break;
      case 4:
        matchObj.four += 1;
        break;
      case 5:
        curLotto.includes(this.#bonusNum)
          ? (matchObj.bonus += 1)
          : (matchObj.five += 1);
        break;
      case 6:
        matchObj.six += 1;
        break;
    }
  }

  async #isMatch() {
    const matchObj = this.#initializeMatchObj();
    this.#lottos = this.countMatchNumbers((curLotto) => {
      const count = this.countMatchNumbers(curLotto);
      this.updateMatchObj(matchObj, count, curLotto);
    });
    return matchObj;
  }
}
export default Result;

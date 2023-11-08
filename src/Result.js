import { Random, Console } from '@woowacourse/mission-utils';

import Validation from './utils/Validation.js';
import Lotto from './Lotto.js';
import { MATCH_AMOUNT } from './constants/NumValues';
import Output from './UI/Output.js';

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

  #validate(numbers, bonusNum, amount, lottos) {
    Validation.validateBonus.validateBonusType(bonusNum);
    Validation.validateBonus.validateBonusDuplicate(bonusNum, numbers);
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
    let count = 0;

    curLotto.forEach((number) => {
      if (this.winningNum.includes(number)) {
        count += 1;
      }
      if (this.#bonusNum.includes(number)) {
        count += 1;
      }
    });
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

    this.#lottos.forEach((curLotto) => {
      const count = this.countMatchNumbers(curLotto);
      this.updateMatchObj(matchObj, count, curLotto);
    });

    return matchObj;
  }

  // 수익률구하기
  calculateRevenue(matchResult, matchAmountObj) {
    let revenue = 0;

    Object.entries(matchResult).forEach(([key, value]) => {
      if (value) {
        revenue += matchAmountObj[key] * value;
      }
    });
    return revenue;
  }

  async #getRateOfReturn() {
    const matchResult = await this.#isMatch();
    const matchAmountObj = {
      three: MATCH_AMOUNT.THREE,
      four: MATCH_AMOUNT.FOUR,
      five: MATCH_AMOUNT.FIVE,
      bonus: MATCH_AMOUNT.FIVE_BONUS,
      six: MATCH_AMOUNT.SIX,
    };

    const revenue = this.calculateRevenue(matchResult, matchAmountObj);
    const rateOfReutrn = (revenue / (this.#amount / 100)).toFixed(1);
    return rateOfReutrn;
  }

  async printTotalResult() {
    Output.printWinningStatistics(await this.#isMatch());
    Output.printRateOfReturn(await this.#getRateOfReturn());
  }
}
export default Result;

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
}
export default Result;

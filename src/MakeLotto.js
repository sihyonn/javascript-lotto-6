import { Random, Console } from '@woowacourse/mission-utils';
import CONSTANT from './constants/constant.js';
import Validation from './utils/Validation.js';
import Lotto from './Lotto.js';
import Validation from './utils/Validation.js';
import Output from './UI/Output.js';

class MakeLotto extends Lotto {
  #amount;
  constructor(number, amount) {
    super(number);
    this.#validate(amount);
    this.#amount = amount;
  }

  #validate(amount) {
    Validation.validatePurchase.validateAmountType(amount);
    Validation.validatePurchase.validateAmount(amount);
  }
}

export default MakeLotto;

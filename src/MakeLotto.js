import { Random, Console } from '@woowacourse/mission-utils';
import CONSTANT from './constants/constant.js';
import Validation from './utils/Validation.js';
import Lotto from './Lotto.js';
import Validation from './utils/Validation.js';
import Output from './UI/Output.js';
import { LOTTO } from './constants/NumValues.js';

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

  #makeLottoList(quantity) {
    let lottoList = [];

    Array.from({ length: quantity }, (_) => {
      const lotto = Random.pickUniqueNumbersInRange(
        LOTTO.MIN,
        LOTTO.MAX,
        LOTTO.LEN
      );
      lottoList.push(lotto);
    });

    Output.printLottoList(lottoList);
    return lottoList;
  }

  async makeLottos() {
    const quantity = this.#amount / LOTTO.UNIT;
    Output.printPurchaseQuantity(quantity);

    const lottos = this.#makeLottoList(quantity);
    Console.print('');

    return lottos;
  }
}

export default MakeLotto;

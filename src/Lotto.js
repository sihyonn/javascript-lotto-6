import Validation from './utils/Validation.js';

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    Validation.validateLotto.validateLottoDuplicate(numbers);
    Validation.validateLotto.validateLottoRange(numbers);
    Validation.validateLotto.validateLottoLength(numbers);
  }

  getWinningNum() {
    return this.#numbers;
  }
}

export default Lotto;

import { ERROR } from '../constants/Messages.js';
import { LOTTO } from '../constants/NumValues.js';

const validatePurchase = {
  validateAmountType(amount) {
    const nonNumCheck = /\D/;
    if (nonNumCheck.test(amount)) throw new Error(ERROR.AMOUNT);
  },

  validateAmount(amount) {
    if (amount % LOTTO.UNIT !== 0) throw new Error(ERROR.AMOUNT);
  },
};

const validateLotto = {
  validateLottoDuplicate(winningNum) {
    const isDuplicate = new Set(winningNum).size !== winningNum.length;
    if (isDuplicate) throw new Error(ERROR.LOTTO_NUM_DUPLICATE);
  },

  validateLottoRange(winningNum) {
    const outOfRange =
      winningNum.filter((n) => n < LOTTO.MIN || n > LOTTO.MAX).length > 0;
    if (outOfRange) throw new Error(ERROR.LOTTO_NUM_RANGE);
  },

  validateLottoLength(winningNum) {
    if (winningNum.length !== LOTTO.LEN)
      throw new Error(ERROR.LOTTO_NUM_LENGTH);
  },
};

const validateBonus = {
  validateBonusType(bonusNum) {
    const nonNumCheck = /\D/;
    if (nonNumCheck.test(bonusNum)) throw new Error(ERROR.BONUS);
  },

  validateBonusDuplicate(bonusNum, winninNum) {
    const isDuplicate = winninNum.includes(bonusNum);
    if (isDuplicate) throw new Error(ERROR.BONUS);
  },

  validateBonusRange(bonusNum) {
    if (bonusNum < 1 || bonusNum > 45) throw new Error(ERROR.BONUS_RANGE);
  },
};

const Validation = {
  validatePurchase,
  validateLotto,
  validateBonus,
};

export default Validation;

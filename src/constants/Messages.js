const INPUT = Object.freeze({
  AMOUNT: '구매 금액을 입력해 주세요\n',
  WINNIN_NUM: '당첨 번호를 입력해 주세요\n',
  BONUS_NUM: '보너스 번호를 입력해 주세요\n',
});

const OUTPUT = Object.freeze({
  PURCHASE: '개를 구매했습니다.',
  WINNING_STATS: '당첨 통계 \n ---\n',
  RESULT: [
    '3개 일치 (5,000원) - ',
    '4개 일치 (50,000원) - ',
    '5개 일치 (1,500,000원) - ',
    '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    '6개 일치 (2,000,000,000원) - ',
  ],
  RETURN_RATE: (returns) => `총 수익률은 ${returns}%입니다.\n`,
});

const ERROR = Object.freeze({
  AMOUNT: '[ERROR] 로또 금액은 1000원 단위로 숫자만 입력해야 합니다!',
  LOTTO_NUM_RANGE:
    '[ERROR] 당첨 번호는 중복없이 1~45사이 정수를 ,로 구분하여 입력해야 합니다!',
  LOTTO_NUM_LENGTH: '[ERROR] 당첨 번호는 6개여야 합니다!',
  BONUS: '[ERROR] 보너스 번호는 당첨 번호와 중복되지 않은 숫자만 가능합니다!',
});

export { INPUT, OUTPUT, ERROR };

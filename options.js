export const keyboardOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: 'Кнопка1', callback_data: '1' },
        { text: 'Кнопка2', callback_data: '2' },
      ],
      [
        { text: 'Кнопка3', callback_data: '3' },
        { text: 'Кнопка4', callback_data: '4' },
      ],
    ],
  }),
}

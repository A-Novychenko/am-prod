export const generateStatusText = (status: OrderStatus) => {
  switch (status) {
    case 'new':
      return 'Замовлення очікує обробку';
    case 'in-progress':
      return 'В обробці';
    case 'done':
      return 'Виконано';
    case 'rejected':
      return 'Відхилено';
    default:
      null;
  }
};

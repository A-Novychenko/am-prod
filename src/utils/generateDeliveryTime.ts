export const generateDeliveryTime = (): string => {
  const dayOfWeek = new Date().getDay(); // 0 (Sunday) - 6 (Saturday)

  // Определяем тип словаря: ключ — число (0-6), значение — строка
  const deliveryTime: Record<number, string> = {
    0: '3 дня', // Sunday
    1: '5 днів', // Monday
    2: '4 дня', // Tuesday
    3: '7 днів', // Wednesday
    4: '6 днів', // Thursday
    5: '5 днів', // Friday
    6: '4 дня', // Saturday
  };

  return deliveryTime[dayOfWeek];
};

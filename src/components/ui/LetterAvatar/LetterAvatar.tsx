import React from 'react';
import { cn } from '@/utils';
import { LetterAvatarProps } from './types';

const colors = [
  'text-red',
  'text-pink-500',
  'text-purple-700',
  'text-indigo-700',
  'text-sky-500',
  'text-teal-600',
  'text-lime-500',
  'text-yellow-400',
  'text-orange-600',
  'text-amber-700',
];

// Функция для получения хеша строки
const getHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
};

const getInitials = (name: string) => {
  if (!name) return '';
  const words = name.trim().split(/\s+/);
  if (words.length === 1) {
    return words[0].slice(0, 10).toUpperCase();
  } else {
    // Возьмём по 2 буквы из каждого слова, максимум 5 слов, с пробелами
    const parts = words.slice(0, 5).map(w => w.slice(0, 2).toUpperCase());
    return parts.join(' ');
  }
};

export const LetterAvatar: React.FC<LetterAvatarProps> = ({
  name,
  size = 50,
  id = 0,
}) => {
  const initials = getInitials(name);
  const baseHash = getHash(name);

  // Чтобы уменьшить похожесть цветов рядом, добавим множитель к id
  const colorIndex = (baseHash + id * 7) % colors.length;
  const colorClass = colors[colorIndex];

  // Размер шрифта подстраиваем под длину текста (учитываем пробелы, поэтому .replace(/\s/g, '') для длины)
  const maxFontSize = size * 0.5;
  const minFontSize = size * 0.15;
  const lengthWithoutSpaces = initials.replace(/\s/g, '').length;
  const fontSize = Math.max(
    minFontSize,
    maxFontSize / Math.sqrt(lengthWithoutSpaces),
  );

  return (
    <span
      className={cn(
        'flex select-none items-center justify-center rounded-full bg-transparent font-sans font-bold',
        colorClass,
      )}
      style={{
        width: size,
        height: size,
        fontSize,
        lineHeight: 1,
        userSelect: 'none',
      }}
      aria-label={`Аватар с инициалами ${initials}`}
      role="img"
      title={name}
    >
      {initials}
    </span>
  );
};

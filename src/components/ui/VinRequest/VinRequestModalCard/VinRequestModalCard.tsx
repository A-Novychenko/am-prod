'use client';

import { useRouter } from 'next/navigation';

import { Contacts } from '@/components/ui';

import { formatDateToUkrainian } from '@/utils';

import { VinRequestModalCardProps } from './types';

export const VinRequestModalCard: React.FC<VinRequestModalCardProps> = ({
  type,
  data,
}) => {
  const router = useRouter();

  const makeData = () => {
    if (data) {
      const {
        number,
        vinCode,
        brand,
        model,
        year,
        engine,
        fuel,
        message,
        name,
        phone,
        createdAt,
      } = data;

      return (
        <>
          {number && (
            <p className="mb-8 text-center text-[20px] font-bold text-green-700">
              VIN-запит №{number}
            </p>
          )}

          <table className="mb-8 smOnly:text-[12px]">
            <colgroup>
              <col className="w-[132px] smOnly:w-[80px]" />
              <col />
            </colgroup>

            <tbody>
              <tr>
                <td colSpan={2}>
                  <strong>Дані про автомобіль:</strong>
                </td>
              </tr>
              {vinCode && (
                <tr>
                  <td>VIN-код</td>
                  <td className="break-all">{vinCode}</td>
                </tr>
              )}
              {brand && (
                <tr>
                  <td>Марка</td>
                  <td>{brand}</td>
                </tr>
              )}
              {model && (
                <tr>
                  <td>Модель</td>
                  <td>{model}</td>
                </tr>
              )}
              {year && (
                <tr>
                  <td>Рік випуску</td>
                  <td>{year}</td>
                </tr>
              )}
              {engine && (
                <tr>
                  <td>Обʼєм двигуна</td>
                  <td>{engine}</td>
                </tr>
              )}
              {fuel && (
                <tr>
                  <td>Тип палива</td>
                  <td>{fuel}</td>
                </tr>
              )}
              {message && (
                <tr>
                  <td>Повідомлення</td>
                  <td>{message}</td>
                </tr>
              )}
            </tbody>
          </table>

          <table className="mb-8 smOnly:text-[12px]">
            <colgroup>
              <col className="w-[132px] smOnly:w-[80px]" />
              <col />
            </colgroup>

            <tbody>
              <tr>
                <td colSpan={2}>
                  <strong>Контактні дані:</strong>
                </td>
              </tr>
              {name && (
                <tr>
                  <td>Імʼя</td>
                  <td>{name}</td>
                </tr>
              )}
              {phone && (
                <tr>
                  <td>Телефон</td>
                  <td className="break-all">{phone}</td>
                </tr>
              )}
              {createdAt && (
                <tr>
                  <td>Час створення</td>
                  <td className="break-all">
                    {formatDateToUkrainian(createdAt)}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      );
    }

    return null;
  };

  return (
    <>
      {type === 'success' && (
        <div className="mx-auto flex max-w-[580px] flex-col gap-2  p-3  text-[16px] md:px-8 md:py-6 smOnly:mb-10 mdOnly:mb-10 mdOnly:w-full">
          <h2 className="text-center font-bold ">
            Ми отримали Ваш запит! Найближчим часом з Вами зв’яжеться наш
            менеджер.
          </h2>

          {makeData()}

          <button
            type="button"
            className="text-secondaryText"
            onClick={() => {
              router.push('/');
            }}
          >
            На головну
          </button>
        </div>
      )}

      {type === 'fail' && (
        <div className="text-center text-[20px] font-bold">
          <h2 className="text-error">Сталася помилка</h2>

          <p className="mb-8  text-error">
            <span className="mb-4 block">
              На жаль, не вдалося надіслати він-запит. Спробуйте ще раз або
              зателефонуйте за телефонами:
            </span>
            <Contacts classNameWrap="text-secondaryText" />
          </p>

          <button
            type="button"
            className="text-base font-normal text-secondaryText"
            onClick={() => {
              router.push('/');
            }}
          >
            На головну
          </button>
        </div>
      )}
    </>
  );
};

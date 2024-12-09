'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export default function YandexMap() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div className="mb-12 h-[400px] bg-gray-100 animate-pulse rounded-lg"></div>
  }

  return (
    <>
      <Script 
        src="https://api-maps.yandex.ru/2.1/?apikey=95542522-5c5e-4a54-8ae1-a6ed175fc2af&lang=ru_RU"
        strategy="lazyOnload"
        onLoad={() => {
          // @ts-ignore
          window.ymaps.ready(() => {
            // Создаем карту
            const map = new window.ymaps.Map('map', {
              center: [61.241622, 73.484903],
              zoom: 15,
            });

            // Создаем маркер
            const placemark = new window.ymaps.Placemark(
              [61.241622, 73.484903], // Координаты маркера
              {
                balloonContent: 'FinTech', // Содержимое balloon
              },
              {
                preset: 'islands#icon', // Предустановленный стиль, можно уточнить
                iconColor: '#0095b6', // Цвет иконки
              }
            );

            // Добавьте маркер на карту
            map.geoObjects.add(placemark);
          });
        }}
      />
      <div id="map" className="mb-12 h-[400px] rounded-lg"></div>
    </>
  )
}

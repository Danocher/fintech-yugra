'use client'
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import dynamic from 'next/dynamic';
import MapaYa from "@/components/YaMap";

const YandexMap = dynamic(() => import('@/components/Map'), {
    ssr: false,
    loading: () => <div className="mb-12 h-[400px] bg-[#43d6fa] animate-pulse rounded-lg"></div>
});

export default function Home(){
  return (
    <div className="min-h-screen">
        <section className="bg-gradient-to-b from-[#5212c0] to-[#26085a] py-16 px-4 sm:px-6 lg:px-8" id="Company">
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                        Центр обработки данных
                    </h1>
                    <p className="text-xl sm:text-2xl font-bold text-white mt-4">
                        Искусственный интеллект
                    </p>
                </div>
                <div className="mt-10 flex flex-col items-center">
                    <div className="transform hover:scale-105 transition-transform duration-300">
                        <Image src={'/Group.svg'} alt="group" width={90} height={90} className="animate-pulse"/>
                    </div>
                    <p className="text-[#43d6fa] font-semibold mt-6 tracking-wide">
                        ЕДИНСТВЕННЫЙ В ХМАО-ЮГРЕ
                    </p>
                </div>
                <div className="mt-12 flex justify-center">
                    <button 
                        className="flex items-center space-x-2 bg-[#43d6fa] hover:bg-[#2bc4eb] text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
                        onClick={() => {
                            // В будущем здесь можно добавить модальное окно или форму
                            toast.success('Спасибо за обращение! Мы свяжемся с вами в ближайшее время.');
                        }}
                    >
                        <Phone className="w-5 h-5 animate-bounce"/>
                        <span className="font-semibold">Заказать звонок</span>
                    </button>
                </div>
            </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="about">
            <h2 className="text-3xl font-bold text-center mb-12">О компании</h2>
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col items-center">
                    <Image src={'/Group.png'} alt="О компании" width={150} height={150} className="mb-8"/>
                    <p className="text-lg text-gray-700 leading-relaxed text-center px-4">
                        Наша компания находится на передовом крае технологий, предлагая передовые решения в области искусственного интеллекта и майнинга. 
                        Мы разрабатываем и производим высокоэффективное оборудование, способное существенно увеличить производительность и эффективность
                        процессов добычи данных. Наша команда экспертов постоянно совершенствует алгоритмы и технологии, чтобы наш продукт соответствовал 
                        самым высоким стандартам индустрии.
                    </p>
                </div>
            </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" id="Ability">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Преимущества</h2>
                <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
                    Мы продаём майнинговое оборудование и шумбоксы
                </p>
                
                <div className="relative h-[400px] sm:h-[500px] max-w-4xl mx-auto">
                    <img src="/Ellipse 2.png" alt="Background" className="absolute inset-0 w-full h-full object-contain"/>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="grid grid-cols-2 gap-8 w-full h-full relative">
                            <div className="flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                                <Image src="/china.png" alt="Майнинг оборудование" width={200} height={200} className="object-contain"/>
                                
                            </div>
                            <div className="flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
                                <Image src="/main.png" alt="Майнинг оборудование" width={200} height={200} className="object-contain"/>
                                <p>Продажа майнингового оборудования</p>
                            </div>
                            <div className="flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300">
                                <Image src="/shum.png" alt="Шумбоксы" width={150} height={150} className="object-contain"/>
                                <p>Продажа шумбоксов</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <h2 className="text-3xl font-bold text-center mb-12" id="Equip">Оборудование</h2>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col items-center">
                            <Image src={'/maining.png'} alt="maining" width={200} height={300} className="mb-6"/>
                            <h3 className="text-xl font-bold mb-4">Майнеры</h3>
                            <p className="text-gray-600 text-center">
                                Подбор и поставка оптимального и эффективного оборудования с учётом конъюнктуры рынка и сложности сети.
                            </p>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                        <div className="flex flex-col items-center">
                            <Image src={'/cont.png'} alt="containers" width={200} height={300} className="mb-6"/>
                            <h3 className="text-xl font-bold mb-4">Контейнеры</h3>
                            <p className="text-gray-600 text-center">
                                Мобильное металлическое помещение, внутри которого созданы условия для работы вычислительного оборудования.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="flex justify-center transform hover:scale-105 transition-transform duration-300">
                            <Image src={'/shum1.png'} alt="shum1" width={200} height={300}/>
                        </div>
                        <div className="flex justify-center transform hover:scale-105 transition-transform duration-300">
                            <Image src={'/shum2.png'} alt="shum2" width={200} height={300}/>
                        </div>
                    </div>
                    <div className="text-center max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold mb-4">Шумбоксы</h3>
                        <p className="text-gray-600">
                            Для асика позволяет установить асик в тех помещениях где нельзя громко шуметь. ШумоБокс для майнера снижает шум с 90 до 55 Дб
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50" id="contacts">
            <h2 className="text-3xl font-bold text-center mb-12" id="Contacts">Контакты</h2>
            <div className="max-w-7xl mx-auto">
              <YandexMap/>
                <div className="text-center space-y-4">
                    <p className="text-xl font-semibold">ООО КБ ФинТех Югра</p>
                    <div className="flex items-center justify-center space-x-2 text-lg">
                        <Mail className="w-6 h-6"/>
                        <a href="mailto:zakroma86@mail.ru" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                            zakroma86@mail.ru
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
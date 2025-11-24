"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import AboutFeature from '@/components/sections/about/AboutFeature';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ChefHat, Heart, Leaf, Users, Award, MessageCircle } from "lucide-react";

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="animatedAurora"
      cardStyle="layered-gradient"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            {name: "Головна", id: "/"},
            {name: "Про нас", id: "/about"},
            {name: "Меню", id: "/menu"},
            {name: "Контакти", id: "/contact"}
          ]}
          brandName="Пузата Хата"
          button={{
            text: "Замовити",
            href: "/contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Справжня Українська Кухня"
          description="Відчуйте смак автентичних українських страв у затишній атмосфері нашого ресторану. Від традиційного борщу до домашніх вареників - кожна страва приготована з любов'ю та за старовинними рецептами."
          tag="З 1995 року"
          tagIcon={ChefHat}
          buttons={[
            {text: "Переглянути меню", href: "/menu"},
            {text: "Забронювати столик", href: "/contact"}
          ]}
          imageSrc="https://pixabay.com/get/gd732bee7c0dd9b6f83dff718813f701e5aeb448c06aae3ea3b3f20c50db8a803f78137d853bf2feaa9915f4f5c864a17a4eef8bbb7964b0094037e7f9feb5755_1280.jpg"
          imageAlt="Інтер'єр ресторану Пузата Хата"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="Ми плекаємо традиції української кухні вже понад 25 років, подаючи справжні домашні страви у теплій сімейній атмосфері. Кожна страва готується з найсвіжіших інгредієнтів за автентичними рецептами наших бабусь."
          features={[
            {
              icon: Heart,
              title: "Сімейні рецепти",
              description: "Усі наші страви готуються за традиційними рецептами, що передаються з покоління в покоління в українських сім'ях."
            },
            {
              icon: Leaf,
              title: "Свіжі інгредієнти",
              description: "Використовуємо лише найсвіжіші сезонні продукти від місцевих фермерів та перевірених постачальників."
            },
            {
              icon: Users,
              title: "Родинна атмосфера",
              description: "Створюємо затишну атмосферу, де кожен гість відчуває себе як вдома, в колі рідної української родини."
            },
            {
              icon: Award,
              title: "Високі стандарти",
              description: "Підтримуємо найвищі стандарти якості обслуговування та приготування страв, отримуючи визнання гостей та критиків."
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Відгуки наших гостей"
          description="Що говорять про нас відвідувачі ресторану"
          tag="Відгуки"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Марія Коваленко",
              role: "Постійна відвідувачка",
              testimonial: "Найкращий український ресторан у місті! Борщ як у бабусі, а вареники просто неперевершені. Завжди тепла атмосфера та чудове обслуговування.",
              imageSrc: "https://pixabay.com/get/g214298104301e61251168ca806fd7ce814d2d6698952ced961bf9f4a0d6c7dfcdab08cd884f6b1da2e2d6a720a9c3648e787cad671290d698f71b5c246b893c3_1280.jpg",
              imageAlt: "Марія Коваленко"
            },
            {
              id: "2",
              name: "Олександр Петренко",
              role: "Бізнесмен",
              testimonial: "Часто проводжу тут ділові зустрічі. Якість їжі завжди на висоті, а бізнес-ланчі дуже вигідні. Рекомендую всім, хто цінує справжню українську кухню.",
              imageSrc: "https://pixabay.com/get/g7203f3aa5b722efe9181d24d7b3f5e12de440b0f72c0dd835724b3e395282908ee8f22be3e78bfc0b2f58d515b16b92e5534d9384a0a96d967e129c5cdd0b4c4_1280.jpg",
              imageAlt: "Олександр Петренко"
            }
          ]}
        />
      </div>

      <FooterBase
        logoText="Пузата Хата"
        copyrightText="© 2024 | Пузата Хата - Справжня Українська Кухня"
        columns={[
          {
            title: "Меню",
            items: [
              {label: "Закуски", href: "/menu"},
              {label: "Перші страви", href: "/menu"},
              {label: "Основні страви", href: "/menu"},
              {label: "Десерти", href: "/menu"}
            ]
          },
          {
            title: "Ресторан",
            items: [
              {label: "Про нас", href: "/about"},
              {label: "Відгуки", href: "/"},
              {label: "Контакти", href: "/contact"},
              {label: "Бронювання", href: "/contact"}
            ]
          },
          {
            title: "Контакти",
            items: [
              {label: "м. Київ, вул. Хрещатик 15", href: "#"},
              {label: "+38 (044) 123-45-67", href: "tel:+380441234567"},
              {label: "info@puzata-hata.ua", href: "mailto:info@puzata-hata.ua"},
              {label: "10:00 - 22:00 щодня", href: "#"}
            ]
          }
        ]}
      />
    </ThemeProvider>
  );
}
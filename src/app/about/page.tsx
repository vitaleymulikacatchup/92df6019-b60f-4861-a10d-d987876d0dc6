"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Heart, Leaf, Users, Award } from "lucide-react";

export default function AboutPage() {
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
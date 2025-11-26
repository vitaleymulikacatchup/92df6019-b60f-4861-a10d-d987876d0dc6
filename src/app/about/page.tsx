"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import AboutFeature from '@/components/sections/about/AboutFeature';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Heart, Leaf, Users, Award, Twitter, Linkedin, Globe } from "lucide-react";

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

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Наша команда"
          description="Познайомтеся з людьми, які створюють неповторну атмосферу Пузатої Хати"
          tag="Команда"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Олександра Петренко",
              role: "Шеф-кухар",
              description: "Понад 15 років досвіду в українській кухні. Зберігає автентичність рецептів та впроваджує сучасні техніки приготування.",
              imageSrc: "https://pixabay.com/get/g214298104301e61251168ca806fd7ce814d2d6698952ced961bf9f4a0d6c7dfcdab08cd884f6b1da2e2d6a720a9c3648e787cad671290d698f71b5c246b893c3_1280.jpg",
              imageAlt: "Олександра Петренко, шеф-кухар",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "2",
              name: "Михайло Коваль",
              role: "Менеджер ресторану",
              description: "Відповідає за якість обслуговування та створює комфортну атмосферу для всіх гостей ресторану.",
              imageSrc: "https://pixabay.com/get/g7203f3aa5b722efe9181d24d7b3f5e12de440b0f72c0dd835724b3e395282908ee8f22be3e78bfc0b2f58d515b16b92e5534d9384a0a96d967e129c5cdd0b4c4_1280.jpg",
              imageAlt: "Михайло Коваль, менеджер ресторану",
              socialLinks: [
                { icon: Globe, url: "https://example.com" },
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "3",
              name: "Катерина Савченко",
              role: "Су-шеф",
              description: "Молода та талановита кухарка, яка поєднує традиційні українські рецепти з сучасними тенденціями.",
              imageSrc: "https://pixabay.com/get/g6bb54cf3e0a3e0b5f7e9c58a3a5b5e35fc77b8e4e9b9c4c8c4b4e4e4b7b4e4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4e4b4_1280.jpg",
              imageAlt: "Катерина Савченко, су-шеф",
              socialLinks: [
                { icon: Twitter, url: "https://twitter.com" },
                { icon: Globe, url: "https://example.com" }
              ]
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
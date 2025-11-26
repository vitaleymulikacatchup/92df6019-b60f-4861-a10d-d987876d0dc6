"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ChefHat, Users, Heart, Award } from "lucide-react";

export default function TeamPage() {
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
            {name: "Команда", id: "/team"},
            {name: "Контакти", id: "/contact"}
          ]}
          brandName="Пузата Хата"
          button={{
            text: "Замовити",
            href: "/contact"
          }}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Наша команда шеф-кухарів"
          description="Познайомтеся з майстрами української кухні, які створюють для вас справжні кулінарні шедеври за традиційними рецептами"
          tag="Команда"
          tagIcon={ChefHat}
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Олена Петрівна Гавриш",
              role: "Головний шеф-кухар",
              description: "Понад 30 років досвіду в українській кухні. Зберігає автентичність традиційних рецептів і навчає молодих кухарів секретам справжнього борщу та вареників.",
              imageSrc: "https://pixabay.com/get/gda3b6e30a7c8a6b8bb1bb4e36c1cf9a79a94978ac8fcfed5de0e4a0cda948e7db1e7f6bc18e0b9a7d15b1c65d9e9d1a938a9a24d4c03c6c5c6b3d5ce1c5cd0a_1280.jpg",
              imageAlt: "Портрет Олени Петрівни Гавриш"
            },
            {
              id: "2",
              name: "Андрій Васильович Коваль",
              role: "Су-шеф",
              description: "Спеціаліст з м'ясних страв та традиційних українських закусок. Досконало володіє технікою приготування котлети по-київськи та інших фірмових страв ресторану.",
              imageSrc: "https://pixabay.com/get/g47b0ba98ba6b2c9dc3f4c9bec01c8b7a9f4a2b6c5d8c6d8d6b4a2c9f7a3d8c6d9e1c5a3b7d9c6b4a5c8d2e7f1b3c9d6a5b8c7d4e2f9a6b3c5d8e1f4a7b9c2_1280.jpg",
              imageAlt: "Портрет Андрія Васильовича Коваля"
            },
            {
              id: "3",
              name: "Марія Іванівна Ткач",
              role: "Кухар-кондитер",
              description: "Майстриня традиційних українських десертів та випічки. Готує найсмачніші сирники, млинці з різними начинками та домашні торти за бабусиними рецептами.",
              imageSrc: "https://pixabay.com/get/ga4f2c8e1a9c7d3f8b5a2c9e7f3d6b4a5c8e1f7d9b2c5a8e4f1d6b9c3a7e5f2d8b1c4a6e9f3d7b5c2a8e6f4d1b9c7a3e5f8d2b6c4a9e1f5d7b3c8a2e6f9_1280.jpg",
              imageAlt: "Портрет Марії Іванівни Ткач"
            },
            {
              id: "4",
              name: "Віктор Миколайович Бондар",
              role: "Кухар гарячого цеху",
              description: "Відповідальний за приготування перших страв та гарячих закусок. Його борщ та солянка славляться далеко за межами ресторану своїм неповторним смаком.",
              imageSrc: "https://pixabay.com/get/g7c4a2b9e3d6f1a8c5e2d7b4f9a3c6e8d1f5b7c2a9e4d6f8b1c3a5e7d9f2b4c6a8e3d5f1b9c7a2e6d4f8b5c1a3e9d7f6b2c4a8e5d1f3b9c6a7e2d4f8_1280.jpg",
              imageAlt: "Портрет Віктора Миколайовича Бондаря"
            }
          ]}
        />
      </div>

      <FooterBase
        logoText="Пузата Хата"
        copyrightText="© 2024 | Пузата Хата - Справжня Українська Кухня"
        columns={[
          {
            title: "Ресторан",
            items: [
              {label: "Про нас", href: "/about"},
              {label: "Команда", href: "/team"},
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
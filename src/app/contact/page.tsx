"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';

export default function ContactPage() {
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

      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Забронюйте столик"
          description="Зв'яжіться з нами для бронювання столика або замовлення страв на винос. Ми працюємо щодня з 10:00 до 22:00."
          buttonText="Відправити заявку"
          inputs={[
            {name: "name", type: "text", placeholder: "Ваше ім'я", required: true},
            {name: "phone", type: "tel", placeholder: "Номер телефону", required: true},
            {name: "email", type: "email", placeholder: "Email", required: false}
          ]}
          textarea={{
            name: "message",
            placeholder: "Побажання до замовлення або бронювання...",
            rows: 4,
            required: false
          }}
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
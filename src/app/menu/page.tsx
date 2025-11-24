"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import FooterBase from '@/components/sections/footer/FooterBase';
import { UtensilsCrossed, Percent, DollarSign, Star, Newspaper } from "lucide-react";

export default function MenuPage() {
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

      <div id="menu" data-section="menu">
        <FeatureCardNine
          title="Наші фірмові страви"
          description="Скуштуйте найкращі українські страви, приготовані за автентичними рецептами"
          tag="Меню"
          tagIcon={UtensilsCrossed}
          textboxLayout="default"
          showStepNumbers={false}
          features={[
            {
              id: "1",
              title: "Червоний борщ з пампушками",
              description: "Традиційний український борщ на м'ясному бульйоні з свіжою капустою, буряком та сметаною. Подається з ароматними пампушками з часником.",
              phoneOne: {
                imageSrc: "https://pixabay.com/get/gc49263d57995784486811d9620bad401b36b855f03ca462487443a89ca8a1e3e874cd1172c6459f0bd59fb88d0139ad1d95fdf9dd95fad9ed0270ce92c84adf3_1280.jpg",
                imageAlt: "Червоний борщ з пампушками"
              },
              phoneTwo: {
                imageSrc: "https://pixabay.com/get/gc49263d57995784486811d9620bad401b36b855f03ca462487443a89ca8a1e3e874cd1172c6459f0bd59fb88d0139ad1d95fdf9dd95fad9ed0270ce92c84adf3_1280.jpg",
                imageAlt: "Борщ крупним планом"
              }
            },
            {
              id: "2",
              title: "Домашні вареники",
              description: "Ніжні вареники з картоплею, сиром, капустою або м'ясом. Ліплені вручну за традиційним рецептом та подаються зі сметаною і цибулькою.",
              phoneOne: {
                imageSrc: "https://pixabay.com/get/g1075429d2a70549cdc69d017262dc6719e6b2c80f4e72ae82651ff9621ba31037706f6957c13da82c7cdf8eba2d710aae92bbacf6c835d7ba931f581cd3495e3_1280.jpg",
                imageAlt: "Домашні вареники"
              },
              phoneTwo: {
                imageSrc: "https://pixabay.com/get/g1075429d2a70549cdc69d017262dc6719e6b2c80f4e72ae82651ff9621ba31037706f6957c13da82c7cdf8eba2d710aae92bbacf6c835d7ba931f581cd3495e3_1280.jpg",
                imageAlt: "Вареники з начинкою"
              }
            },
            {
              id: "3",
              title: "Котлета по-київськи",
              description: "Знаменита котлета з курячої грудинки з вершковим маслом та зеленню всередині. Подається з картопляним пюре та овочевим салатом.",
              phoneOne: {
                imageSrc: "https://pixabay.com/get/g6a2e1b665150550ef39926d861b76642cce3ff9c00853e32081c69a6603d70e715ca9eddf2e705ce9e3c8e356e907ce5ab5034e629c13f413e794253cf8b30fe_1280.jpg",
                imageAlt: "Котлета по-київськи"
              },
              phoneTwo: {
                imageSrc: "https://pixabay.com/get/g6a2e1b665150550ef39926d861b76642cce3ff9c00853e32081c69a6603d70e715ca9eddf2e705ce9e3c8e356e907ce5ab5034e629c13f413e794253cf8b30fe_1280.jpg",
                imageAlt: "Котлета в розрізі"
              }
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Наші комбо-набори"
          description="Популярні комбінації страв за вигідними цінами"
          tag="Акції"
          tagIcon={Percent}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "combo-1",
              name: "Традиційний обід",
              price: "240 грн",
              imageSrc: "https://pixabay.com/get/g139325fd10ea9f506a70641768edef18cad040edcda7515fb5f03de463dde96127ae5be739d66fa3f71845e3c28a54920320ace376a2c8ed0a48398f1bb17f6c_1280.jpg",
              imageAlt: "Традиційний українській обід"
            },
            {
              id: "combo-2",
              name: "Бізнес-ланч",
              price: "180 грн",
              imageSrc: "https://pixabay.com/get/g7391fa954732fb7a97e85b527de5b8985e3760fed5d62da51e0b041482e04288f6c625f805911c88ce22f3e619f1454334f92aeb90a6049cc3e499c308a6fe5f_1280.jpg",
              imageAlt: "Бізнес-ланч"
            },
            {
              id: "combo-3",
              name: "Сімейна вечеря",
              price: "520 грн",
              imageSrc: "https://pixabay.com/get/ge9af20eb112702a79bae6dc1c74a8d40b75b1ea99b99c7dfe998e83aaee3676d23cb2881f724513683444eb18b4cb430abd8691965342924c4bb5572c00e2746_1280.jpg",
              imageAlt: "Сімейна вечеря на 4 персони"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Наші пропозиції"
          description="Оберіть найкращий варіант для вашого смаку та бюджету"
          tag="Ціни"
          tagIcon={DollarSign}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "appetizer",
              price: "80-120 грн",
              name: "Закуски",
              buttons: [
                {text: "Замовити", href: "/contact"},
                {text: "Детальніше", href: "/menu"}
              ],
              features: [
                "Сало з чорним хлібом",
                "Селедка під шубою",
                "Домашня ковбаса",
                "Маринований огурок"
              ]
            },
            {
              id: "main-course",
              badge: "Популярні страви",
              badgeIcon: Star,
              price: "180-280 грн",
              name: "Основні страви",
              buttons: [
                {text: "Замовити", href: "/contact"},
                {text: "Детальніше", href: "/menu"}
              ],
              features: [
                "Борщ червоний",
                "Вареники (6 шт)",
                "Котлета по-київськи",
                "Голубці з м'ясом"
              ]
            },
            {
              id: "dessert",
              price: "60-90 грн",
              name: "Десерти",
              buttons: [
                {text: "Замовити", href: "/contact"},
                {text: "Детальніше", href: "/menu"}
              ],
              features: [
                "Сирники з варенням",
                "Медівник домашній",
                "Вареники з вишнями",
                "Налисники з творогом"
              ]
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Нас рекомендують"
          description="Провідні кулінарні видання та блогери високо оцінюють нашу кухню"
          tag="Преса про нас"
          tagIcon={Newspaper}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g5480e2cea6c89d005b2b931879500078394e41a40083c4a87089be0b001e42bbd4fd08183bac555dcfa9f2cbf3a30749c360b5f73d50afb922414e3e188495e1_1280.jpg",
            "https://pixabay.com/get/gf704efa142e4ab3e3fd95b7519d8612abf91dcb91b076d1e5e47682a44fba9c162c85b97b0801ce6c232d0f73ab5da79d09ae1de9316e24802884203b3ea5e1f_1280.jpg",
            "https://pixabay.com/get/g45be88953c35d1be6e28fad4e9f7b8866a24937dba9db36ba2a661862597450b8d40bb6ab22dd13896940c51d36cfc47b6a650957ac1fc49d6e9527607001256_1280.jpg",
            "https://pixabay.com/get/g0f8d4640c335f17e1057fe1964beeb22ce4803cdc44e901fe4628c7bffacddaffdefe7b27993999b3dca415f6c6c02ffd8e398ea57b086e199617b67020f1f1a_1280.jpg",
            "https://pixabay.com/get/g7eac6fc923347a6e00c69ba0815c6f1c31496a1c821a06a340424f5591ec2e16f4796fa700e6b8cb15cd72084b8d52d0c541f43df222b572a0666d527ac18df3_1280.jpg"
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
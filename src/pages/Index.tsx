import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/3476ac62-03a0-427b-b3d0-92704f916941/files/27b7de7a-64a6-4047-9af0-ba1bd57f58e4.jpg",
      title: "Обеденный стол",
      material: "Массив дуба, металл",
    },
    {
      image: "https://cdn.poehali.dev/projects/3476ac62-03a0-427b-b3d0-92704f916941/files/5cbcd454-ed8f-4d28-a911-acaf249ed5b5.jpg",
      title: "Стеллаж лофт",
      material: "Фанера, металлический каркас",
    },
    {
      image: "https://cdn.poehali.dev/projects/3476ac62-03a0-427b-b3d0-92704f916941/files/ab14923e-0a79-49c6-b481-26215f07e30b.jpg",
      title: "Рабочий стол",
      material: "Массив ясеня",
    },
  ];

  const services = [
    {
      icon: "Ruler",
      title: "Мебель по проекту",
      description: "Воплотим любую вашу идею в реальность",
    },
    {
      icon: "Hammer",
      title: "Стиль лофт",
      description: "Специализация на индустриальном дизайне",
    },
    {
      icon: "Sparkles",
      title: "Любой бюджет",
      description: "Подберем решение под ваши возможности",
    },
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Festool",
      description: "Профессиональный инструмент для точности",
    },
    {
      icon: "TreePine",
      title: "Натуральное дерево",
      description: "Массив и фанера премиум качества",
    },
    {
      icon: "Shield",
      title: "Гарантия качества",
      description: "Каждое изделие проверено мастером",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">Столярная мастерская</h1>
          <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Заказать
          </Button>
        </div>
      </header>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Мебель из дерева<br />в стиле лофт
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Создаём уникальные предметы интерьера из массива и фанеры. Работаем на профессиональном оборудовании Festool.
            </p>
            <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Обсудить проект
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30" id="portfolio">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Наши работы
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.material}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Услуги
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon} size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            Почему мы
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name={advantage.icon} size={24} className="text-accent" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{advantage.title}</h4>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Оставьте заявку
            </h3>
            <p className="text-center text-muted-foreground mb-8">
              Свяжемся с вами в течение часа и обсудим детали проекта
            </p>
            <Card className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Телефон
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Опишите ваш проект
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о том, что хотите заказать"
                    rows={4}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">© 2024 Столярная мастерская</p>
            <div className="flex gap-6">
              <a href="tel:+79991234567" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                <Icon name="Phone" size={20} />
                <span>+7 (999) 123-45-67</span>
              </a>
              <a href="mailto:info@example.com" className="text-muted-foreground hover:text-foreground flex items-center gap-2">
                <Icon name="Mail" size={20} />
                <span>info@example.com</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

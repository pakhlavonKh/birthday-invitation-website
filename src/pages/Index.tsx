import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import partyHero from "@/assets/party-hero.jpg";
import partyTiming from "@/assets/party-timing.jpg";
import partyLocation from "@/assets/party-location.jpg";
import partyVibe from "@/assets/party-vibe.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ImageCard = ({ src, alt }: any) => (
  <div className="relative group overflow-hidden rounded-2xl shadow-xl">
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
  </div>
);

const Section = ({ title, children }: any) => (
  <motion.section
    variants={fadeUp}
    className="mb-20"
  >
    <p className="text-center text-6xl md:text-7xl italic text-muted-foreground/10 select-none">
      {title}
    </p>
    <h2 className="text-center text-3xl md:text-4xl italic -mt-6 mb-10">
      {title}
    </h2>
    {children}
  </motion.section>
);

export default function Index() {
  // COUNTDOWN
  const targetDate = new Date("2024-10-13T18:00:00");
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(targetDate.getTime() - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.max(0, Math.floor(time / (1000 * 60 * 60 * 24)));

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#f5e6da,transparent_40%),radial-gradient(circle_at_80%_30%,#e8cfc0,transparent_40%)] animate-pulse" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-6 py-12"
      >

        {/* HERO GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
          
          <motion.div variants={fadeUp}>
            <p className="text-7xl md:text-8xl italic text-muted-foreground/10">
              Birthday
            </p>
            <h1 className="text-4xl md:text-6xl italic -mt-6 mb-6">
              Birthday Party
            </h1>

            <p className="text-lg italic text-muted-foreground mb-6">
              13 / 10 / 2024
            </p>

            {/* Countdown */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                До праздника
              </p>
              <p className="text-3xl font-bold">{days} дней</p>
            </div>

            <p className="text-sm leading-relaxed max-w-md">
              Дорогие друзья! Приглашаю вас отпраздновать мой День рождения.
              Вас ждёт вкусная еда, веселье и отличное настроение.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <ImageCard src={partyHero} alt="Hero" />
          </motion.div>
        </div>

        {/* TIMING */}
        <Section title="Timing">
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto mb-10">
            {[
              { label: "Сбор гостей", time: "18:00" },
              { label: "Начало", time: "18:30" },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl border hover:shadow-lg transition"
              >
                <p className="text-xs uppercase text-muted-foreground">
                  {item.label}
                </p>
                <p className="text-2xl font-bold">{item.time}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <ImageCard src={partyTiming} alt="Timing" />
          </div>
        </Section>

        {/* LOCATION */}
        <Section title="Location">
          <div className="text-center mb-6">
            <p className="text-muted-foreground">Кафе</p>
            <p className="text-xl italic">City Dance Club</p>
          </div>

          <p className="text-center text-sm text-muted-foreground mb-8">
            Замоскворецкая ул. д.12, Москва
          </p>

          <div className="max-w-2xl mx-auto mb-8">
            <ImageCard src={partyLocation} alt="Location" />
          </div>

          {/* MAP */}
          <div className="max-w-2xl mx-auto">
            <iframe
              src="https://maps.google.com/maps?q=Москва Замоскворецкая 12&output=embed"
              className="w-full h-64 rounded-xl border"
            />
          </div>
        </Section>

        {/* VIBE */}
        <Section title="Dress Code">
          <p className="text-center max-w-xl mx-auto mb-8">
            Элегантный шик. Праздничные наряды приветствуются.
          </p>

          <div className="flex justify-center gap-3 mb-10">
            {[
              "#f5e6da",
              "#d8c3b5",
              "#7a3b3b",
              "#2a2a2a",
              "#faf3ee",
            ].map((color, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full shadow hover:scale-110 transition"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <ImageCard src={partyVibe} alt="Vibe" />
          </div>
        </Section>

        {/* RSVP */}
        <Section title="RSVP">
          <form
            className="max-w-md mx-auto flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Спасибо!");
            }}
          >
            <input
              placeholder="Ваше имя"
              required
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary outline-none"
            />
            <input
              placeholder="Телефон"
              className="border rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary outline-none"
            />
            <button className="bg-secondary text-white py-3 rounded-lg hover:scale-[1.02] active:scale-[0.98] transition">
              Подтвердить
            </button>
          </form>
        </Section>

        {/* FOOTER */}
        <div className="text-center text-sm text-muted-foreground mt-20">
          До встречи ❤
        </div>

      </motion.div>

    </div>
  );
}
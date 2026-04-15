import partyHero from "@/assets/party-hero.jpg";
import partyTiming from "@/assets/party-timing.jpg";
import partyLocation from "@/assets/party-location.jpg";
import partyVibe from "@/assets/party-vibe.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-md px-6 py-12">
        
        {/* Watermark text */}
        <p className="text-center font-heading text-8xl font-light italic text-muted-foreground/20 leading-none select-none">
          Birthday Party
        </p>

        {/* Title */}
        <h1 className="text-center font-heading text-5xl italic font-light text-foreground -mt-6 mb-8">
          Birthday Party
        </h1>

        {/* Hero Image */}
        <div className="mb-8 px-4">
          <div className="border-[6px] border-secondary p-1">
            <img 
              src={partyHero} 
              alt="Birthday celebration" 
              className="w-full object-cover"
              width={800}
              height={1000}
            />
          </div>
        </div>

        {/* Date */}
        <p className="text-center font-heading text-xl italic text-muted-foreground mb-10">
          13/10/2024
        </p>

        {/* Invitation Text */}
        <div className="text-center px-4 mb-12">
          <p className="font-body text-sm leading-relaxed text-foreground mb-4">
            Дорогие друзья! Совсем скоро наступает настоящая именинная 
            пора для меня — мне исполняется целых 6 лет! И без вашего 
            тепла и участия этот день будет не таким ярким, поэтому 
            приглашаю вас вместе отпраздновать мой День рождения!
          </p>
          <p className="font-body text-sm leading-relaxed text-foreground mb-4">
            Мы обещаем вас вкусно покормить!
          </p>
          <p className="font-body text-sm italic text-muted-foreground">
            Подробности вы найдете ниже ↓
          </p>
        </div>

        {/* Timing Section */}
        <div className="mb-12">
          <p className="text-center font-heading text-7xl font-light italic text-muted-foreground/20 leading-none select-none mb-0">
            Timing
          </p>
          <h2 className="text-center font-heading text-4xl italic font-light text-foreground -mt-4 mb-8">
            Timing
          </h2>

          <div className="flex justify-center gap-12 mb-8">
            <div className="text-center">
              <p className="font-heading text-sm uppercase tracking-widest text-muted-foreground mb-1">Сбор гостей</p>
              <p className="font-heading text-2xl text-foreground">18:00</p>
            </div>
            <div className="text-center">
              <p className="font-heading text-sm uppercase tracking-widest text-muted-foreground mb-1">Начало</p>
              <p className="font-heading text-2xl text-foreground">18:30</p>
            </div>
          </div>

          <div className="px-4">
            <div className="border-[6px] border-secondary p-1">
              <img 
                src={partyTiming} 
                alt="Dinner table setting" 
                className="w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-12">
          <p className="text-center font-heading text-7xl font-light italic text-muted-foreground/20 leading-none select-none mb-0">
            Location
          </p>
          <h2 className="text-center font-heading text-4xl italic font-light text-foreground -mt-4 mb-6">
            Location
          </h2>

          <div className="text-center mb-6">
            <p className="font-body text-sm text-muted-foreground mb-1">Праздник пройдет в кафе</p>
            <p className="font-heading text-xl text-foreground italic">City Dance Club</p>
          </div>

          <div className="text-center mb-8">
            <p className="font-body text-xs text-muted-foreground mb-3">
              Он находится по адресу<br />
              Замоскворецкая ул. д.12, Москва
            </p>
          </div>

          <div className="px-4">
            <div className="border-[6px] border-secondary p-1">
              <img 
                src={partyLocation} 
                alt="Party location" 
                className="w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>

        {/* Holiday Vibe Section */}
        <div className="mb-12">
          <p className="text-center font-heading text-7xl font-light italic text-muted-foreground/20 leading-none select-none mb-0">
            Holiday vibe
          </p>
          <h2 className="text-center font-heading text-4xl italic font-light text-foreground -mt-4 mb-8">
            Holiday vibe
          </h2>

          <div className="text-center px-4 mb-8">
            <p className="font-body text-sm leading-relaxed text-foreground">
              Для моего праздника — повод надеть праздничный наряд! 
              Я очень надеюсь встретить вас в нарядах и хорошем настроении! 
              Пожалуйста, придерживайтесь, пожалуйста стиля «элегантный шик» — и мы 
              погрузимся в атмосферу настоящего праздника.
            </p>
          </div>

          {/* Dress code palette */}
          <div className="flex justify-center gap-3 mb-8">
            {['hsl(36, 33%, 90%)', 'hsl(30, 20%, 80%)', 'hsl(348, 25%, 32%)', 'hsl(20, 12%, 20%)', 'hsl(36, 15%, 95%)'].map((color, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border border-border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          <div className="px-4">
            <div className="border-[6px] border-secondary p-1">
              <img 
                src={partyVibe} 
                alt="Friends at the party" 
                className="w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8">
          <p className="font-body text-xs text-muted-foreground mb-2">
            Подтвердить, что вы придете, пожалуйста, заранее ❤
          </p>
          <p className="font-body text-xs text-muted-foreground italic mt-4">
            До встречи! ХОХО
          </p>
        </div>

      </div>
    </div>
  );
};

export default Index;

"use client";
import styled from "styled-components";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Section = styled.section`
  padding: 4rem 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  direction: ltr; // Set direction to LTR for the carousel
`;

const Title = styled.h2`
  color: var(--color-primary);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  direction: rtl; // Keep text RTL
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  direction: rtl; // Keep text RTL
`;

const TestimonialCard = styled.div`
  background: var(--color-background);
  padding: 2.5rem 2rem;
  border-radius: 1.25rem;
  box-shadow: 0 4px 24px rgba(27, 42, 73, 0.08);
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  min-height: 280px; // Set a min-height for consistent card size
  direction: rtl;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
`;

const QuoteIcon = styled.div`
  background: var(--color-cta);
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const Stars = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const Star = styled(FaStar)`
  color: #ffd700;
  font-size: 1.1rem;
`;

const TestimonialText = styled.p`
  font-size: 1.1rem;
  color: var(--color-text);
  line-height: 1.6;
  font-style: italic;
  flex-grow: 1; // Allow text to take up available space
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto; // Push to the bottom
  padding-top: 1rem;
`;

const ClientAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-cta) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ClientDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClientName = styled.h4`
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0;
`;

const ClientPosition = styled.p`
  color: var(--color-text);
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.8;
`;

const CompanyName = styled.p`
  color: var(--color-accent);
  font-weight: 600;
  font-size: 0.9rem;
  margin: 0;
`;

const SwiperContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  padding: 0 50px; /* Create space for arrows */
  box-sizing: border-box; /* Ensure padding is calculated as part of the total width */

  .swiper {
    /* Swiper's main container. Let's ensure it doesn't have conflicting positioning */
    position: static;
  }
  
  .swiper-slide {
    height: auto;
    padding-bottom: 50px;
  }

  .swiper-pagination-bullet {
    background: var(--color-primary);
    width: 12px;
    height: 12px;
  }

  .swiper-pagination-bullet-active {
    background: var(--color-accent);
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--color-primary);
    background-color: #ffffff;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    transition: all 0.2s ease;
    top: 50%;
    transform: translateY(-70%); // Adjust for pagination space

    &:after {
        font-size: 0.9rem;
        font-weight: 900;
    }

    &:hover {
      color: var(--color-accent);
      background-color: var(--color-background);
    }
  }

  .swiper-button-prev {
    left: 0px; /* Position in left padding */
  }
  .swiper-button-next {
    right: 0px; /* Position in right padding */
  }

  @media (max-width: 768px) {
    padding: 0; /* Remove padding when arrows are hidden */
    .swiper-button-next,
    .swiper-button-prev {
      display: none; /* Hide arrows on small mobile to prevent overlap */
    }
  }
`;

const testimonials = [
  {
    id: 1,
    text: "eTechlo הפכה את החזון שלנו למציאות. הצוות המקצועי שלהם בנה לנו מערכת ניהול מתקדמת שחוסכת לנו שעות עבודה בכל שבוע. התקשורת הייתה מצוינת והתוצאה מעבר לציפיות.",
    name: "דוד כהן",
    position: "מנכ\"ל",
    company: "טכנולוגיות מתקדמות בע\"מ",
    rating: 5
  },
  {
    id: 2,
    text: "עבדנו עם eTechlo על פרויקט מורכב של אוטומציה עסקית. הם הבינו בדיוק מה אנחנו צריכים והעבירו אותנו תהליך מקצועי ומסודר. התוצאה מדהימה - חיסכון של 40% בזמן עיבוד.",
    name: "שרה לוי",
    position: "מנהלת IT",
    company: "חברת ייצור גלובלית",
    rating: 5
  },
  {
    id: 3,
    text: "האתר החדש ש-eTechlo בנתה עבורנו הביא לעלייה של 60% בהמרות. העיצוב מודרני, מהיר ומותאם למובייל. הצוות היה זמין לכל שאלה ותמיכה לאורך כל התהליך.",
    name: "מיכאל רוזנברג",
    position: "מנהל שיווק",
    company: "רשת קמעונאית ישראלית",
    rating: 5
  },
  {
    id: 4,
    text: "eTechlo סיפקו לנו ייעוץ טכנולוגי מעולה שעזר לנו לבחור את הפתרון הנכון לעסק שלנו. הם לא רק מוכרים שירותים - הם שותפים אמיתיים להצלחה שלנו.",
    name: "נועה אברהם",
    position: "מייסדת",
    company: "סטארט-אפ חדשני",
    rating: 5
  },
  {
    id: 5,
    text: "המערכת הפנימית ש-eTechlo פיתחה עבורנו שינתה את הדרך שבה אנחנו עובדים. התהליך היה חלק, מקצועי והתוצאה מעולה. ממליץ בחום לכל עסק שמחפש פתרונות טכנולוגיים.",
    name: "יוסי שפירא",
    position: "מנהל תפעול",
    company: "חברת לוגיסטיקה",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, index) => (
      <Star key={index} />
    ));
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Section id="testimonials">
      <Title>מה הלקוחות שלנו אומרים</Title>
      <Subtitle>
        אנחנו גאים בשותפויות ארוכות טווח עם לקוחות מרוצים. הנה מה שיש להם לומר על העבודה שלנו.
      </Subtitle>
      <SwiperContainer>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard>
                <CardHeader>
                  <QuoteIcon>
                    <FaQuoteLeft />
                  </QuoteIcon>
                  <Stars>
                    {renderStars(testimonial.rating)}
                  </Stars>
                </CardHeader>

                <TestimonialText>
                  <q>{testimonial.text}</q>
                </TestimonialText>

                <ClientInfo>
                  <ClientAvatar>
                    {getInitials(testimonial.name)}
                  </ClientAvatar>
                  <ClientDetails>
                    <ClientName>{testimonial.name}</ClientName>
                    <ClientPosition>{testimonial.position}</ClientPosition>
                    <CompanyName>{testimonial.company}</CompanyName>
                  </ClientDetails>
                </ClientInfo>
              </TestimonialCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </Section>
  );
} 

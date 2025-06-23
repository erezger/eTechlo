import styled from "styled-components";
import { Section } from "./shared/Section";
import { SectionTitle } from "./shared/SectionTitle";
import { Container } from "./shared/Container";
import { Card as BaseCard } from "./shared/Card";

export { Section, SectionTitle, Container };

export const Card = BaseCard;

export const TestimonialCard = styled(BaseCard)`
  padding: 2rem 1.5rem;
  border-radius: 2rem;
  box-shadow: 0 6px 32px rgba(27, 42, 73, 0.10);
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  min-height: 220px;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 3rem;
  max-width: 600px;
  direction: rtl;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
`;

export const QuoteIcon = styled.div`
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

export const Stars = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const TestimonialText = styled.p`
  font-size: 1.1rem;
  color: var(--color-text);
  line-height: 1.6;
  font-style: italic;
  flex-grow: 1;
`;

export const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1rem;
`;

export const ClientAvatar = styled.div`
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

export const ClientDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ClientName = styled.h4`
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1.1rem;
  margin: 0;
`;

export const ClientPosition = styled.p`
  color: var(--color-text);
  font-size: 0.9rem;
  margin: 0;
  opacity: 0.8;
`;

export const CompanyName = styled.p`
  color: var(--color-accent);
  font-weight: 600;
  font-size: 0.9rem;
  margin: 0;
`;

export const SwiperContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  padding: 0 50px;
  box-sizing: border-box;
  .swiper {
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
    transform: translateY(-70%);
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
    right: 0px;
  }
  .swiper-button-next {
    left: 0px;
  }
  @media (max-width: 768px) {
    padding: 0;
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`; 
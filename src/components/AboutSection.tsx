"use client";
import styled from "styled-components";
import { FaUsers, FaRocket, FaHandshake } from "react-icons/fa";

const Section = styled.section`
  padding: 4rem 1rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h2`
  color: var(--color-primary);
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--color-accent);
  font-weight: 600;
  margin-bottom: 3rem;
  text-align: center;
  max-width: 600px;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--color-background);
  border-radius: 0.75rem;
  border-right: 4px solid var(--color-cta);
`;

const FeatureIcon = styled.div`
  font-size: 1.5rem;
  color: var(--color-accent);
  flex-shrink: 0;
`;

const FeatureText = styled.div`
  color: var(--color-text);
  font-weight: 500;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  background: var(--color-background);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px rgba(27, 42, 73, 0.1);
  position: relative;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export default function AboutSection() {
  return (
    <Section id="about">
      <Title>אודות eTechlo</Title>
      <Subtitle>מפתחים הצלחה במהירוטקלו</Subtitle>
      <Container>
        <Content>
          <Description>
            eTechlo היא חברת פיתוח תוכנה המתמחה בבניית פתרונות טכנולוגיים מתקדמים לעסקים.
            אנחנו מאמינים שטכנולוגיה צריכה להיות נגישה, יעילה ומותאמת אישית לכל עסק.
          </Description>
          <Description>
            עם ניסיון של שנים בתעשיית ההייטק, הצוות שלנו משלב ידע טכני מתקדם עם הבנה עמוקה
            של צרכי העסק כדי ליצור פתרונות שמביאים תוצאות אמיתיות.
          </Description>

          <Features>
            <Feature>
              <FeatureIcon><FaUsers /></FeatureIcon>
              <FeatureText>צוות מקצועי עם ניסיון של שנים</FeatureText>
            </Feature>
            <Feature>
              <FeatureIcon><FaRocket /></FeatureIcon>
              <FeatureText>פתרונות חדשניים וטכנולוגיות מתקדמות</FeatureText>
            </Feature>
            <Feature>
              <FeatureIcon><FaHandshake /></FeatureIcon>
              <FeatureText>ליווי אישי ושותפות ארוכת טווח</FeatureText>
            </Feature>
          </Features>
        </Content>

        <ImageContainer>
          <StyledImage src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="eTechlo Team Collaboration" />
        </ImageContainer>
      </Container>
    </Section>
  );
} 
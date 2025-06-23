"use client";
import { FaUsers, FaRocket, FaHandshake } from "react-icons/fa";
import { Section, SectionTitle, Container, Content, Subtitle, Description, Features, Feature, FeatureIcon, FeatureText, ImageContainer, StyledImage } from "./AboutSection.styles";

export default function AboutSection() {
  return (
    <Section id="about" $bg="#fff">
      <SectionTitle>אודות eTechlo</SectionTitle>
      <Subtitle>מפתחים הצלחה במהירוטקלו</Subtitle>
      <Container>
        <Content>
          <Description>
            eTechlo היא חברת פיתוח תוכנה המתמחה בבניית פתרונות טכנולוגיים מתקדמים לעסקים.
            אנחנו מאמינים שטכנולוגיה צריכה להיות נגישה, יעילה ומותאמת אישית לכל עסק.
          </Description>
          <Description>
            עם ניסיון של שנים בתעשיית ההייטק, הצוות שלנו משלב ידע טכני מתקדם עם הבנה עמוקה של צרכי העסק כדי ליצור פתרונות שמביאים תוצאות אמיתיות.
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
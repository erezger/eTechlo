"use client";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiPostgresql, SiDocker, SiAmazon, SiPython, SiSpring, SiAngular, SiVuedotjs, SiDotnet, SiNestjs, SiExpress, SiGraphql, SiMysql, SiMongodb, SiKubernetes, SiGit, SiTerraform } from "react-icons/si";
import { useTranslations } from "next-intl";
import { Section, SectionTitle, Card, TechIcon, TechName } from "./TechSection.styles";
import { JSX } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SwiperContainer } from './TestimonialsSection.styles';

const techIconMap: Record<string, JSX.Element> = {
  react: <FaReact />,
  nextjs: <SiNextdotjs />,
  nodejs: <FaNodeJs />,
  typescript: <SiTypescript />,
  postgresql: <SiPostgresql />,
  docker: <SiDocker />,
  aws: <SiAmazon />,
  angular: <SiAngular />,
  vuejs: <SiVuedotjs />,
  python: <SiPython />,
  java: <SiSpring />,
  csharp: <SiDotnet />,
  nestjs: <SiNestjs />,
  expressjs: <SiExpress />,
  graphql: <SiGraphql />,
  mysql: <SiMysql />,
  mongodb: <SiMongodb />,
  kubernetes: <SiKubernetes />,
  terraform: <SiTerraform />,
  git: <SiGit />,
};

export default function TechSection() {
  const t = useTranslations("TechSection");
  const techItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(idx => ({
    id: t(`items.${idx}.id`),
    label: t(`items.${idx}.label`),
  }));

  return (
    <Section id="tech" $bg="#fff">
      <SectionTitle>{t("title")}</SectionTitle>
      {/* <TechGrid>
        {techItems.map((item: { id: string; label: string }) => (
          <Card key={item.id}>
            <TechIcon>{techIconMap[item.id]}</TechIcon>
            <TechName>{item.label}</TechName>
          </Card>
        ))}
      </TechGrid> */}
      <SwiperContainer>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          loop
          // autoplay={{ delay: 5000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 16,
            },
          }}
        >
          {techItems.map((item: { id: string; label: string }) => (
            <SwiperSlide key={item.id}>
              <Card key={item.id}>
                <TechIcon>{techIconMap[item.id]}</TechIcon>
                <TechName>{item.label}</TechName>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperContainer>
    </Section>
  );
}



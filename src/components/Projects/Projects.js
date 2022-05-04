import React from "react";
import Image from "next/image";
import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  ImageWrapper,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

// import evotingImage from "../../../public/images/evoting.png";
// import weatherImage from "../../../public/images/weather.png";
// import moviesImage from "../../../public/images/movies-games.png";
// import covidImage from "../../../public/images/covid.png";
// import newsImage from "../../../public/images/news.png";
// import foodImage from "../../../public/images/food.png";
// import commerceImage from "../../../public/images/commerce.png";
// import cookbookImage from "../../../public/images/cookbook.png";

const Projects = () => {
  // const images = [
  //   evotingImage,
  //   weatherImage,
  //   moviesImage,
  //   covidImage,
  //   newsImage,
  //   foodImage,
  //   commerceImage,
  //   cookbookImage,
  // ];

  return (
    <>
      <Section id="projects">
        <SectionDivider />
        <br />
        <br />
        <SectionTitle>Proyek</SectionTitle>
        <GridContainer>
          {projects.map(
            ({ title, description, image, tags, source, visit, id }, index) => (
              <BlogCard key={index}>
                <ImageWrapper>
                  <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                  />
                </ImageWrapper>
                <TitleContent>
                  <HeaderThree title>{title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{description}</CardInfo>
                <div>
                  <TitleContent>Stack : </TitleContent>
                  <TagList>
                    {tags.map((tag, index) => (
                      <Tag key={index}>{tag}</Tag>
                    ))}
                  </TagList>
                </div>
                <br />
                <br />
                {/* <UtilityList>
              <ExternalLinks href={source}>Code</ExternalLinks>
              <ExternalLinks href={visit}>Visit</ExternalLinks>
            </UtilityList> */}
              </BlogCard>
            )
          )}
        </GridContainer>
      </Section>
      <br />
      <br />
    </>
  );
};

export default Projects;

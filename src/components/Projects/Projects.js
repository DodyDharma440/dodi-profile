import React from "react";
import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { useAos } from "../../hooks";

const Projects = () => {
  useAos();

  return (
    <>
      <Section id="projects">
        <SectionDivider />
        <br />
        <br />
        <SectionTitle data-aos="fade-right">Proyek</SectionTitle>
        <GridContainer>
          {projects.map(
            ({ title, description, image, tags, source, visit, id }, index) => (
              <BlogCard
                key={index}
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay={`${index}00`}
              >
                <Img src={image} />
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

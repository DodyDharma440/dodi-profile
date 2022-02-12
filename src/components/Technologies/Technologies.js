import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { useAos } from "../../hooks";

const Technologies = () => {
  useAos();

  return (
    <Section id="tech">
      <SectionDivider />
      <br />
      <br />
      <SectionTitle data-aos="fade-right">Teknologi</SectionTitle>
      <SectionText data-aos="fade-right" data-aos-delay="400">
        Adapun beberapa teknologi dalam bidang development yang sudah saya
        pelajari.
      </SectionText>
      <List>
        <ListItem data-aos="fade-up">
          <DiReact size="3rem" />
          <br />
          <ListContainer>
            <ListTitle>Front-end</ListTitle>
            <ListParagraph>
              Menengah <br />
              ReactJS, NextJS, React Native
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem data-aos="fade-up" data-aos-delay="400">
          <DiFirebase size="3rem" />
          <br />
          <ListContainer>
            <ListTitle>Back-end</ListTitle>
            <ListParagraph>
              Pemula <br />
              Express.js, CodeIgniter4
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem data-aos="fade-up" data-aos-delay="800">
          <DiZend size="3rem" />
          <br />
          <ListContainer>
            <ListTitle>UI/UX Design</ListTitle>
            <ListParagraph>
              Pemula <br />
              Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;

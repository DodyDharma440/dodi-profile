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

const Technologies = () => {
  return (
    <Section id="tech">
      <SectionDivider />
      <br />
      <br />
      <SectionTitle>Teknologi</SectionTitle>
      <SectionText>
        Adapun beberapa teknologi dalam bidang development yang sudah saya
        pelajari.
      </SectionText>
      <List>
        <ListItem>
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
        <ListItem>
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
        <ListItem>
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

import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  LogoText,
  DesktopView,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          <DiCssdeck size="3rem" /> <LogoText>Dodi Aditya</LogoText>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>Tentang Saya</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Teknologi</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Projek</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/DodyDharma440">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/dodi.aditya_">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://facebook.com/dodyaridharma">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;

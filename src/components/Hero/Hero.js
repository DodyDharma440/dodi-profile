import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hai Semua, <br />
          Saya Dodi Aditya
        </SectionTitle>
        <SectionText>
          Halo! Selamat datang di website portfolio saya. Silahkan cek portfolio
          yang sudah saya kerjakan.
        </SectionText>
        <div>
          <Link href="#projects">
            <Button>Lihat Proyek</Button>
          </Link>
        </div>
      </LeftSection>
    </Section>
  );
};

export default Hero;

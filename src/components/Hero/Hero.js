import React from "react";
import Link from "next/link";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { useAos } from "../../hooks";

const Hero = () => {
  useAos();

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center data-aos="fade-right">
          Hai Semua, <br />
          Saya Dodi Aditya
        </SectionTitle>
        <SectionText data-aos="fade-right" data-aos-delay="200">
          Halo! Selamat datang di website portfolio saya. Silahkan cek portfolio
          yang sudah saya kerjakan.
        </SectionText>
        <div data-aos="fade-right" data-aos-delay="400">
          <Link href="#projects">
            <Button>Lihat Proyek</Button>
          </Link>
        </div>
      </LeftSection>
    </Section>
  );
};

export default Hero;

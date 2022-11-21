import React from 'react'
import { animateScroll as scroll } from 'react-scroll';
import {
     FaFacebook,
     FaInstagram,
     FaYoutube,
     FaTwitter,
     FaLinkedin 
} from 'react-icons/fa';
import {
     FooterContainer,
     FooterWrap,
     FooterLinksContainer,
     FooterLinksWrapper,
     FooterLinkItems,
     FooterLinkTitle,
     FooterLink,
     SocialMedia,
     SocialMediaWrap,
     SocialLogo,
     WebsiteRights,
     SocialIcons,
     SocialIconLink 
} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
      };

  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
                            <FooterLink to="signin">Como trabalhamos</FooterLink>
                            <FooterLink to="signin">Avaliações</FooterLink>
                            <FooterLink to="signin">Carreiras</FooterLink>
                            <FooterLink to="signin">Investidores</FooterLink>
                            <FooterLink to="signin">Termos de serviços</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
                            <FooterLink to="signin">Como trabalhamos</FooterLink>
                            <FooterLink to="signin">Avaliações</FooterLink>
                            <FooterLink to="signin">Carreiras</FooterLink>
                            <FooterLink to="signin">Investidores</FooterLink>
                            <FooterLink to="signin">Termos de serviços</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
                            <FooterLink to="signin">Como trabalhamos</FooterLink>
                            <FooterLink to="signin">Avaliações</FooterLink>
                            <FooterLink to="signin">Carreiras</FooterLink>
                            <FooterLink to="signin">Investidores</FooterLink>
                            <FooterLink to="signin">Termos de serviços</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
                            <FooterLink to="signin">Como trabalhamos</FooterLink>
                            <FooterLink to="signin">Avaliações</FooterLink>
                            <FooterLink to="signin">Carreiras</FooterLink>
                            <FooterLink to="signin">Investidores</FooterLink>
                            <FooterLink to="signin">Termos de serviços</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleHome}>
                        dolla
                    </SocialLogo>
                    <WebsiteRights>dolla © {new Date().getFullYear()} Todos os Direitos reservados.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    </>
  )
}

export default Footer
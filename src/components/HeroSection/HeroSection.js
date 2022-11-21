import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';
import {
     HeroContainer,
     HeroBg,
     VideoBg,
     HeroContent,
     HeroH1,
     HeroP,
     HeroBtnWrapper,
     ArrowForward,
     ArrowRight
} from './HeroElements';

function HeroSection() {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Banco Virtual de Fácil Acesso</HeroH1>
            <HeroP>
                Inscreva-se agora e receba gratuitamente em sua conta R$250 em créditos para utilizar em pagamentos.
            </HeroP>
            <HeroBtnWrapper>
                <Button 
                to='signup' 
                onMouseEnter={onHover} 
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                >
                    Começar {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
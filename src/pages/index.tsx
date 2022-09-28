import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styled, { keyframes } from "styled-components";

import YouTube from "react-youtube";

const rotateAnimation = keyframes`
 from { transform: rotate(0deg); } to { transform: rotate(359deg); }
`;

const opacityAnimation = keyframes`
 from { opacity: 0; } to { opacity: 1; }
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
`;

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 450px;
  text-align: center;
  animation: ${opacityAnimation} 1.8s linear;
`;

const FrameBox = styled.div`
  width: 45%;

  @media (max-width: 768px) {
    width: 100%;
    margin: 30px;
    padding: 20px;
  }
`;

const ResponsiveYoutubeFrame = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const BuyButton = styled.button`
  text-align: center;
  background: #d60303;
  font-family: Imperator;
  font-size: 35px;
  font-weight: 700;
  line-height: 22px;
  border-radius: 10px;
  border: transparent;
  color: #ffffff;
  padding: 30px 42px 30px 42px;
  margin-top: 50px;
  position: relative;
  cursor: pointer;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  animation: ${opacityAnimation} 2s linear;

  &:after {
    content: url("power.png"); /* with class ModalCarrot ??*/
    z-index: -99999; /*a number that's more than the modal box*/
    position: absolute;
    top: calc(50% - 150px);
    left: calc(50% - 302px);
    margin-left: -5px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const FloatingImage = styled.div.attrs((props: { left: boolean }) => props)`
  position: absolute;
  width: 591px;
  height: 610px;
  left: ${(props) => (props.left ? "-300px" : "")};
  right: ${(props) => (props.left ? "" : "-300px")};
  top: ${(props) => (props.left ? "-250px" : "600px")};
  background-image: url("ring.png");
  background-repeat: no-repeat;
  animation: ${rotateAnimation} 15s infinite linear;
  transform-origin: center center;

  @media (max-width: 920px) {
    display: none;
  }
`;

const redirectToCheers = () => {
  window.open("https://atleticainatel.com/jutel", "_blank").focus();
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AAA Inatel | JUTEL o Multiverso da Loucura</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0, minimal-ui"
        />
      </Head>
      <Container>
        <FloatingImage left />
        <HeaderContainer>
          <Image
            src="/jutel-logo.png"
            alt="Jutel Logo"
            width={500}
            height={295}
          />
        </HeaderContainer>
        <FrameBox>
          <ResponsiveYoutubeFrame>
            <YouTube
              videoId="CzAR9IhHkjo"
              opts={{
                width: 932,
                height: 468,
                playerVars: {
                  autoplay: 1,
                  loop: 1,
                },
              }}
            />
          </ResponsiveYoutubeFrame>
        </FrameBox>
        <div>
          <BuyButton onClick={redirectToCheers}>COMPRE AGORA</BuyButton>
        </div>
        <FloatingImage />
      </Container>
    </>
  );
};

export default Home;

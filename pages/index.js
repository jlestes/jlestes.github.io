import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import styles from "../styles/Home.module.css";

const Wrapper = styled.div`
  /* background-color: red; */
  min-height: 100vh;
  /* padding: 0 0.5rem; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
`;

const Main = styled.main`
  /* padding: 5rem 0; */
  /* flex: 1; */
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
`;

const StyledImage = styled.img`
  border-radius: 100%;
`;

const BioContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const ProfileWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadingWrapper = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url("/ivana-cajina-dQejX2ucPBs-unsplash.jpg");
  padding: 1rem;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  color: #f9fafb;
  display: flex;
  justify-content: center;
  font-size: 48px;
  position: relative;
`;

const Filter = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`;

const SectionHeader = styled.h2`
  display: inline-block;
`;

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>Jonathan Estes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <HeadingWrapper>
          <ProfileWrapper>
            <StyledImage
              src="/profile.png"
              width={250}
              height={250}
            ></StyledImage>
          </ProfileWrapper>
          <Title>Jonathan Estes</Title>
        </HeadingWrapper>

        <BioContainer>
          <SectionHeader>Background</SectionHeader>
          <p>
            Hello 👋 my name is Jonathan Estes and I am a front-end engineer
            passionate about creating a great user experience for everyone on
            the web. From the age of 10, I have been tinkering with HTML and
            have made it into a career.
          </p>
          <p>
            I live in Illinois with my wife, daughter and our dog. In my
            freetime, I enjoy a round of golf, cycling or just getting outdoors
            and hiking. I am really pasionate about technology and a
            self-described Apple fan boy.
          </p>
          <p>
            I've always enjoyed being creative. As I mentioned above I have been
            tinkering with HTML since I was 10. I created several websites while
            in school for various projects (now long gone since they were hosted
            by geocities). I've also done video editing and put together several
            short films and highlight reels for my classes.
          </p>
          <p>
            Now with my career, I have the opporunity to shape the technical
            direction of a UI platform. With that, I have become very focused on
            the React ecosystem. I am always seeking ways to improve the
            developer experience while delivering high quality products at scale
            rapidly.
          </p>
        </BioContainer>
      </Main>
    </Wrapper>
  );
}

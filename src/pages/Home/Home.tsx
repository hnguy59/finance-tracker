import {
  Download,
  Email,
  Facebook,
  GitHub,
  Instagram,
  KeyboardArrowRight,
  Language,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import { Divider } from "@mui/material";
import HenryCats from "data/images/HenryCats.jpg";
import { HobbiesCarouselContent } from "helpers/data.helpers";
import { Theme } from "helpers/theme.helpers";
import { FC, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CarouselComponent from "components/Carousel/CarouselComponent";
import ImageWithDialog from "components/ImageWithDialog";
import useTheme from "hooks/useTheme";
import * as Styles from "./Home.styles";

const Home: FC<{}> = () => {
  const { theme, themeProps } = useTheme();
  const navigate = useNavigate();

  const handleClickWorkButton = useCallback(() => {
    navigate("/work");
  }, [navigate]);

  // const handleClickResumeDownload = useCallback(() => {}, []);

  useEffect(() => {
    document.title = "Henry Nguyen - Homepage";
  }, []);

  return (
    <Styles.Home key="home">
      <Styles.HomeContainer>
        <Styles.GreetingsCard>
          Hello, I'm an App Developer based in Australia!
        </Styles.GreetingsCard>
        <Styles.IntroCard>
          <Styles.IntroCardContent>
            <Styles.Name {...themeProps}>Henry Nguyen</Styles.Name>
            <Styles.Role {...themeProps}>
              Software Engineer (Web, Mobile, UX/UI)
            </Styles.Role>
            <Styles.ResumeDownload
              href="/HenryResume.pdf"
              download="Henry Nguyen - CV"
              {...themeProps}
            >
              <Download />
              CV
            </Styles.ResumeDownload>
          </Styles.IntroCardContent>
          <ImageWithDialog src={HenryCats} alt="Henry & Cats">
            <Styles.Image src={HenryCats} />
          </ImageWithDialog>
        </Styles.IntroCard>
        <Styles.Work>
          <Styles.Header>Work</Styles.Header>
          <Styles.WorkContent>
            A full-stack developer based in Brisbane with a passion for building
            digital services/anything I want. I enjoy a multitude of things from
            planning and designing all the way to solving real-life problems
            with code.
          </Styles.WorkContent>
          <Styles.WorkButton
            color="secondary"
            variant={theme === Theme.DARK ? "contained" : "outlined"}
            endIcon={<KeyboardArrowRight />}
            onClick={handleClickWorkButton}
          >
            My portfolio
          </Styles.WorkButton>
        </Styles.Work>
        <Styles.Bio>
          <Styles.Header>Bio</Styles.Header>
          <Styles.BioContent>
            <Styles.BioRow>
              <Styles.BioDate>1998, Dec</Styles.BioDate>
              <Styles.BioDescription>
                Born in{" "}
                <Styles.BioTooltip
                  arrow
                  placement="left-start"
                  title={
                    <Styles.BioTooltipContainer>
                      <img
                        src="http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSzOogUle8GrnUaD6n2vArFGsXdGVfeZqRpC6zJqvoXWWroSAZ95-_WVn6XgaNb9oHP"
                        alt="Brisbane"
                        width={267}
                      />
                      <Divider />
                      <Styles.BioTooltipContent>
                        <Styles.BioTooltipLink
                          href="https://www.brisbane.qld.gov.au/"
                          target="_blank"
                          {...themeProps}
                        >
                          <Language />
                        </Styles.BioTooltipLink>
                        <Styles.BioTooltipLink
                          href="https://www.visitbrisbane.com.au/"
                          target="_blank"
                          {...themeProps}
                        >
                          <Language />
                        </Styles.BioTooltipLink>
                      </Styles.BioTooltipContent>
                    </Styles.BioTooltipContainer>
                  }
                >
                  <b>Brisbane, Australia</b>
                </Styles.BioTooltip>
              </Styles.BioDescription>
            </Styles.BioRow>
            <Styles.BioRow>
              <Styles.BioDate>2020, Feb</Styles.BioDate>
              <Styles.BioDescription>
                <Styles.BioTooltip
                  arrow
                  placement="left-start"
                  title={
                    <Styles.BioTooltipContainer>
                      <img
                        src="https://static.wixstatic.com/media/2f509e_4d0896f4b31d479389b49f08799491e0~mv2.png/v1/fill/w_267,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/sunflowersoftware-logo.png"
                        alt="Sunflower Software"
                        style={{ backgroundColor: "white" }}
                      />
                      <Divider />
                      <Styles.BioTooltipContent>
                        <Styles.BioTooltipLink
                          href="https://www.sunflowersoft.com.au/"
                          target="_blank"
                          {...themeProps}
                        >
                          <Language />
                        </Styles.BioTooltipLink>
                      </Styles.BioTooltipContent>
                    </Styles.BioTooltipContainer>
                  }
                >
                  <b>Sunflower Software</b>
                </Styles.BioTooltip>
                , A month long internship that focused on Angular best practices
                and building enterprise Java applications with the Spring
                framework.
              </Styles.BioDescription>
            </Styles.BioRow>
            <Styles.BioRow>
              <Styles.BioDate>2021, June</Styles.BioDate>
              <Styles.BioDescription>
                <Styles.BioTooltip
                  arrow
                  placement="left-start"
                  title={
                    <Styles.BioTooltipContainer>
                      <img
                        src="https://cms.qut.edu.au/__data/assets/image/0005/842270/why-qut.jpg"
                        alt="QUT"
                        width={267}
                      />
                      <Divider />
                      <Styles.BioTooltipContent>
                        <Styles.BioTooltipLink
                          href="https://www.qut.edu.au/"
                          target="_blank"
                          {...themeProps}
                        >
                          <Language />
                        </Styles.BioTooltipLink>
                      </Styles.BioTooltipContent>
                    </Styles.BioTooltipContainer>
                  }
                >
                  <b>Bachelor in Information Technology</b>
                </Styles.BioTooltip>
                , Computer Science major, Data Science minor at the Queensland
                University of Technology.
              </Styles.BioDescription>
            </Styles.BioRow>
            <Styles.BioRow>
              <Styles.BioDate>2021, Mar to 2022, Jul</Styles.BioDate>
              <Styles.BioDescription>
                <Styles.BioTooltip
                  arrow
                  placement="left-start"
                  title={
                    <Styles.BioTooltipContainer>
                      <img
                        src="https://speedwell.com.au/-/media/Project/Speedwell/Public-Website/Logo/logoSPWLiquid.svg?h=45&iar=0&w=136&hash=CDAE4EF9CB7EF732CC28E7B76E533B99"
                        alt="Speedwell"
                        width={267}
                        style={{ backgroundColor: "#031E2F", padding: "16px" }}
                      />
                      <Divider />
                      <Styles.BioTooltipContent>
                        <Styles.BioTooltipLink
                          href="https://speedwell.com.au/en"
                          target="_blank"
                          {...themeProps}
                        >
                          <Language />
                        </Styles.BioTooltipLink>
                        <Styles.BioTooltipLink
                          href="https://www.linkedin.com/company/speedwell-digital-engineers/"
                          target="_blank"
                          {...themeProps}
                        >
                          <LinkedIn />
                        </Styles.BioTooltipLink>
                      </Styles.BioTooltipContent>
                    </Styles.BioTooltipContainer>
                  }
                >
                  <b>Speedwell</b>
                </Styles.BioTooltip>
                , my first proper full-time engineering job! Worked with great
                people to develop and maintain sites using multitudes of
                technologies that best fit the project.
              </Styles.BioDescription>
            </Styles.BioRow>
            <Styles.BioRow>
              <Styles.BioDate>2022, Jul to Present</Styles.BioDate>
              <Styles.BioDescription>
                <Styles.BioTooltip
                  arrow
                  placement="left-start"
                  title={
                    <Styles.BioTooltipContainer>
                      <img
                        src="https://scontent.fbne4-1.fna.fbcdn.net/v/t39.30808-6/309832442_551805726921692_3172064707138922573_n.png?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ciDoKfXa3NUAX9jsekn&_nc_ht=scontent.fbne4-1.fna&oh=00_AfCOv6qPsJE6FqNZSgbUtCWXBAZ9a7cTF3QUHGvMCv01TA&oe=63DF526D"
                        alt="Max Kelsen"
                        width={267}
                      />
                      <Divider />
                      <Styles.BioTooltipContent>
                        <Styles.BioTooltipLink
                          href="https://maxkelsen.com/"
                          target="_blank"
                          {...themeProps}
                        >
                          <Language />
                        </Styles.BioTooltipLink>
                        <Styles.BioTooltipLink
                          href="https://www.facebook.com/maxkelsen/"
                          target="_blank"
                          {...themeProps}
                        >
                          <Facebook />
                        </Styles.BioTooltipLink>
                        <Styles.BioTooltipLink
                          href="https://www.instagram.com/maxkelsen/"
                          target="_blank"
                          {...themeProps}
                        >
                          <Instagram />
                        </Styles.BioTooltipLink>
                        <Styles.BioTooltipLink
                          href="https://twitter.com/maxkelsen"
                          target="_blank"
                          {...themeProps}
                        >
                          <LinkedIn />
                        </Styles.BioTooltipLink>
                        <Styles.BioTooltipLink
                          href="https://www.linkedin.com/company/maxkelsen"
                          target="_blank"
                          {...themeProps}
                        >
                          <Instagram />
                        </Styles.BioTooltipLink>
                        <Styles.BioTooltipLink
                          href="https://www.youtube.com/channel/UC0e7cBcvRkITH5fYd2z8Lzw"
                          target="_blank"
                          {...themeProps}
                        >
                          <YouTube />
                        </Styles.BioTooltipLink>
                      </Styles.BioTooltipContent>
                    </Styles.BioTooltipContainer>
                  }
                >
                  <b>Max Kelsen</b>
                </Styles.BioTooltip>
                , I've always wanted to work for an AI company that makes a
                positive impact on the world. Work culture, people and projects
                are amazing.
              </Styles.BioDescription>
            </Styles.BioRow>
          </Styles.BioContent>
        </Styles.Bio>
        <Styles.Hobbies>
          <Styles.Header>Hobbies</Styles.Header>
          <Styles.HobbiesContent>
            <CarouselComponent carouselItems={HobbiesCarouselContent} />
          </Styles.HobbiesContent>
        </Styles.Hobbies>
        <Styles.Socials>
          <Styles.Header>Socials</Styles.Header>
          <Styles.SocialsContent>
            <Styles.SocialsItem
              href="https://www.linkedin.com/in/henry-nguyen-1a5980191/"
              target="_blank"
              {...themeProps}
            >
              <LinkedIn /> Henry Nguyen
            </Styles.SocialsItem>
            <Styles.SocialsItem
              href="https://github.com/hnguy59"
              target="_blank"
              {...themeProps}
            >
              <GitHub />
              @hnguy59
            </Styles.SocialsItem>
            <Styles.SocialsItem
              href="https://www.instagram.com/apricot.taffy/"
              target="_blank"
              {...themeProps}
            >
              <Instagram />
              @apricot.taffy
            </Styles.SocialsItem>
            <Styles.SocialsItem
              href="mailto:riripishu@gmail.com"
              target="_blank"
              {...themeProps}
            >
              <Email />
              riripishu@gmail.com
            </Styles.SocialsItem>
          </Styles.SocialsContent>
        </Styles.Socials>
      </Styles.HomeContainer>
    </Styles.Home>
  );
};

export default Home;

import styled from "@emotion/styled";
import { Button, Card, CardContent, Link, Tooltip } from "@mui/material";
import { getFontColor, ThemeProps } from "helpers/theme.helpers";

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`;

export const GreetingsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.36);
  border-radius: 10px;
`;

export const IntroCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.5);
`;
export const IntroCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Name = styled.div<ThemeProps>`
  font-size: xx-large;
  font-weight: bold;
  color: ${({ theme }) => getFontColor(theme)};
`;

export const Role = styled.div<ThemeProps>`
  color: ${({ theme }) => getFontColor(theme)};
`;

export const ResumeDownload = styled(Link)<ThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin-top: 8px;
  gap: 8px;
  color: ${({ theme }) => getFontColor(theme)};
  text-decoration: none;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 200px;
  height: 136px;
  object-position: 12px 32%;

  &:hover {
    cursor: pointer;
  }
`;

export const Header = styled.div`
  font-size: large;
  font-weight: bold;
  text-decoration: underline 3px solid;
`;

export const Work = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WorkContent = styled.div`
  text-align: justify;
  hyphens: auto;
`;

export const WorkButton = styled(Button)`
  width: fit-content;
  margin: auto;
`;

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BioContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BioRow = styled.div`
  display: flex;
`;

export const BioDate = styled.div`
  display: flex;
  font-weight: bold;
  width: 20%;
`;

export const BioDescription = styled.div`
  text-align: justify;
  hyphens: auto;
  width: 80%;
`;

export const BioTooltip = styled(Tooltip)`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const BioTooltipContainer = styled.div``;

export const BioTooltipContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px;
  align-items: center;
  justify-content: center;
`;

export const BioTooltipLink = styled.a`
  display: flex;
  flex-direction: row;
  gap: 8px;
  text-decoration: none;
  width: fit-content;
  color: #dee4e7;
  border: 2px solid transparent;
  border-radius: 100%;

  &:hover {
    text-decoration: underline;
    border: 2px solid;
  }
`;

export const BioButton = styled(Button)`
  width: fit-content;
  margin: auto;
`;

export const Hobbies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HobbiesContent = styled.div`
  display: flex;
  width: 100%;
`;

export const Socials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SocialsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SocialsItem = styled.a<ThemeProps>`
  display: flex;
  flex-direction: row;
  gap: 8px;
  text-decoration: none;
  width: fit-content;
  color: ${({ theme }) => getFontColor(theme)};

  &:hover {
    text-decoration: underline;
  }
`;

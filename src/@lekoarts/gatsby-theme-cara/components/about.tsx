import * as React from "react"
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
// @ts-ignore
import AboutMDX from "../sections/about"

const About = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg="divider"
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <Svg icon="box" hiddenMobile width={6} color="icon_blue" left="50%" top="65%" />
        <Svg icon="triangle" width={8} stroke color="icon_darkest" left="25%" top="8%" />
        <Svg icon="upDown" hiddenMobile width={24} color="icon_orange" left="80%" top="80%" />
      </UpDown>
      <UpDownWide>
        <Svg icon="arrowUp" hiddenMobile width={16} color="icon_purple" left="10%" top="92%" />
        <Svg icon="triangle" width={12} stroke color="icon_brightest" left="95%" top="50%" />
        <Svg icon="circle" hiddenMobile width={6} color="icon_brightest" left="85%" top="15%" />
        <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="65%" top="10%" />
      </UpDownWide>
      <Svg icon="circle" width={12} color="icon_darkest" left="70%" top="45%" />
      <Svg icon="box" width={6} color="icon_orange" left="10%" top="3%" />
      <Svg icon="hexa" width={8} stroke color="icon_darkest" left="80%" top="63%" />
    </Divider>
    <Content speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <AboutMDX />
      </Inner>
    </Content>
  </div>
)

export default About

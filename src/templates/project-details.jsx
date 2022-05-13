import * as React from "react"
import { graphql } from "gatsby"
import { Themed } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import ContentNoParallax from "../elements/content-no-parallax.tsx"
// import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
// import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import "../styles/project-details.scss"
import MainNav from "../@lekoarts/gatsby-theme-cara/components/main-nav.tsx"
import Navbar from "../@lekoarts/gatsby-theme-cara/components/project-nav"
// import { Parallax } from "@react-spring/parallax"
// import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider"
// import Content from "@lekoarts/gatsby-theme-cara/src/elements/content"
// import ContactNoParallax from "../@lekoarts/gatsby-theme-cara/components/contact-no-parallax.tsx"
// import Contact from "@lekoarts/gatsby-theme-cara/components/contact.tsx"

const ProjectDetails = ({ data }) => {
  
  const { html } = data.details
  const { title, description } = data.details.frontmatter

  return (
    <Layout>
      <Seo title={title} />
      {/* <Parallax pages={2}> */}
        {/* <Divider speed={0.2} offset={0} factor={1}> */}
          {/* <UpDown>
            <Svg icon="triangle" hiddenMobile width={48} stroke color="icon_orange" left="10%" top="20%" />
            <Svg icon="hexa" width={48} stroke color="icon_red" left="60%" top="70%" />
            <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
          </UpDown>
          <UpDownWide>
            <Svg icon="arrowUp" hiddenMobile width={16} color="icon_blue" left="80%" top="10%" />
            <Svg icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="50%" />
            <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
            <Svg icon="triangle" width={16} stroke color="icon_darkest" left="30%" top="65%" />
            <Svg icon="cross" width={16} stroke color="icon_pink" left="28%" top="15%" />
            <Svg icon="circle" width={6} color="icon_darkest" left="75%" top="10%" />
            <Svg icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
          </UpDownWide>
          <Svg icon="circle" hiddenMobile width={24} color="icon_darker" left="5%" top="70%" />
          <Svg icon="circle" width={6} color="icon_darkest" left="4%" top="20%" />
          <Svg icon="circle" width={12} color="icon_darkest" left="50%" top="60%" />
          <Svg icon="upDown" width={8} color="icon_darkest" left="95%" top="90%" />
          <Svg icon="upDown" hiddenMobile width={24} color="icon_darker" left="40%" top="80%" />
          <Svg icon="triangle" width={8} stroke color="icon_darker" left="25%" top="5%" />
          <Svg icon="circle" width={64} color="icon_green" left="95%" top="5%" />
          <Svg icon="box" hiddenMobile width={64} color="icon_purple" left="5%" top="90%" />
          <Svg icon="box" width={6} color="icon_darkest" left="10%" top="10%" />
          <Svg icon="box" width={12} color="icon_darkest" left="40%" top="30%" />
          <Svg icon="hexa" width={16} stroke color="icon_darker" left="10%" top="50%" />
          <Svg icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" /> */}
        {/* </Divider> */}
        
        <ContentNoParallax sx={{ variant: `texts.bigger` }} /* speed={0.4} offset={0.2} factor={1} */>
        <MainNav></MainNav>
          <Inner>
            <div className="project_details">
              <Navbar></Navbar>
              <Themed.h1 className="project_title">{ title }</Themed.h1>
              <Themed.h2>{ description }</Themed.h2>
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </Inner>
        </ContentNoParallax>
      {/* </Parallax> */}
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    details: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        description
        title
      }
    }
  }
`;

export default ProjectDetails


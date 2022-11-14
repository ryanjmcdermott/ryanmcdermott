import * as React from "react"
import { graphql } from "gatsby"
import { Themed } from "theme-ui"
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout"
import { UpDown, UpDownWide } from "@lekoarts/gatsby-theme-cara/src/styles/animations"
import Svg from "@lekoarts/gatsby-theme-cara/src/components/svg"
import Seo from "@lekoarts/gatsby-theme-cara/src/components/seo"
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner"
import "../styles/projects.scss"
import Navbar from "../@lekoarts/gatsby-theme-cara/components/project-nav"
import { GatsbyImage } from "gatsby-plugin-image"
import ProjectCard from "../@lekoarts/gatsby-theme-cara/components/project-card"
import ContentNoParallax from "../elements/content-no-parallax.tsx"
import MainNav from "../@lekoarts/gatsby-theme-cara/components/main-nav.tsx"
import DividerNoParallax from "../elements/divider-no-parallax.tsx"

const PhotoMan = ({ data }) => {
  console.log(data)
  const projects = data.projects.nodes

  return (
    <Layout>
      <Seo title="Photo Manipulation" />
      <div>
        <DividerNoParallax>
        <UpDown>
            <Svg icon="box" width={6} color="icon_darker" left="60%" top="15%" />
          </UpDown>
          <UpDownWide>
            <Svg icon="arrowUp" hiddenMobile width={12} color="icon_blue" left="30%" top="40%" />
            <Svg icon="circle" width={16} color="icon_darker" left="70%" top="90%" />
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
          <Svg icon="hexa" width={8} stroke color="icon_darker" left="80%" top="70%" />
      </DividerNoParallax>
        <ContentNoParallax>
          <MainNav></MainNav>
          <Inner className="inner">
            <Navbar></Navbar>
            <Themed.h1>Projects</Themed.h1>
            <Themed.h2>Photo Manipulation</Themed.h2>              
            <Themed.div className="projects">
              {projects.map(project => (
                <ProjectCard className="project" link={ "/photo-manipulation/" + project.frontmatter.slug } key={ project.id } bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)" title={ project.frontmatter.title }>
                  <GatsbyImage image={ project.frontmatter.thumb.childImageSharp.gatsbyImageData }></GatsbyImage>                    
                  <p>{ project.frontmatter.description }</p>
                </ProjectCard>
              ))}
            </Themed.div>
          </Inner>            
        </ContentNoParallax>
      </div>
    </Layout>
  );
}

export const query = graphql`
query PhotoManData {
  projects: allMdx(
    sort: {fields: frontmatter___date, order: DESC}
    filter: {frontmatter: {key: {eq: "photoman"}}}
  ) {
    nodes {
      id
      frontmatter {
        title
        slug
        description
        thumb {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
}
`;

export default PhotoMan

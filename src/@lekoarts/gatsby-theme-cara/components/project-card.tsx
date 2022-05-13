/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { Link } from "gatsby"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => (
  <Link className="projectcard"
    to={link}
    sx={{
      width: `100%`,
      boxShadow: `lg`,
      position: `relative`,
      textDecoration: `none`,
      borderRadius: `lg`,
      px: 4,
      py: [4, 5],
      color: `white`,
      background: bg || `none`,
      transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
      "&:hover": {
        color: `white !important`,
        transform: `translateY(-5px)`,
        boxShadow: `xl`,
      },
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `space-between`,
      alignContent: `center`,
      minWidth: `50%`
    }}  
  >
    <div 
      sx={{ 
        opacity: 0.85, 
        textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)`,
        paddingBottom: `1rem`,
        width: `100%`
      }}
    >
      {children}
    </div>
    <h3
      sx={{
        textTransform: `uppercase`,
        letterSpacing: `wide`,
        pt: 4,
        fontSize: 3,
        '@media (min-width: 36em)': {
          fontSize: 4,
        },
        fontWeight: `medium`,
        lineHeight: 1,
        margin: 0,
        padding: 0,
        width: `100%`
      }}
    >
      {title}
    </h3>
  </Link>
)

export default ProjectCard

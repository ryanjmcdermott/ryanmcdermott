/** @jsx jsx */
import { hidden } from "@lekoarts/gatsby-theme-cara/src/styles/utils"
import { jsx } from "theme-ui"

type DividerProps = {
  children?: React.ReactNode
  bg?: string
  fill?: string
  clipPath?: string
  className?: string
}

const DividerNoParallax = ({
  bg = ``,
  fill = ``,
  clipPath = ``,
  children = null,
  className = ``,
}: DividerProps) => (
  <div
    sx={{
      overflow: `hidden`,
      position: `absolute`,
      width: `full`,
      height: `full`,
      background: bg,
      backgroundColor: bg,
      "#contact-wave": {
        color: fill,
        fill: `currentColor`,
      },
      clipPath,
    }}
    className={className}
  >
    {children}
  </div>
)

export default DividerNoParallax
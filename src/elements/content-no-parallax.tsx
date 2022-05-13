/** @jsx jsx */
import { jsx } from "theme-ui"
import { Themed } from "theme-ui"

const ContentNoParallax = ({ children, className = `` }: ContentProps) => (
  <Themed.div
    sx={{
      padding: [3, 4, 4, 5],
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      zIndex: 50,
    }}
  >
    {children}
  </Themed.div>
)

export default ContentNoParallax

/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
          mr: 2,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
     
      <div sx={{ flexGrow: 1 }}>
        <Link href="/privacypolicy">Privacy Policy</Link>
        <Link href="https://forms.gle/SVnv4HYq7b2ZaxB87" sx={{ ml: 2 }} target="_blank" rel="noopener noreferrer">Contact</Link>
      </div>

      <div sx={{ ml: `auto` }}>
        <span sx={{ mr: 2 }}>&copy; {new Date().getFullYear()} by {siteTitle}.</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer

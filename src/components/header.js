import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div className="w-full bg-indigo-600 text-white py-5">
      <nav className="container mx-auto">
        <h1 className="text-4xl">
          <Link to="/">
            {siteTitle}
          </Link>
        </h1>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

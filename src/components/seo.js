/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ lang, meta, title }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={"СПЕЦСТРОЙ298"}
      titleTemplate={`%s | Строительная компания`}
      meta={[
        {
          name: `description`,
          content: `О компании Основными направлениями деятельности ООО «СПЕЦСТРОЙ 298» является выполнение полного комплекса строительно-монтажных работ «под ключ» и комплексная поставка: трубопроводной арматуры; приборов контроля и учета тепловой энергии теплоносителей и других жидких сред металлополимерных труб МПТ; проектирование, изготовление и монтаж индивидуальных тепловых пунктов (ИТП). Наша цель — найти и сформировать дл`,
        },
        {
          property: `og:title`,
          content: "СПЕЦСТРОЙ298",
        },
        {
          property: `og:description`,
          content: `О компании Основными направлениями деятельности ООО «СПЕЦСТРОЙ 298» является выполнение полного комплекса строительно-монтажных работ «под ключ» и комплексная поставка: трубопроводной арматуры; приборов контроля и учета тепловой энергии теплоносителей и других жидких сред металлополимерных труб МПТ; проектирование, изготовление и монтаж индивидуальных тепловых пунктов (ИТП). Наша цель — найти и сформировать дл`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

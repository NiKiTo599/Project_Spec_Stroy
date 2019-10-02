import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardOfContacts from "../components/contacts/CardOfContacts"
import Feedback from "../components/contacts/Feedback"
import '../styles/contacts.css'

const Contacts = () => (
  <Layout>
    <SEO title="Home" />
    <section className="container contacts__container">
      <div className="row contacts_row justify-content-center">
        <div className='col-xl-2'></div>
        <CardOfContacts />
        <Feedback />
      </div>
    </section>
  </Layout>
)

export default Contacts

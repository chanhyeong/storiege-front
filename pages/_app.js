import App, { Container } from 'next/app'

import Head from '../components/head'
import Nav from '../components/nav'
import BodyWrapper from '../components/bodyWrapper'
import Footer from '../components/footer'

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head />
        <Nav />
        <BodyWrapper>
          <Component {...pageProps} />
        </BodyWrapper>
        <Footer />
      </Container>
    )
  }
}
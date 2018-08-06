import React from 'react'
import App, { Container } from 'next/app'
import Router from 'next/router'

import Head from '../components/head'
import BodyWrapper from '../components/bodyWrapper'
import Footer from '../components/footer'

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Head />
                <BodyWrapper>
                    <Component {...pageProps} />
                </BodyWrapper>
                <Footer />
            </Container>
        )
    }
}
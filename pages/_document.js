
import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheets} from '@material-ui/core/styles';


export default class MyDocument extends Document{
    render(){
        return(
            <Html lang="en">

            <Head>
            <link
             rel="stylesheet"
             href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,700&display=swap"/>

            </Head>

            <body>

            <Main/>
            <NextScript/>

            

            </body>


            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {

    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
    originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props}/>),
    });

    const InitialProps = await Document.getInitialProps(ctx);
    return {
        ...InitialProps,
        styles: [
            ...React.Children.toArray(InitialProps.styles),
            sheets.getStyleElement(),
        ],
    };

}
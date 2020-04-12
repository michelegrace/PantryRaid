import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class myDocument extends Document {
    render(){
        return(
            <Html lang="en">
                <Head>
                    <link 
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Montserrat+Alternates:wght@700;800&display=swap"
                        as="font" 
                        crossOrigin=""
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default myDocument;
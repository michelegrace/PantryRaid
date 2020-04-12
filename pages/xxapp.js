import App from 'next/app';

class myApp extends App {
    render(){
        const {Component, pageProps} = this.props;

        return(
            <Component {...pageProps} />

        );
    }
}
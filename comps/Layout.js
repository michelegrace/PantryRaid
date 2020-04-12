import Header from '../comps/Header';


const layoutStyle = {
    margin: 0,
    padding:0,    
};

const Layout = props => (
    <div className="container" style={layoutStyle}>
        <div className="row">
            <Header />
            {props.children}
        </div>
        <style jsx global>{`
        html {
            background: #EAE0D5;
        }
        body {
            font-size: 10px;
            padding: 0;
            margin: 0;
            color: #0A0908;
        }
        .container {
            width: 100%;
            max-width: 1560px;
            margin: 0 auto;
        }
        .row {
            display: flex;
            flex-direction:row;
            flex-wrap: wrap;
        }
        .col {
            width: 100%;
            flex: 0 0 100%;
        }
        .col-lg-3 {
            width: 33.3333%;
            flex: 0 0 33.3333%;
        }
        .img-fluid {
            max-width: 100%;
        }
        .text-center {
            text-align: center;
        }
        p {
            font-size: 1.400rem;
        }
        .flex-center {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    
    `}</style>
    </div>

    
)

export default Layout;
import Emoji from 'a11y-react-emoji'


const Footer = () => (
    <div className="footer flex-center col">
        <footer className="text-center col">
            <p style={{fontSize:".800rem", display:"inline"}}>Made by</p>
        </footer>
        <style jsx>
        {`.footer {
            position: absolute;
            bottom: 0;
            width: 100%;
        }`}</style>
    </div>
);

export default Footer;
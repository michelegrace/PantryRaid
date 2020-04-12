import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const h1Style = {
  fontSize: '5rem',
  color: '#DB7F67'
}

const Header = () => (
  <div className="col text-center">
    <h1 style={h1Style}>What's for ____?</h1>
    <p>A simple app to help you make something from what you have in your fridge</p>
  </div>
);

export default Header;
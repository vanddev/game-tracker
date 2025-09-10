import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header id='header'>
        <div className='main-content-container'>
            <div style={{flex: '0 0 auto'}}>
                <img src='/favicon-196.png' className="logo" alt="Logo" style={{height: '48px', width: 'auto'}} />
            </div>
            <div style={{flex: '0 1 600px', margin: 'auto'}}>
                <SearchBar></SearchBar>
            </div>
        </div>
    </header>
  );
};
export default Header;
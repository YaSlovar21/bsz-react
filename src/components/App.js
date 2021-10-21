import logo from '../logo.svg';
import logo80 from '../images/bsz80logoHeader.svg'
import ordenLen from '../images/orlen-len.png'

function App() {
  return (
    <div classNameName="App">
      <header className="header">
            <div className="section-content header__content">
                <img src={logo80} alt="Лого 80 лет"/>
                <ul className="header__awards">
                    <li><img src={ordenLen} alt="Орден ленина, врученный в 1946 году" /></li>
                </ul>
            </div>
        </header>
    </div>
  );
}

export default App;

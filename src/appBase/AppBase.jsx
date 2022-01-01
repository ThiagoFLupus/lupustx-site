import HeaderSite from '../components/headerSite/HeaderSite'
import FooterSite from '../components/footerSite/FooterSite'
import MainContainerSite from '../components/mainContainerSite/MainContainerSite';
import './AppBase.css';

function AppBase() {
  return (
    <div className="AppBase">
      <HeaderSite/>
      <div>
        <MainContainerSite />
        <FooterSite />
      </div>
    </div>
  );
}

export default AppBase;
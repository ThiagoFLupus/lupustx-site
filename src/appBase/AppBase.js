import HeaderSite from '../components/headerSite/HeaderSite'
import FooterSite from '../components/footerSite/FooterSite'
import MaincontainerSite from '../components/mainContainerSite/MainContainerSite'
import MainContainerSite from '../components/mainContainerSite/MainContainerSite';

function AppBase() {
  return (
    <div className="AppBase">
        <div>
            <HeaderSite />
            <MainContainerSite />
            <FooterSite />
        </div>
    </div>
  );
}

export default AppBase;
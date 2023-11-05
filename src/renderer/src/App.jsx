import Versions from './components/Versions'
import icons from './assets/icons.svg'
import Titlebar from './components/Titlebar'
import {Button} from "@nextui-org/button";
import Sample from './components/Sample'
function App() {
  return (
    <>
      <Titlebar></Titlebar>
      <div className="content-wrapper">
        <div className="container">
          {/* <Versions/> */}
          <Sample/>
          
          {/* <svg className="hero-logo" viewBox="0 0 900 300">
            <use xlinkHref={`${icons}#electron`} />
          </svg> */}
         
            
        </div>
      </div>

    </>
  )
}

export default App

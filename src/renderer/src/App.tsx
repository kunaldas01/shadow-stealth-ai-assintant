import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App(): React.JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return <h1 className="text-3xl text-green-400">Hello Bhai</h1>
}

export default App

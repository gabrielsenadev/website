import { Header } from './components/Header';
import { Welcome } from './components/Welcome';

export default function Page() {
  return (
    <div>
      <Header
        logoSrc='https://github.com/gabrielsenadev.png'
        username='Gabriel Sena'
        title='Software Engineer'
      />
      <Welcome data-testid="welcome-home"/>
    </div>
  )
}

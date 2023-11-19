import { About } from './components/About';
import { Todo } from './components/Todo';
import { Welcome } from './components/Welcome';

export default function Page() {
  return (
    <div className='flex items-center flex-col justify-center h-full px-2 py-2'>
      <Welcome />
      <About />
      <Todo />
    </div>
  )
}

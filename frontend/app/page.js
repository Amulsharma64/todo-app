import Image from "next/image";
import TodoApp from './components/TodoApp';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <TodoApp/>
    </div>
  );
}

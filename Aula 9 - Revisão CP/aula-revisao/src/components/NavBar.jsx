import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-black text-white shadow p-4 flex justify-between items-center">
      <Link to= "/"><h1 className="text-xl font-bold">GitHub Explorer</h1></Link>
      
      <nav className="space-x-4">
        <Link to= "/about"><p className="text-gray-400 hover:underline">Sobre</p></Link>
        <Link to= "/contact"><p className="text-gray-400 hover:underline">Contato</p></Link>
      </nav>
    </header>
  );
}

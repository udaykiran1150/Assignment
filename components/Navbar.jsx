import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-slate-800">Hedamo</h1>

        <ul className="hidden md:flex space-x-6 text-slate-600 font-medium">
          <li className="cursor-pointer hover:text-slate-900">Home</li>
          <li className="cursor-pointer hover:text-slate-900">Products</li>
          <li className="cursor-pointer hover:text-slate-900">About</li>
          <li className="cursor-pointer hover:text-slate-900">Contact</li>
        </ul>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-slate-600 font-medium">
            <li className="cursor-pointer hover:text-slate-900">Home</li>
            <li className="cursor-pointer hover:text-slate-900">Products</li>
            <li className="cursor-pointer hover:text-slate-900">About</li>
            <li className="cursor-pointer hover:text-slate-900">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

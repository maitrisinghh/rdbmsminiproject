import React from 'react';
import { Book, Bell, ShoppingCart, User, Settings, Heart, Package, Search } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-purple-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-64 bg-white/80 backdrop-blur-sm p-6 flex flex-col">
        <div className="flex items-center gap-2 mb-12">
          <Book className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-primary">Bookary</h1>
        </div>

        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-4xl mb-2">
            🐻
          </div>
          <h2 className="text-lg font-semibold text-black">Maitri Singh</h2>
        </div>

        <nav className="flex-1">
          <SidebarLink icon={<User />} text="Account" />
          <SidebarLink icon={<Bell />} text="Notifications" />
          <SidebarLink icon={<Package />} text="My Orders" />
          <SidebarLink icon={<Heart />} text="Favorites" />
          <SidebarLink icon={<Settings />} text="Settings" />
        </nav>

        <div className="flex gap-4 justify-center mt-auto">
          <a href="#" className="text-primary hover:text-primary-light">
            <InstagramIcon />
          </a>
          <a href="#" className="text-primary hover:text-primary-light">
            <TwitterIcon />
          </a>
          <a href="#" className="text-primary hover:text-primary-light">
            <YoutubeIcon />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-6">
        {/* Header */}
        <header className="flex items-center justify-between mb-12">
          <div className="relative flex-1 max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="What do you want to read?"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary"
            />
          </div>
          <nav className="flex items-center gap-8 ml-8">
            <NavLink text="Shop" />
            <NavLink text="Blog" />
            <NavLink text="About Us" />
            <button className="flex items-center gap-2 text-primary hover:text-primary-light">
              <span>Basket</span>
              <ShoppingCart className="w-5 h-5" />
            </button>
          </nav>
        </header>

        {/* Book Details */}
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-4">A Court of Thorns and Roses</h1>
            <h2 className="text-2xl text-gray-600 mb-6">Sarah J. Maas</h2>

            <div className="flex gap-4 mb-6">
              <Tag text="fantasy" />
              <Tag text="romance" />
              <Tag text="young adult" />
            </div>

            <p className="text-black mb-8">
              When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution.
            </p>
            <p className="text-black mb-12">
              Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world.
            </p>

            <div className="flex gap-6">
              <PriceButton type="Paperback" price="899" />
              <PriceButton type="E-book" price="399" />
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600"
              alt="A Court of Thorns and Roses Book Cover"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-primary mb-8">You may like</h2>
          <div className="grid grid-cols-4 gap-6">
            {/* Book recommendations would go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for sidebar links
function SidebarLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 text-gray-600 hover:text-primary py-3 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}

// Component for navigation links
function NavLink({ text }: { text: string }) {
  return (
    <a href="#" className="text-black hover:text-primary transition-colors">
      {text}
    </a>
  );
}

// Component for tags
function Tag({ text }: { text: string }) {
  return (
    <span className="px-4 py-1 bg-secondary rounded-full text-sm text-primary">
      {text}
    </span>
  );
}

// Component for price buttons
function PriceButton({ type, price }: { type: string; price: string }) {
  return (
    <button className="px-6 py-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="text-sm text-gray-600">{type}</div>
      <div className="text-lg font-bold text-primary">{price} Rs</div>
    </button>
  );
}

// Social media icons
function InstagramIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
    </svg>
  );
}

export default App;
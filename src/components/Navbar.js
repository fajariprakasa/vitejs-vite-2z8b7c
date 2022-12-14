export default function Navbar() {
  return `
  <nav class="w-full h-16 flex items-center justify-between bg-orange-500 px-6">

    <div class="flex gap-2">
    <img src="logo.svg" class="w-8">
    <h1 class="text-white font-light uppercase select-none">Jvalley</h1>

     </div> 
    <menu class="flex items-center gap-4">
      <a href="/">Home</a>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
      <a href="/about">About</a>
    </menu>

  </nav>
  `;
}

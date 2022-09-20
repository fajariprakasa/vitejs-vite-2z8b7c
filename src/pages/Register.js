import Navbar from '../components/Navbar';

const app = document.getElementById('app');

export default function Register() {
  document.title = 'Register Page';
  app.innerHTML = `
  ${Navbar()}
  <div class="bg-slate-100 w-screen min-h-screen p-6">
    <h1>Register</h1>
    <form class="flex flex-col gap-4 font-light max-w-[300px] mx-auto " autocomplete="off">

      <div class="flex flex-col gap-2">
        <label for="email">email</label>
        <input type="email" id="email" required class="h-10 px-3 rounded-lg"/>
      </div>

      <div class="flex flex-col gap-2">
        <label for="password">password</label>
        <input type="password" id="password" required class="h-10 px-3 rounded-lg"/>
      </div>

      <div class="flex flex-col gap-2">
        <label for="password2">re-enter password</label>
        <input type="password" id="password2" required class="h-10 px-3 rounded-lg"/>
      </div>

      <button type="submit" class="h-10 text-white bg-orange-500 hover:bg-orange-400 w-[30%] ml-auto rounded-lg">Login</button>

    </form>
  </div>
  
  `;
}

import { Navbar } from "../components";

export default function Home() {
  const toggleDarkMode = () => {
    setTimeout(() => {
      document.querySelector("body").classList.add("dark");
    }, 100);
  };
  toggleDarkMode();
  return (
    <main className="h-screen bg-white dark:bg-slate-900">
      <Navbar />
    </main>
  );
}

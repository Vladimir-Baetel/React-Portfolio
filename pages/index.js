import { Navbar, Header, About, Contact, Projects } from "../components";

export default function Home() {
  return (
    <>
      <main className="h-[300vh] bg-white dark:bg-black text-black dark:text-white bg-gradient-to-r from-violet-300 dark:from-violet-900/20 via-white dark:via-black to-violet-300 dark:to-violet-900/20">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

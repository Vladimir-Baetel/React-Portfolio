import {
  Navbar,
  Header,
  About,
  Contact,
  Projects,
  Footer,
} from "../components";

export default function Home() {
  return (
    <>
      <main className="bg-white dark:bg-black text-black dark:text-white bg-gradient-to-r from-violet-300 dark:from-violet-900/20 via-white dark:via-black to-violet-300 dark:to-violet-900/20">
        {/* <main className="text-black dark:text-white"> */}
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

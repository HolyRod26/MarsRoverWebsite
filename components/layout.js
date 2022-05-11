import Navbar from "./navbar";
export default function Layout({ children, bg }) {
  return (
    <main className={`w-screen min-h-screen ${bg} bg-cover`}>
      <Navbar></Navbar>
      {children}
    </main>
  );
}

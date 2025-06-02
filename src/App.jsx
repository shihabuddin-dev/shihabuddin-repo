import { Suspense } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Repositories from "./components/repositories/Repositories";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";

const fetchRepositories = async () => {
  const res = await fetch("../repositories.json");
  return res.json();
};
function App() {
  const repositoriesPromise = fetchRepositories();
  return (
    <div className="max-w-4xl mx-auto px-2">
      <Header />
      <Suspense fallback={<Loader />}>
        <Repositories repositoriesPromise={repositoriesPromise} />
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;

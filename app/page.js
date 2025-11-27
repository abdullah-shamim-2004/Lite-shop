// import { ErrorBoundaryHandler } from "next/dist/client/components/error-boundary";
// import Image from "next/image";
import Bannar from "./components/Bannar";
import Feauter from "./components/Feauter";

export default function Home() {
  return (
    <main>
      <Bannar />
      <Feauter/>
    </main>
  );
}

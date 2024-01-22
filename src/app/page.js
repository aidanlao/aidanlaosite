import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "@/components/Homepage";
export const metadata = {
  title: 'Aidan Lao',
}
export default function Home() {
  return (
    
    <main>
      <Homepage></Homepage>
    </main>
  );
}

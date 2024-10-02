import { Button } from "@/components/ui/button";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FoodOptions from '../components/features'
import Localities from "@/components/localities";

export default function Home() {
  return (
    <div>
        <Hero />
        <FoodOptions />
        <Localities />
    </div>
  );
}

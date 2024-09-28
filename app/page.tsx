import { CarouselDemo } from "./components/HomePage/Carousel";

export default function Home() {
  return (
    <div>
      <div className="my-4 text-center text-6xl font-bold">Goa Police Help Desk</div>
      <div className="flex justify-center items-center">
        <CarouselDemo/>
      </div>
    </div>
  );
}

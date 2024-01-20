import Image from "next/image";
import VerticalMode from "./slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <div>
      <div className="p-3">
        <VerticalMode />
      </div>
    </div>
  );
}

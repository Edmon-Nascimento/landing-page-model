import "./hero.css"

export default function hero() {
  return (
    <div className="h-screen flex items-center justify-center px-4 bg-hero lg:justify-start">
        <div className="p-6 border-4 lg:ml-40 max-w-4xl lg:py-8 lg:px-10">
            <p className="text-white josefin-sans text-5xl font-light uppercase lg:text-8xl">Immersive experiences that deliver</p>
        </div>
    </div>
  );
}

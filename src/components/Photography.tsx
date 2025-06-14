
const Photography = () => {
  return (
    <section id="photography" className="py-20 md:py-32 px-8 md:px-12 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-2">Tharun's Perspective</h2>
          <p className="text-lg text-muted-foreground">Photography & Videography</p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-light text-center mb-8">Photography Showcase</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src="/lovable-uploads/f7ebdad9-473e-4e45-987f-215d662e1c47.png" alt="A person and a child walking down a long, ornate temple hallway" className="w-full h-full object-cover rounded-lg shadow-md aspect-square" />
            <img src="/lovable-uploads/17bd82c2-e0e5-4600-a2dd-64b73e4a8b86.png" alt="A white horse in a field of yellow flowers" className="w-full h-full object-cover rounded-lg shadow-md aspect-square" />
            <img src="/lovable-uploads/68fb0042-4c44-4a77-a5f3-14ba2fc1898d.png" alt="A tram on grassy tracks between rows of autumn trees" className="w-full h-full object-cover rounded-lg shadow-md aspect-square" />
          </div>
        </div>

        {/* Video Gallery */}
        <div>
          <h3 className="text-2xl font-light text-center mb-8">Videography Showcase</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-0 pb-[56.25%]">
              <iframe className="absolute top-0 left-0 w-full h-full rounded-lg" src="https://www.youtube.com/embed/0GjZr4VbDtw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="relative h-0 pb-[56.25%]">
              <iframe className="absolute top-0 left-0 w-full h-full rounded-lg" src="https://www.youtube.com/embed/-YJWSWVd6Hs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default Photography;

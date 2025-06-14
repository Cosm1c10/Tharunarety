
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Camera } from "lucide-react";

const Photography = () => {
  return (
    <section id="photography" className="py-20 md:py-32 px-8 md:px-12 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-2">Tharun's Perspective</h2>
          <p className="text-lg text-muted-foreground">Photography & Videography</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="overflow-hidden">
            <CardHeader className="p-0">
              <img src="https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=2253&auto=format&fit=crop" alt="Fujifilm Camera" className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl font-medium mb-2">Photography Work</CardTitle>
              <CardDescription>Amateur photographer and a travel enthusiast. Trying to capture most among what life has to offer.</CardDescription>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <CardHeader className="p-0">
              <img src="https://images.unsplash.com/photo-1574717523558-f75604b9e289?q=80&w=2070&auto=format&fit=crop" alt="Video editing setup" className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl font-medium mb-2">Videography Work</CardTitle>
              <CardDescription>I tell stories through my videos.</CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center justify-center h-48 bg-card-foreground/5">
                <Camera size={48} className="text-muted-foreground" />
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="text-xl font-medium mb-2">Instagram</CardTitle>
              <CardDescription>Check out my Instagram for more shots.</CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Photo Gallery */}
        <div className="mb-20">
          <h3 className="text-2xl font-light text-center mb-8">Photography Showcase</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop" alt="Photo 1" className="w-full h-full object-cover rounded-lg shadow-md aspect-square" />
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop" alt="Photo 2" className="w-full h-full object-cover rounded-lg shadow-md aspect-square" />
            <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop" alt="Photo 3" className="w-full h-full object-cover rounded-lg shadow-md aspect-square" />
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

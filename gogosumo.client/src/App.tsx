import { Calendar, ChevronRight, MapPin } from "lucide-react";
import { Button } from "./components/ui/button";
import UserTable from "./user-table"

function App() {
    const imageUrl = "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

    return (
        <main className="flex-grow">
            <section className="relative bg-cover bg-center py-32" style={{ backgroundImage: `url('${imageUrl}')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative container px-4 text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover the Beauty of Japan</h1>
                    <p className="text-xl mb-8">Unforgettable tours and dream weddings in the Land of the Rising Sun</p>
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                        Start Your Journey
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </section>

            <div className="container mx-auto py-10">
                <UserTable />
            </div>

            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Tours</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {['Tokyo City Explorer', 'Kyoto Cultural Journey', 'Mount Fuji Adventure'].map((tour, index) => (
                            <Card key={index} className="overflow-hidden">
                                <img src={`https://source.unsplash.com/random/800x600?japan,travel&sig=${index}`} alt={tour} className="w-full h-48 object-cover" />
                                <CardContent className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{tour}</h3>
                                    <div className="flex items-center text-sm text-gray-600 mb-4">
                                        <MapPin className="mr-1 h-4 w-4" />
                                        <span>Various locations</span>
                                        <Calendar className="ml-4 mr-1 h-4 w-4" />
                                        <span>7 days</span>
                                    </div>
                                    <p className="text-gray-600 mb-4">Experience the best of Japan with our carefully curated tour packages.</p>
                                    <Button variant="outline" className="w-full">Learn More</Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default App

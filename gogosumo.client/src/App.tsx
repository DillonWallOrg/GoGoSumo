import { Calendar, ChevronRight, Facebook, Heart, Instagram, MapPin, Star, Twitter } from "lucide-react";
import { Button } from "./components/ui/button";
import UserTable from "./user-table"
import { Card, CardContent } from "./components/ui/card";

function App() {
    return (
        <>
            <main className="flex-grow">
                <section className="relative bg-cover bg-center py-32" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')" }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative container mx-auto px-4 text-center text-white">
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
                                    <img
                                        src={
                                            index === 0
                                                ? "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                                : index === 1
                                                    ? "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                                    : "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                                        }
                                        alt={tour}
                                        className="w-full h-48 object-cover"
                                    />
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

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Wedding Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <img
                                    src="https://images.unsplash.com/photo-1572242668819-ec1794485434?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Japanese Wedding Ceremony"
                                    className="rounded-lg shadow-lg w-full h-auto"
                                />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-4">Your Dream Wedding in Japan</h3>
                                <p className="text-gray-600 mb-6">Make your special day truly unforgettable with a traditional Japanese wedding or a modern celebration surrounded by the beauty of Japan.</p>
                                <ul className="space-y-2 mb-6">
                                    {['Traditional Shinto ceremonies', 'Modern Western-style weddings', 'Cherry blossom season specials', 'Professional photography services'].map((item, index) => (
                                        <li key={index} className="flex items-center">
                                            <Heart className="mr-2 h-5 w-5 text-red-600" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button>Request Wedding Info</Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { name: 'Emily Thompson', text: 'Our tour of Japan was absolutely amazing! The guides were knowledgeable and the experiences were unforgettable.' },
                                { name: 'Michael Chen', text: 'We had our dream wedding in Kyoto. The team took care of everything, making our day perfect and stress-free.' },
                                { name: 'Sarah Johnson', text: 'The attention to detail in our customized tour was impressive. We saw sides of Japan we never would have discovered on our own.' }
                            ].map((testimonial, index) => (
                                <Card key={index} className="bg-white">
                                    <CardContent className="p-6">
                                        <div className="flex items-center mb-4">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                        <p className="text-gray-600 mb-4">{testimonial.text}</p>
                                        <p className="font-semibold">{testimonial.name}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-700 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-4">GoGo Sumo</h3>
                            <p className="text-gray-400">Unforgettable journeys and celebrations in Japan.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Tours</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Weddings</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                            <p className="text-gray-400">123 Sakura Street, Tokyo, Japan</p>
                            <p className="text-gray-400">Phone: +81 3-1234-5678</p>
                            <p className="text-gray-400">Email: info@japantravel.com</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <Facebook className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <Twitter className="h-6 w-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <Instagram className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                        <p>&copy; 2024 GoGoSumo Ltd. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App

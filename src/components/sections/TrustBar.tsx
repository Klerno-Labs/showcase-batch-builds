import { images } from "@/config/images";

export function TrustBar() {
  return (
    <div className="bg-gray-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex space-x-4">
          <img src={images["service-1"].src} alt="Insurance Provider 1" className="h-10" />
          <img src={images["service-2"].src} alt="Insurance Provider 2" className="h-10" />
          <img src={images["service-3"].src} alt="Insurance Provider 3" className="h-10" />
        </div>
        <div className="text-muted">5-Star Rated by Our Patients</div>
      </div>
    </div>
  );
}
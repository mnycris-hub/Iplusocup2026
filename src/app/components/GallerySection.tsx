import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Play } from "lucide-react";

export function GallerySection() {
  const { ref, isInView } = useInView();

  const images = [
    {
      url: "https://images.unsplash.com/photo-1777643155963-1218f908f842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZvb3RiYWxsJTIwbWF0Y2glMjBhY3Rpb258ZW58MXx8fHwxNzc5MzEyOTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Ação em Campo",
      type: "photo",
    },
    {
      url: "https://images.unsplash.com/photo-1641029185333-7ed62a19d5f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMGZpZWxkJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NzkzMTI5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Vista Aérea",
      type: "video",
    },
    {
      url: "https://images.unsplash.com/photo-1662065931180-c5f5715f53d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudHMlMjBjZWxlYnJhdGluZyUyMHNwb3J0c3xlbnwxfHx8fDE3NzkzMTI5Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Celebração",
      type: "photo",
    },
    {
      url: "https://images.unsplash.com/photo-1774916927099-5b0c72f2a683?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMGZvb3RiYWxsJTIwc3RhZGl1bSUyMHJlZCUyMGxpZ2h0c3xlbnwxfHx8fDE3NzkzMTI5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Atmosfera Noturna",
      type: "photo",
    },
    {
      url: "https://images.unsplash.com/photo-1635829933414-02613bc5464c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBnYXRoZXJpbmclMjBmb29kJTIwZHJpbmtzfGVufDF8fHx8MTc3OTMxMjk3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Convívio",
      type: "photo",
    },
    {
      url: "https://images.unsplash.com/photo-1777643155963-1218f908f842?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZvb3RiYWxsJTIwbWF0Y2glMjBhY3Rpb258ZW58MXx8fHwxNzc5MzEyOTc2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Destaques",
      type: "video",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#111111] mb-6">
            Revive os <span className="text-[#D90429]">melhores momentos</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Fotos, vídeos e highlights dos jogos mais emocionantes do torneio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              {/* Play icon for videos */}
              {image.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#D90429] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Play size={28} className="text-white ml-1" fill="white" />
                  </div>
                </div>
              )}

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

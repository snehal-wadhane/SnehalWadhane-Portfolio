"use client"

export default function TextEffect() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-80"
        style={{
          backgroundImage: `url('/Parallax Mountains 6.png')`
        }}
      />
      
      {/* Text Overlay */}
      <div className="relative h-full flex items-center justify-center">
        <h1 
          className="text-8xl font-bold mix-blend-overlay"
          style={{
            color: 'rgba(0, 0, 0, 0.8)',
            letterSpacing: '0.05em',
            filter: 'contrast(1.5)',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
          }}
        >
          Snehal Wadhane
        </h1>
      </div>
    </div>
  )
}


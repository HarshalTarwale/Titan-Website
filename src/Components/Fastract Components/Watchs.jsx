import React from 'react'
import Heading3 from '../Heading3'
import WatchCatalog from '../Watchcatelog'

const Watchs = () => {
  // Fastract watches data - using images from public/Fastract/watches
  const fastractWatches = [
    // Row 1
    {
      id: 1,
      imageSrc: 'public/Fastract/watches/G-SHOCK CASIOAK FULL METAL TIFFANY 1.png',
      title: 'Titan | Fastract G-Shock Metal',
      description: 'Rugged Sport Smartwatch',
      price: '₹ 14,995.00',
      rating: '4.8'
    },
    {
      id: 2,
      imageSrc: 'public/Fastract/watches/CITIZEN X PANTONE tsuyosa Automatic NJ0158-89X 1.png',
      title: 'Titan | Fastract Pantone Blue',
      description: 'Automatic Fashion Watch',
      price: '₹ 12,495.00',
      rating: '4.7'
    },
    {
      id: 3,
      imageSrc: 'public/Fastract/watches/CITIZEN X PANTONE Tsuyosa Automatic NJ0158-89Y 1.png',
      title: 'Titan | Fastract Pantone Green',
      description: 'Colorful Automatic Watch',
      price: '₹ 12,495.00',
      rating: '4.7'
    },
    {
      id: 4,
      imageSrc: 'public/Fastract/watches/CITIZEN X PANTONE tsuyosa Automatic NJ0158-89Z 1.png',
      title: 'Titan | Fastract Pantone Pink',
      description: 'Vibrant Automatic Watch',
      price: '₹ 12,495.00',
      rating: '4.7'
    },
    {
      id: 5,
      imageSrc: 'public/Fastract/watches/Rolex Sky Dweller 1.png',
      title: 'Titan | Fastract Sky Dweller',
      description: 'Premium Dual Time Watch',
      price: '₹ 22,995.00',
      rating: '4.9'
    },
    {
      id: 6,
      imageSrc: 'public/Fastract/watches/Poetry in motion 1.png',
      title: 'Titan | Fastract Poetry Motion',
      description: 'Artistic Design Watch',
      price: '₹ 16,995.00',
      rating: '4.8'
    },
    // Row 2
    {
      id: 7,
      imageSrc: 'public/Fastract/watches/Premium Photo _ Man watch mockup without brand in flat photography 1.png',
      title: 'Titan | Fastract Premium',
      description: 'Clean Minimalist Watch',
      price: '₹ 13,795.00',
      rating: '4.6'
    },
    {
      id: 8,
      imageSrc: 'public/Fastract/watches/Vintage Charm Meets Modern Tech_ The Seiko Speedtimer SSC937P1 Review (Solar-Powered Chronograph) — MTR Watches 1.png',
      title: 'Titan | Fastract Speedtimer',
      description: 'Solar Chronograph Watch',
      price: '₹ 18,495.00',
      rating: '4.8'
    },
    {
      id: 9,
      imageSrc: 'public/Fastract/watches/Olivia Burton London.jpg',
      title: 'Titan | Fastract London',
      description: 'Elegant Fashion Watch',
      price: '₹ 9,995.00',
      rating: '4.5'
    },
    {
      id: 10,
      imageSrc: 'public/Fastract/watches/Latest Elegant Watches.jpg',
      title: 'Titan | Fastract Elegant',
      description: 'Modern Chic Watch',
      price: '₹ 8,795.00',
      rating: '4.4'
    },
    {
      id: 11,
      imageSrc: 'public/Fastract/watches/Floral Strap Round Pointer Quartz Watch.jpg',
      title: 'Titan | Fastract Floral',
      description: 'Floral Design Watch',
      price: '₹ 7,495.00',
      rating: '4.3'
    },
    {
      id: 12,
      imageSrc: 'public/Fastract/watches/download (10).jpg',
      title: 'Titan | Fastract Sport',
      description: 'Active Lifestyle Watch',
      price: '₹ 9,295.00',
      rating: '4.5'
    },
    // Row 3
    {
      id: 13,
      imageSrc: 'public/Fastract/watches/download (11).jpg',
      title: 'Titan | Fastract Classic',
      description: 'Timeless Design Watch',
      price: '₹ 10,495.00',
      rating: '4.6'
    },
    {
      id: 14,
      imageSrc: 'public/Fastract/watches/download (12).jpg',
      title: 'Titan | Fastract Urban',
      description: 'City Style Watch',
      price: '₹ 11,295.00',
      rating: '4.6'
    },
    {
      id: 15,
      imageSrc: 'public/Fastract/watches/download (13).jpg',
      title: 'Titan | Fastract Designer',
      description: 'Fashion Forward Watch',
      price: '₹ 12,995.00',
      rating: '4.7'
    },
    {
      id: 16,
      imageSrc: 'public/Fastract/watches/download (14).jpg',
      title: 'Titan | Fastract Executive',
      description: 'Professional Watch',
      price: '₹ 13,495.00',
      rating: '4.7'
    },
    {
      id: 17,
      imageSrc: 'public/Fastract/watches/G-SHOCK CASIOAK FULL METAL TIFFANY 1.png',
      title: 'Titan | Fastract G-Shock Metal',
      description: 'Rugged Sport Smartwatch',
      price: '₹ 14,995.00',
      rating: '4.8'
    },
    {
      id: 18,
      imageSrc: 'public/Fastract/watches/CITIZEN X PANTONE tsuyosa Automatic NJ0158-89X 1.png',
      title: 'Titan | Fastract Pantone Blue',
      description: 'Automatic Fashion Watch',
      price: '₹ 12,495.00',
      rating: '4.7'
    },
    // Row 4
    {
      id: 19,
      imageSrc: 'public/Fastract/watches/CITIZEN X PANTONE Tsuyosa Automatic NJ0158-89Y 1.png',
      title: 'Titan | Fastract Pantone Green',
      description: 'Colorful Automatic Watch',
      price: '₹ 12,495.00',
      rating: '4.7'
    },
    {
      id: 20,
      imageSrc: 'public/Fastract/watches/CITIZEN X PANTONE tsuyosa Automatic NJ0158-89Z 1.png',
      title: 'Titan | Fastract Pantone Pink',
      description: 'Vibrant Automatic Watch',
      price: '₹ 12,495.00',
      rating: '4.7'
    },
    {
      id: 21,
      imageSrc: 'public/Fastract/watches/Rolex Sky Dweller 1.png',
      title: 'Titan | Fastract Sky Dweller',
      description: 'Premium Dual Time Watch',
      price: '₹ 22,995.00',
      rating: '4.9'
    },
    {
      id: 22,
      imageSrc: 'public/Fastract/watches/Poetry in motion 1.png',
      title: 'Titan | Fastract Poetry Motion',
      description: 'Artistic Design Watch',
      price: '₹ 16,995.00',
      rating: '4.8'
    },
    {
      id: 23,
      imageSrc: 'public/Fastract/watches/Premium Photo _ Man watch mockup without brand in flat photography 1.png',
      title: 'Titan | Fastract Premium',
      description: 'Clean Minimalist Watch',
      price: '₹ 13,795.00',
      rating: '4.6'
    },
    {
      id: 24,
      imageSrc: 'public/Fastract/watches/Vintage Charm Meets Modern Tech_ The Seiko Speedtimer SSC937P1 Review (Solar-Powered Chronograph) — MTR Watches 1.png',
      title: 'Titan | Fastract Speedtimer',
      description: 'Solar Chronograph Watch',
      price: '₹ 18,495.00',
      rating: '4.8'
    },
    // Row 5
    {
      id: 25,
      imageSrc: 'public/Fastract/watches/Olivia Burton London.jpg',
      title: 'Titan | Fastract London',
      description: 'Elegant Fashion Watch',
      price: '₹ 9,995.00',
      rating: '4.5'
    },
    {
      id: 26,
      imageSrc: 'public/Fastract/watches/Latest Elegant Watches.jpg',
      title: 'Titan | Fastract Elegant',
      description: 'Modern Chic Watch',
      price: '₹ 8,795.00',
      rating: '4.4'
    },
    {
      id: 27,
      imageSrc: 'public/Fastract/watches/Floral Strap Round Pointer Quartz Watch.jpg',
      title: 'Titan | Fastract Floral',
      description: 'Floral Design Watch',
      price: '₹ 7,495.00',
      rating: '4.3'
    },
    {
      id: 28,
      imageSrc: 'public/Fastract/watches/download (10).jpg',
      title: 'Titan | Fastract Sport',
      description: 'Active Lifestyle Watch',
      price: '₹ 9,295.00',
      rating: '4.5'
    },
    {
      id: 29,
      imageSrc: 'public/Fastract/watches/download (11).jpg',
      title: 'Titan | Fastract Classic',
      description: 'Timeless Design Watch',
      price: '₹ 10,495.00',
      rating: '4.6'
    },
    {
      id: 30,
      imageSrc: 'public/Fastract/watches/download (12).jpg',
      title: 'Titan | Fastract Urban',
      description: 'City Style Watch',
      price: '₹ 11,295.00',
      rating: '4.6'
    },
    // Row 6
    {
      id: 31,
      imageSrc: 'public/Fastract/watches/download (13).jpg',
      title: 'Titan | Fastract Designer',
      description: 'Fashion Forward Watch',
      price: '₹ 12,995.00',
      rating: '4.7'
    },
    {
      id: 32,
      imageSrc: 'public/Fastract/watches/download (14).jpg',
      title: 'Titan | Fastract Executive',
      description: 'Professional Watch',
      price: '₹ 13,495.00',
      rating: '4.7'
    },
    {
      id: 33,
      imageSrc: 'public/Fastract/watches/G-SHOCK CASIOAK FULL METAL TIFFANY 1.png',
      title: 'Titan | Fastract G-Shock Metal',
      description: 'Rugged Sport Smartwatch',
      price: '₹ 14,995.00',
      rating: '4.8'
    },
    {
      id: 34,
      imageSrc: 'public/Fastract/watches/CITIZEN X PANTONE tsuyosa Automatic NJ0158-89X 1.png',
      title: 'Titan | Fastract Pantone Blue',
      description: 'Automatic Fashion Watch',
      price: '₹ 12,495.00',
      rating: '4.7'
    },
    {
      id: 35,
      imageSrc: 'public/Fastract/watches/CITIZEN X PANTONE Tsuyosa Automatic NJ0158-89Y 1.png',
      title: 'Titan | Fastract Pantone Green',
      description: 'Colorful Automatic Watch',
      price: '₹ 12,495.00',
      rating: '4.7'
    },
    {
      id: 36,
      imageSrc: 'public/Fastract/watches/CITIZEN X PANTONE tsuyosa Automatic NJ0158-89Z 1.png',
      title: 'Titan | Fastract Pantone Pink',
      description: 'Vibrant Automatic Watch',
      price: '₹ 12,495.00',
      rating: '4.7'
    }
  ]

  return (
    <div className='w-full relative pt-[10vh] mt-[15vh]'>
        {/* Background FASTRACT Heading */}
        <div className='absolute top-0 left-0 right-0 flex justify-center opacity-50 z-0'>
          <Heading3 text="FASTRACT" style={{
              fontSize: '120px',
              letterSpacing: '10px',
              marginRight: '-12px'
            }} />
        </div>
        
        {/* Watch Catalog - Positioned over half of FASTRACT text */}
        <div className='relative z-10 mt-[7vh]'>
          <WatchCatalog watches={fastractWatches} />
        </div>
    </div>
  )
}

export default Watchs

import React from 'react'
import WatchCard from './WatchCard'

/**
 * WatchCatalog Component
 * Displays a grid of watch products using WatchCard components
 * 
 * *** CUSTOMIZATION GUIDE ***
 * - Grid: 6 columns in one line
 * - Cards overlay the EDGE heading
 * - Edit watch data in the 'watches' array below
 * 
 * *** WATCH DATA STRUCTURE ***
 * Each watch object requires:
 * - id: Unique identifier
 * - imageSrc: Path to watch image (public/Edge/Watches/)
 * - title: Watch name/model
 * - description: Watch type/collection
 * - price: Formatted price string
 * - rating: Rating out of 5
 */

const WatchCatalog = () => {
  // Watch products data array
  const watches = [
    // Row 1
    {
      id: 1,
      imageSrc: 'public/Edge/Watches/This Is the Field Watch You Buy When You Outgrow Your Timex.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 2,
      imageSrc: 'public/Edge/Watches/download (14).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 3,
      imageSrc: 'public/Edge/Watches/Product Photography.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 4,
      imageSrc: 'public/Edge/Watches/Kojima Productions x NASA x Anicorn Watch Brings Space Ludens To Your Wrist.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    // Row 2
    {
      id: 5,
      imageSrc: 'public/Edge/Watches/IWC Pilot Watch Chronograph.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 6,
      imageSrc: 'public/Edge/Watches/download (17).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 7,
      imageSrc: 'public/Edge/Watches/download (16).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 8,
      imageSrc: 'public/Edge/Watches/download (15).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    // Row 3
    {
      id: 9,
      imageSrc: 'public/Edge/Watches/download (13).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 10,
      imageSrc: 'public/Edge/Watches/download (12).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 11,
      imageSrc: 'public/Edge/Watches/download (11).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 12,
      imageSrc: 'public/Edge/Watches/Rolex Milgauss.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    // Row 4
    {
      id: 13,
      imageSrc: 'public/Edge/Watches/download (10).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 14,
      imageSrc: 'public/Edge/Watches/Cartier ❤.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 15,
      imageSrc: 'public/Edge/Watches/Brew Watch Co_.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 16,
      imageSrc: 'public/Edge/Watches/AARK Collective _ Unique Designs for Timeless Moments.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
  ];

  return (
    <div className='w-full flex justify-center px-4'>
      {/* Grid Container - 6 columns in one line */}
      <div className='grid grid-cols-6 gap-x-[1.5vw] gap-y-[6vh] max-w-[95vw]'>
        {watches.map((watch) => (
          <WatchCard
            key={watch.id}
            imageSrc={watch.imageSrc}
            title={watch.title}
            description={watch.description}
            price={watch.price}
            rating={watch.rating}
          />
        ))}
      </div>
    </div>
  )
}

export default WatchCatalog

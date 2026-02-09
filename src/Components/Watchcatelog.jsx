import React from 'react'
import WatchCard from './WatchCard'

/**
 * WatchCatalog Component (Reusable)
 * Displays a grid of watch products using WatchCard components
 * 
 * *** REUSABILITY GUIDE ***
 * This component can be reused across different pages by passing custom watch data
 * 
 * @param {Array} watches - Optional array of watch objects (if not provided, uses default Edge watches)
 * @param {Number} cardsPerRow - Number of cards per row (default: 6)
 * @param {String} className - Additional CSS classes for container
 * 
 * *** USAGE EXAMPLES ***
 * 
 * // Default usage with Edge watches
 * <WatchCatalog />
 * 
 * // Custom watches with different images
 * <WatchCatalog watches={myCustomWatches} />
 * 
 * // Different grid layout
 * <WatchCatalog cardsPerRow={4} />
 * 
 * *** WATCH DATA STRUCTURE ***
 * Each watch object requires:
 * {
 *   id: 1,
 *   imageSrc: 'path/to/image.jpg',
 *   title: 'Watch Name',
 *   description: 'Watch Description',
 *   price: '₹ 7,195.00',
 *   rating: '4.4'
 * }
 */

const WatchCatalog = ({ 
  watches = null, 
  cardsPerRow = 6,
  className = ''
}) => {
  
  // Default watches data for Edge collection (6 rows x 6 cards = 36 watches)
  // Using available images from public/Edge/Watches, repeating as needed
  const defaultWatches = [
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
    // Row 2
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
    // Row 3
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
    {
      id: 17,
      imageSrc: 'public/Edge/Watches/This Is the Field Watch You Buy When You Outgrow Your Timex.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 18,
      imageSrc: 'public/Edge/Watches/download (14).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    // Row 4
    {
      id: 19,
      imageSrc: 'public/Edge/Watches/Product Photography.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 20,
      imageSrc: 'public/Edge/Watches/Kojima Productions x NASA x Anicorn Watch Brings Space Ludens To Your Wrist.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 21,
      imageSrc: 'public/Edge/Watches/IWC Pilot Watch Chronograph.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 22,
      imageSrc: 'public/Edge/Watches/download (17).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 23,
      imageSrc: 'public/Edge/Watches/download (16).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 24,
      imageSrc: 'public/Edge/Watches/download (15).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    // Row 5
    {
      id: 25,
      imageSrc: 'public/Edge/Watches/download (13).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 26,
      imageSrc: 'public/Edge/Watches/download (12).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 27,
      imageSrc: 'public/Edge/Watches/download (11).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 28,
      imageSrc: 'public/Edge/Watches/Rolex Milgauss.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 29,
      imageSrc: 'public/Edge/Watches/download (10).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 30,
      imageSrc: 'public/Edge/Watches/Cartier ❤.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    // Row 6
    {
      id: 31,
      imageSrc: 'public/Edge/Watches/Brew Watch Co_.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 32,
      imageSrc: 'public/Edge/Watches/AARK Collective _ Unique Designs for Timeless Moments.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 33,
      imageSrc: 'public/Edge/Watches/This Is the Field Watch You Buy When You Outgrow Your Timex.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 34,
      imageSrc: 'public/Edge/Watches/download (14).jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 35,
      imageSrc: 'public/Edge/Watches/Product Photography.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
    {
      id: 36,
      imageSrc: 'public/Edge/Watches/Kojima Productions x NASA x Anicorn Watch Brings Space Ludens To Your Wrist.jpg',
      title: 'Titan | Neo Splash Blue Dial Quartz',
      description: 'Steel Strap watch for Men Watch',
      price: '₹ 7,195.00',
      rating: '4.4'
    },
  ];

  // Use provided watches or default watches
  const watchList = watches || defaultWatches;

  // Dynamic grid columns based on cardsPerRow
  const gridColsClass = `grid-cols-${cardsPerRow}`;

  return (
    <div className={`w-full flex justify-center px-4 ${className}`}>
      {/* Grid Container - Dynamic columns based on cardsPerRow */}
      <div className={`grid ${gridColsClass} gap-x-[1.5vw] gap-y-[6vh] max-w-[95vw]`}>
        {watchList.map((watch) => (
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
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({ num = 5 }: { num?: number }) => {
  const [rating, setRating] = useState(0)
  const [hoveredStar, setHoveredStar] = useState(0)

  function handleRating(index: number) {
    console.log('Clicked star index:', index)
    setRating(index)
  }

  function handleMouseEnter(index: number) {
    console.log('Hovered star index:', index)
    setHoveredStar(index)
  }

  function handleMouseLeave() {
    setHoveredStar(rating)
  }

  return (
    <div className='flex space-4'>
      {[...Array(num)].map((_, index) => {
        index++
        return (
          <FaStar
            key={index}
            onClick={() => handleRating(index)}
            className={index <= (hoveredStar || rating) ? 'text-yellow-400' : 'text-gray-800'}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        )
      })}
    </div>
  )
}

export default StarRating

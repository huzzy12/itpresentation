import { TimelineItemProps } from "@/types";

const TimelineItem = ({
  year,
  title,
  description,
  image,
  imageAlt,
  position
}: TimelineItemProps) => {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-2 border-white shadow-md z-10"></div>
      
      <div className={`w-1/2 ${position === 'left' ? 'pr-8 text-right' : 'pl-8'}`}>
        {position === 'left' ? (
          <>
            <h3 className="font-data font-bold text-base sm:text-lg">{year}</h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">{description}</p>
          </>
        ) : (
          image && (
            <img 
              src={image} 
              alt={imageAlt || title} 
              className="rounded-lg shadow-md h-20 w-full object-cover ml-auto" 
            />
          )
        )}
      </div>
      
      <div className={`w-1/2 ${position === 'right' ? 'pl-8' : 'pr-8 text-right'}`}>
        {position === 'right' ? (
          <>
            <h3 className="font-data font-bold text-base sm:text-lg">{year}</h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">{description}</p>
          </>
        ) : (
          image && (
            <img 
              src={image} 
              alt={imageAlt || title} 
              className="rounded-lg shadow-md h-20 w-full object-cover" 
            />
          )
        )}
      </div>
    </div>
  );
};

export default TimelineItem;

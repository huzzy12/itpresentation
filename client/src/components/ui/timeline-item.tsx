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
      <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white shadow-md"></div>
      
      <div className={`w-1/2 ${position === 'left' ? 'pr-10 text-right' : 'pl-10'}`}>
        {position === 'left' ? (
          <>
            <h3 className="font-data font-bold text-xl">{year}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
          </>
        ) : (
          image && (
            <img 
              src={image} 
              alt={imageAlt || title} 
              className="rounded-lg shadow-md h-32 w-full object-cover ml-auto" 
            />
          )
        )}
      </div>
      
      <div className={`w-1/2 ${position === 'right' ? 'pl-10' : 'pr-10 text-right'}`}>
        {position === 'right' ? (
          <>
            <h3 className="font-data font-bold text-xl">{year}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
          </>
        ) : (
          image && (
            <img 
              src={image} 
              alt={imageAlt || title} 
              className="rounded-lg shadow-md h-32 w-full object-cover" 
            />
          )
        )}
      </div>
    </div>
  );
};

export default TimelineItem;

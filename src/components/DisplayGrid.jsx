import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

const DisplayGrid = ({ title, description, list }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleItemClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      {/* Header */}
      <div className='mb-5 border bg-slate-600 p-5'>
        <h1 className='text-4xl text-center text-white'>{title}</h1>
        <p className='text-center text-white'>{description}</p>
      </div>

      {/* Course Categories Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-0 justify-center'>
        {list.map((item) => (
          <div key={item.title} className='p-3 border'>
            <h1 className='font-semibold'>{item.title}</h1>
            <Separator />
            {item.parts.map((subItem) => (
              <div key={subItem.name}>
                <Dialog>
                  <DialogTrigger asChild>
                    <div className='cursor-pointer hover:underline'>
                      <p>{subItem.name}</p>
                      <Separator />
                    </div>
                  </DialogTrigger>
                  <DialogContent
                    aria-describedby={`description-${subItem.name}`}
                  >
                    <DialogHeader>
                      <DialogTitle className='text-center'>
                        {subItem.name}
                      </DialogTitle>

                      {/* Conditional Rendering for Image or Link */}
                      {subItem.image ? (
                        <img
                          src={`/certificates/${subItem.image}`}
                          alt={`${subItem.name} certificate`}
                          className='mt-4 max-w-full h-auto'
                        />
                      ) : (
                        <a
                          href={subItem.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-blue-500 hover:underline mt-4'
                        >
                          {subItem.link}
                        </a>
                      )}
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayGrid;

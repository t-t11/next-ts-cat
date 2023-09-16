'use client';
import { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getCatImage } from './data/getData';

const Home: NextPage = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCatImage().then((newImage) => {
      setImageUrl(newImage.url);
      setLoading(false);
    });
  }, []);

  const handleClick = async () => {
    setLoading(true);
    const newImage = await getCatImage();
    setImageUrl(newImage.url);
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl mb-2">Cat Image Generator</h1>
      <div className="frame">
        {loading || (
          <Image
            src={imageUrl}
            className="min-h-full min-w-full aspect-square object-cover"
            alt="a cat image"
            width={300}
            height={300}
          />
        )}
      </div>
      <button
        onClick={handleClick}
        className="button h-14 w-56 text-base font-bold bg-transparent cursor-pointer"
      >
        See Another Cats!!!
      </button>
    </div>
  );
};

export default Home;

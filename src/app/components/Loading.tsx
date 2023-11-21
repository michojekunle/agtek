import React from 'react';
import Image from 'next/image';
import loading from '@/public/assets/loading.gif';

const Loading = () => {
  return (
    <div>
        <Image
            src={loading}
            alt='loading gif'
        />
    </div>
  )
}

export default Loading
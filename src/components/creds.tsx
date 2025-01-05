import React from 'react';
import Link from 'next/link';

export default function Credits() {
    return (
        <div id="creds" className='fixed bottom-3 right-5 text-light'>
            Photo by{' '}
            <Link className='no-underline' href="https://unsplash.com/@pueblovista?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Paul Pastourmatzis
            </Link>{' '}
            on{' '}
            <Link className='no-underline' href="https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
            </Link>
        </div>
    );
}
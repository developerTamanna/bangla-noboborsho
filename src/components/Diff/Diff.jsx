import React from 'react';

const Diff = () => {
    return (
        <div className="relative p-4">
    <div className="absolute inset-0 bg-[url('https://i.ibb.co/hR95CPbq/Screenshot-2025-04-14-205603.png')] bg-cover bg-center opacity-60 "></div>
    <figure className="diff aspect-[16/6]   relative z-10" tabIndex={0}>
        <div className="diff-item-1" role="img" tabIndex={0}>
            <div className="bg-yellow-50 text-orange-600 grid place-content-center text-6xl font-extrabold tracking-wider">
            এসো হে বৈশাখ
            </div>
        </div>
        <div className="diff-item-2" role="img">
            <div className=" text-orange-600 grid place-content-center text-3xl font-extrabold tracking-wider">
            বৈশাখের বিকেলে বেলাই  তোমায় নিয়ে বকুল তলাই প্রেমের এক্কান গান শুনাবো🌸🌸🌸💝💝
            </div>
        </div>
        <div className="diff-resizer bg-orange-200"></div>
    </figure>
</div>
    );
};

export default Diff;

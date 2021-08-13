import { Button } from 'antd';
import Image from 'next/image';

const Card = () => {
  return (
    <div className="fixed w-screen h-screen bg-pale-blue">
      <div className="fixed  w-screen h-1/2 bg-wave bg-contain">
        <div className="fixed w-screen h-screen flex justify-center items-center">
          <div className="container mx-auto flex flex-col w-4/12 bg-white items-center rounded-2xl shadow-xl overflow-hidden">
            <div className="w-full">
              <Image
                src="/../public/assets/illustration-hero.svg"
                layout="responsive"
                width={450}
                height={220}
              />
            </div>
            <div className="p-8 text-center flex flex-col gap-6">
              <h1 className="title">Order Summary</h1>
              <p className="paragraph px-7">
                You can now listen to millions of songs, audiobooks, and
                podcasts on any device anywhere you like!
              </p>
              <div className="flex items-center bg-very-pale-blue p-3 rounded-xl justify-between">
                <div className="flex gap-3 items-center">
                  <Image
                    src="/../public/assets/icon-music.svg"
                    height={50}
                    width={50}
                    layout="fixed"
                  />
                  <div className="text-left">
                    <p className="heading">Annual Plan</p>
                    <p className="paragraph ">$59.99/year</p>
                  </div>
                </div>
                <button className="underline paragraph">Change</button>
              </div>
              <button className="bg-bright-blue text-very-pale-blue w-full py-2 rounded-lg shadow-2xl transform active:scale-95">
                Proceed to Payment
              </button>
              <Button type="text" className="text-dark-blue">
                Cancel Order
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

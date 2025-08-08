import { useState, useEffect, useRef } from "react";
import clsx from 'clsx';
import QRCode from 'qrcode';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Back from '@/icons/back.svg?react';

const option = {
  margin: 0,
  type: 'svg',
  color: {
    dark: '#333333ee',
    light: '#00000000'
  }
};

function isValidUrl(url) {
  if (!url) return false;
   try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

export default function DevicePreview({ url: tarurl, config }) {
  const url = (tarurl || (new URLSearchParams(window.location.search)).get('url')).replace(/\/+$/, '');
  const cfg = {
    desktop: {
      width: 1280,
      height: 800,
      class: 'bg-teal-600',
      icon: '💻',
      label: config.desktop,
    },
    tablet: {
      width: 768,
      height: 1024,
      class: 'bg-green-600',
      icon: '📟',
      label: config.tablet,
    },
    mobile: {
      width: 375,
      height: 667,
      class: 'bg-pink-600',
      icon: '📱',
      label: config.mobile,
    },
    full: {
      class: 'bg-yellow-600',
      icon: '⛶',
      label: config.full,
    },
    
  }
  const wrapperRef = useRef(null);
  const [qrcode, setQrcode] = useState(null);
  const [isShow, setIsShow] = useState(false);

  const setDevice = (type) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.style.transition = "all 0.3s ease-in-out";

    let { width, height } = cfg[type];
    let scale = 1;
    const deviceWidth = document.documentElement.scrollWidth;
    const deviceHeight = document.documentElement.scrollHeight;
    const rect = wrapperRef.current.getBoundingClientRect()
    if (type === 'full') {
      width = deviceWidth;
      height = deviceHeight - rect.top;
    } else {
      if (type === 'mobile' && deviceWidth < width) {
        width = deviceWidth;
      }
      scale = deviceWidth < width ? deviceWidth / width : 1;
      if (deviceHeight - rect.top < height && scale === 1) {
        height = deviceHeight - rect.top;
      }
    }
    Object.assign(wrapper.style, {
      width: `${width}px`,
      height: `${height}px`,
      minHeight: `${height}px`,
      transform: `scale(${scale})`,
    });
  };

  useEffect(() => {
    if (isValidUrl(url)) {
      const deviceWidth = document.documentElement.scrollWidth;
      setDevice('full');
      (async() => setQrcode(await QRCode.toString(window.location.href, option)))();
    }
  }, []);
  if (!isValidUrl(url)) {
    return <div className="w-full text-center text-3xl font-bold text-red">
      {config.tip}{url}
    </div>
  }

  return (
    <section className="bg-white flex flex-col items-center py-5 px-2 md:py-10 md:px-4 bg-gray-100 w-screen h-screen overflow-hidden">
      <div className="flex mb-4 md:mb-6 space-x-4">
        <button
          className={clsx(
            "rounded text-white hover:bg-blue-700 transition flex items-center",
            "px-2 py-1 md:px-4 md:py-2 text-sm md:test-lg bg-gray-600",
          )}
          onClick={() => history.back()}
        >
          <Back className="fill-current" />
          <span className="ml-1">{config.back || 'back'}</span>
        </button>
        {['desktop', 'tablet', 'mobile', 'full'].map(type =>
          <button
            key={type}
            onClick={() => setDevice(type)}
            className={clsx(
              "rounded text-white hover:bg-blue-700 transition",
              "px-2 py-1 md:px-4 md:py-2 text-sm md:test-lg",
              cfg[type].class
            )}
          >
            {cfg[type].icon}
            <span className="max-sm:hidden ml-1">{cfg[type].label}</span>
          </button>
        )}
        {qrcode && <HoverCard open={isShow} onOpenChange={(open) => setIsShow(open)}>
          <HoverCardTrigger asChild>
            <div
              className="mx-auto w-8 md:w-9"
              dangerouslySetInnerHTML={{ __html: qrcode }}
              onClick={() => setIsShow(!isShow)}
            />
          </HoverCardTrigger>
          <HoverCardContent className="w-auto">
            <div
              className="border border-black/30 mx-auto w-24"
              dangerouslySetInnerHTML={{ __html: qrcode }}
            />
          </HoverCardContent>
        </HoverCard>}
      </div>
      <div
        ref={wrapperRef}
        className="transform origin-top transition-all duration-300 ease-in-out"
        style={{ width: "1280px", height: "800px", transform: "scale(1)" }}
      >
        <div
          id="iframe-loading"
          className="absolute inset-0 flex items-center justify-center bg-white z-[-1] text-lg"
        >
          {config.loading}
        </div>
        <iframe
          src={url}
          className="w-full h-full rounded-xl border-2 border-black-600 border-dashed"
          frameBorder="0"
          onLoad={() => {document.querySelector('#iframe-loading').hidden = true}}
        ></iframe>
      </div>
    </section>
  );
}


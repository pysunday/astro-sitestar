import React, { useState } from "react"
import clsx from 'clsx';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function App({ imgs, class: className }) {
  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div className={clsx("relative", className)}>
      <div ref={sliderRef} className="keen-slider bg-black">
        {imgs.map(it => <img
          key={it}
          src={it}
          width="600"
          height="400"
          className="keen-slider__slide aspect-video w-full object-contain"
          loading="lazy"
          decoding="async"
        />)}
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex py-[10px] justify-center">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={clsx(
                  "border-none w-[10px] h-[10px] bg-[#c5c5c5] mx-[5px] p-[5px] rounded-full cursor-pointer",
                  "focus:outline-none",
                  currentSlide === idx ? "bg-black" : "",
                )}
              ></button>
            )
          })}
        </div>
      )}
    </div>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={clsx(
        "arrow w-[30px] h-[30px] absolute top-1/2 -translate-y-1/2 fill-white cursor-pointer",
        props.left ? "arrow--left" : "arrow--right",
        disabled,
        disabled && "fill-white/50",
        props.left ? "left-[5px]" : "right-[5px] left-auto",
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}


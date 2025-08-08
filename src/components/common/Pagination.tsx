import React from "react"
import {Pagination} from "@heroui/pagination";
import { getScreenType } from '@/lib/getScreenType';
import { useWindowSize } from 'react-use';

export default function({ current, total, path = '' }) {
  useWindowSize();
  const type = getScreenType();
  const handleChange = (page) => {
    window.location.href = `${path}/${page}/`;
  }
  return (
    <Pagination
      showControls
      onChange={handleChange}
      initialPage={current}
      total={total}
      size={type === 'default' ? "sm" : "md"}
      dotsJump={5}
      isCompact={type === 'default'}
      classNames={{
        base: "m-auto",
      }}
    />
  )
}

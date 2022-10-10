import { Anchor } from "@mantine/core";
import Image from "next/image"
import React from "react";

type Props = {
  width?: number | string;
  height?: number | string;
}

const Logo: React.FC<Props> = ({ width, height }) => {
  return (
    <Anchor href="/">
      <Image src="/AfroValley-Logo.png" width={width as string} height={height as string} alt="AfroValley" />               
    </Anchor>
  )
}

export default Logo
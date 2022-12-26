import { Anchor } from "@mantine/core";
import Image from "next/image"
import React from "react";

type Props = {
  width?: number | string;
  height?: number | string;
}

const LogoWithText: React.FC<Props> = ({ width, height }) => {
  return (
    <Anchor href="/">
      <Image src="/AfroValley-Logo-Plus-Text.png" width={width as string} height={height as string} alt="AfroValley" />               
    </Anchor>
  )
}

export default LogoWithText
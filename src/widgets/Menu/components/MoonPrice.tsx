import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  moonPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const MoonPrice: React.FC<Props> = ({ moonPriceUsd }) => {
  return moonPriceUsd ? (
    <PriceLink href="https://pancakeswap.info/token/0x81E4d494b85A24a58a6BA45c9B418b32a4E039de" target="_blank">
      <Text color="textSubtle" bold>{`$${moonPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(MoonPrice);

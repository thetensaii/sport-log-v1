import { RangeSlider as ChakraRangeSlider, RangeSliderProps} from "@chakra-ui/react";
import { RangeSliderTrack as ChakraRangeSliderTrack, RangeSliderTrackProps} from "@chakra-ui/react";
import { RangeSliderFilledTrack  as ChakraRangeSliderFilledTrack} from "@chakra-ui/react";
import { RangeSliderThumb as ChakraRangeSliderThumb, RangeSliderThumbProps} from "@chakra-ui/react";

export const RangeSlider = ({...props}: RangeSliderProps) => {
  return <ChakraRangeSlider {...props} />
}

export const RangeSliderTrack = ({...props}: RangeSliderTrackProps) => {
  return <ChakraRangeSliderTrack {...props} />
}

export const RangeSliderFilledTrack = () => {
  return <ChakraRangeSliderFilledTrack />
}

export const RangeSliderThumb = ({...props}: RangeSliderThumbProps) => {
  return <ChakraRangeSliderThumb {...props} />
}

export class Slider {
  idSlider: number;
  creDate: string;
  sliderDetails: SliderDetail[];
}

export interface SliderDetail {
  idSliderDetail: number;
  idSlider: number;
  idLanguage: number;
  title: string;
  description: string;
  image: string;
}

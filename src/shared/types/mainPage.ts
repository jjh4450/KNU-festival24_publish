/*
 * This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
 * If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * All contributors who participated in development before September 26, 2024, retain full copyright over their contributions.
 * These contributors are granted the right, under a Contributor License Agreement (CLA), to use, modify, and distribute their contributions
 * under additional or alternative licensing terms of their choosing, while the project as a whole remains licensed under the MPL 2.0.
 *
 * Any contributions made after September 26, 2024, are subject to the terms of the MPL 2.0 and are licensed accordingly.
 */

export interface Island {
  name: string;
  image: string;
  style: string;
  url: string;
}

export interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  initialSlide: number;
  autoplay: boolean;
  speed: number;
  autoplaySpeed: number;
}

export interface IslandItemProps extends Island {
  index: number;
}

export interface artistInfoListProps {
  name: string;
  image: string;
  url: string;
}

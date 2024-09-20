import apink from "../../assets/artist/apink_festa_insta.jpg";
import choi_yu_ree from "../../assets/artist/choi_yu_ree_festa_insta.jpg";
import creespy from "../../assets/artist/creespy_festa_insta.jpg";
import glen_chenck from "../../assets/artist/glen_cenck_festa_insta.jpg";
import kwon_eun_bi from "../../assets/artist/kwon_eunbi_festa_insta.jpg";
import roy from "../../assets/artist/roy_festa_insta.jpg";
import gummy from "../../assets/artist/gummy_festa_insta.jpg";
import { artistInfoListProps } from "../../shared/types/mainPage.ts";
import {
  ARTIST_APINK_URL, ARTIST_CHOI_YU_REE_URL,
  ARTIST_CREESPY_URL,
  ARTIST_GLEN_CENCK_URL, ARTIST_GUMMY_URL,
  ARTIST_KWON_EUNBI_URL,
  ARTIST_ROY_URL
} from "../../shared/mainPageConst.ts";

//순서는 https://www.instagram.com/knu_festival/를 따름 (순서 변경 금지)
export const artistInfoList: artistInfoListProps[] = [
  { name: "에이핑크", image: apink, url: ARTIST_APINK_URL },
  { name: "로이킴", image: roy, url: ARTIST_ROY_URL },
  { name: "글렌첸크", image: glen_chenck, url: ARTIST_GLEN_CENCK_URL },
  { name: "크리스피", image: creespy, url: ARTIST_CREESPY_URL },
  { name: "권은비", image: kwon_eun_bi, url: ARTIST_KWON_EUNBI_URL },
  { name: "최유리", image: choi_yu_ree, url: ARTIST_CHOI_YU_REE_URL },
  { name: "거미", image: gummy, url: ARTIST_GUMMY_URL },
];

export const artistList: string[] = artistInfoList.map((artist) => artist.image);

import trindadePicMob from '../assets/statements/mobile/trindade_pic_mob.png';
import trindadeTextMob from '../assets/statements/mobile/trindade_text_mob.svg';
import trindadePicDesktop from '../assets/statements/desktop/trindade_pic_desk.svg';
import trindadeTextDesktop from '../assets/statements/desktop/trindade_text_desk.svg';

import paulaPicMob from '../assets/statements/mobile/paula_pic_mob.png';
import paulaTextMob from '../assets/statements/mobile/paula_text_mob.svg';
import paulaPicDesktop from '../assets/statements/desktop/paula_pic_desk.png';
import paulaTextDesktop from '../assets/statements/desktop/paula_text_desk.svg';

import nadelmanPicMob from '../assets/statements/mobile/nadelman_pic_mob.png';
import nadelmanTextMob from '../assets/statements/mobile/nadelman_text_mob.svg';

// import kazuePicMob from '../assets/statements/mobile/kazue_pic_mob.png';
// import kazueTextMob from '../assets/statements/mobile/kazue_text_mob.svg';

import meirotPicMob from '../assets/statements/mobile/meirot_pic_mob.png';
import meirotTextMob from '../assets/statements/mobile/meirot_text_mob.svg';

const statementsInfoMob = [
  {
    name: 'Victor Trindade',
    bgColor: '#7D2CFF',
    personPic: trindadePicMob,
    personStatPic: trindadeTextMob,
  },
  {
    name: 'Paula Cruz',
    bgColor: '#FFFFFF',
    personPic: paulaPicMob,
    personStatPic: paulaTextMob,
  },
  {
    name: 'Eduardo Nadelman',
    bgColor: '#C2C2C2',
    personPic: nadelmanPicMob,
    personStatPic: nadelmanTextMob,
  },
  // {
  //   name: 'Kazue Kottwitz',
  //   bgColor: '#01CA30',
  //   personPic: kazuePicMob,
  //   personStatPic: kazueTextMob,
  // },
  {
    name: 'Victor Meirot',
    bgColor: '#000000',
    personPic: meirotPicMob,
    personStatPic: meirotTextMob,
  },
];

export const statementsInfoDesktop = [
  { name: 'Victor Trindade',
    bgColor: '#7D2CFF',
    picSide: 'left',
    personPic: trindadePicDesktop,
    personStatPic: trindadeTextDesktop,
  },
  { name: 'Paula Cruz',
    bgColor: '#FFFFFF',
    picSide: 'right',
    personPic: paulaPicDesktop,
    personStatPic: paulaTextDesktop,
  },
];

export default statementsInfoMob;

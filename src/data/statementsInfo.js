import trindadePicMob from '../assets/statements/mobile/trindade_pic_mob.svg';
import trindadeTextMob from '../assets/statements/mobile/trindade_text_mob.svg';
import trindadePicDesktop from '../assets/statements/desktop/trindade_pic_desk.svg';
import trindadeTextDesktop from '../assets/statements/desktop/trindade_text_desk.svg';
import paulaPicMob from '../assets/statements/mobile/paula_pic_mob.png';
import paulaTextMob from '../assets/statements/mobile/paula_text_mob.png';
import paulaPicDesktop from '../assets/statements/desktop/paula_pic_desk.png';
import paulaTextDesktop from '../assets/statements/desktop/paula_text_desk.png';

const statementsInfoMob = [
  { name: 'Victor Trindade',
    bgColor: '#7D2CFF',
    personPic: trindadePicMob,
    personStatPic: trindadeTextMob,
  },
  { name: 'Paula Cruz',
    bgColor: '#FFFFFF',
    personPic: paulaPicMob,
    personStatPic: paulaTextMob,
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

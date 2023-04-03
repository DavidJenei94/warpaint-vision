export interface coordinates {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export interface bubble extends coordinates {
  xDirection: string;
  yDirection: string;
  collision: boolean;
  roundDirection: string;
  pulseColor: string;
  transformDuration: number;
  name: string;
}

export const defaultBubble = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  xDirection: '0px',
  yDirection: '0px',
  collision: false,
  roundDirection: 'clockwise',
  pulseColor: 'purple',
  transformDuration: 20,
  name: '',
};

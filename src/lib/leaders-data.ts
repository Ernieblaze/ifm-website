export interface Leader {
  name: string;
  title: string;
  photo: string;
  photoAlt: string;
  // TODO(content): add a short message/quote from each leader once supplied.
  quote?: string;
}

export const LEADERS: Leader[] = [
  {
    name: "Emeka Ihruoha",
    title: "IFM Supreme Leader",
    photo: "/images/leader.jpg",
    photoAlt: "Portrait of Emeka Ihruoha, IFM Supreme Leader",
  },
];

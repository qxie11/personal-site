import { StaticImageData } from "next/image";

export interface IProjectItem {
  title: string;
  subtitle: string;
  url: string;
  img: StaticImageData;
}

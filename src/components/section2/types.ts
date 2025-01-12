export type projectCardData = {
  index: number;
  name: string;
  path: string;
  logoPath: string;
  styles: {
    title: string;
    titleCss: {
      color: string;
    };
    title2?: string;
    title2Css?: {
      color: string;
    };
  };
};

export type Platform = 'na' | 'eu';

export type Category = {
  id: string,
  name: string,
  shortname: string,
  locale: string,
};

export type Categories = Category[];

export type Application = {
  id: string,
  shortname: string,

}
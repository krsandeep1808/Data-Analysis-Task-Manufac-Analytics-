import agricultureData from '../data/agriculture.json';

export const loadAgricultureData = () => {
  return agricultureData.map((item: any) => ({
    ...item,
    production: item.production || 0,
    yield: item.yield || 0,
    cultivationArea: item.cultivationArea || 0,
  }));
};

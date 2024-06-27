export const getMaxMinProductionPerYear = (data: any[]) => {
    const result: Record<number, { max: string, min: string }> = {};
  
    data.forEach(item => {
      const year = item.year;
      if (!result[year]) {
        result[year] = { max: item.crop, min: item.crop };
      } else {
        if (item.production > data.find(d => d.crop === result[year].max && d.year === year).production) {
          result[year].max = item.crop;
        }
        if (item.production < data.find(d => d.crop === result[year].min && d.year === year).production) {
          result[year].min = item.crop;
        }
      }
    });
  
    return Object.keys(result).map(year => ({
      year,
      max: result[year].max,
      min: result[year].min
    }));
  };
  
  export const getAverageYieldAndArea = (data: any[]) => {
    const result: Record<string, { totalYield: number, totalArea: number, count: number }> = {};
  
    data.forEach(item => {
      if (!result[item.crop]) {
        result[item.crop] = { totalYield: 0, totalArea: 0, count: 0 };
      }
      result[item.crop].totalYield += item.yield;
      result[item.crop].totalArea += item.cultivationArea;
      result[item.crop].count += 1;
    });
  
    return Object.keys(result).map(crop => ({
      crop,
      avgYield: (result[crop].totalYield / result[crop].count).toFixed(3),
      avgArea: (result[crop].totalArea / result[crop].count).toFixed(3)
    }));
  };
  
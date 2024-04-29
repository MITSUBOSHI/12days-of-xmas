import dayData from './data/12days-characters.json';
import Day1Image from './assets/12days_of_xmas/day1.png';
import Day2Image from './assets/12days_of_xmas/day2.png';
import Day3Image from './assets/12days_of_xmas/day3.png';
import Day4Image from './assets/12days_of_xmas/day4.png';
import Day5Image from './assets/12days_of_xmas/day5.png';
import Day6Image from './assets/12days_of_xmas/day6.png';
import Day7Image from './assets/12days_of_xmas/day7.png';
import Day8Image from './assets/12days_of_xmas/day8.png';
import Day9Image from './assets/12days_of_xmas/day9.png';
import Day10Image from './assets/12days_of_xmas/day10.png';
import Day11Image from './assets/12days_of_xmas/day11.png';
import Day12Image from './assets/12days_of_xmas/day12.png';

const images = {
  1: Day1Image,
  2: Day2Image,
  3: Day3Image,
  4: Day4Image,
  5: Day5Image,
  6: Day6Image,
  7: Day7Image,
  8: Day8Image,
  9: Day9Image,
  10: Day10Image,
  11: Day11Image,
  12: Day12Image,
};
type imagesType = typeof images;
type DayNumberType = keyof imagesType;
type DayType = {
  dayNumber: DayNumberType;
  nameEn: string,
  nameJa: string,
  image: string
};
type DayDataType = Omit<DayType, 'image'>;

export const Days: DayType[] = (dayData as DayDataType[]).map((day) => {
  return {
    dayNumber: day.dayNumber,
    nameEn: day.nameEn,
    nameJa: day.nameJa,
    image: images[day.dayNumber]
  }
});
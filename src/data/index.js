import quranRecitationKids from './courses/Quran-recitation-kids.json';
import quranRecitationKidsImage from "./Images/Quran recitation kids copy.jpeg";
import quranRecitationAdult from './courses/Quran-recitation-adult.json';
import quranRecitationAdultImage from "./Images/Quran recitation adult.jpeg";
import quranRecitationBeginners from './courses/Quran-recitation-beginners.json';
import quranRecitationBeginnersImage from "./Images/Quran recitation beginner.jpeg";
import quranRecitationIjaza from './courses/Quran-recitation-Ijazah.json';
import quranRecitationIjazaImage from "./Images/Quran recitation ijaza.jpeg";
import quranRecitationQiraat from "./courses/Quran-recitation-Qira'at.json";
import quranRecitationQiraatImage from "./Images/Quran recitation qiraat course.jpeg";

const courses = {
  'quran-recitation-kids': quranRecitationKids,
  'quran-recitation-adults': quranRecitationAdult,
  'quran-recitation-beginners': quranRecitationBeginners,
  'quran-recitation-ijaza': quranRecitationIjaza,
  'quran-recitation-qiraat': quranRecitationQiraat
};

const courseImages = {
  'quran-recitation-kids': quranRecitationKidsImage,
  'quran-recitation-adults': quranRecitationAdultImage,
  'quran-recitation-beginners': quranRecitationBeginnersImage,
  'quran-recitation-ijaza': quranRecitationIjazaImage,
  'quran-recitation-qiraat': quranRecitationQiraatImage
};

export default courses;
export { courseImages };

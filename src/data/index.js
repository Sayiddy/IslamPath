// ------------------- JSON Imports -------------------
// Quran Recitation Courses
import quranRecitationKids from './courses/Quran-recitation-kids.json';
import quranRecitationAdult from './courses/Quran-recitation-adult.json';
import quranRecitationBeginners from './courses/Quran-recitation-beginners.json';
import quranRecitationIjaza from './courses/Quran-recitation-Ijazah.json';
import quranRecitationQiraat from './courses/Quran-recitation-Qira\'at.json';
import quranRecitationNouralbayan from './courses/Quran-recitation-Nouralbayan.json';
import quranRecitationQaidaNouraniyyah from './courses/Quran-recitation-qa\'idah nouraniyyah.json';

// Quran Memorisation Courses
import quranMemorisationKids from './courses/Quran-memorisation-kids.json';
import quranMemorisationAdults from './courses/Quran-memorisation-adults.json';
import quranMemorisationFemales from './courses/Quran-memorisation-females.json';
import quranMemorisationIntensive from './courses/Quran-memorisation-intenstive program.json';

// Quran with Tajweed Courses
import quranTajweedBeginners from './courses/Quran-tajweed-beginners.json';
import quranTajweedAdults from './courses/Quran-tajweed-adults.json';
import quranTajweedAdvanced from './courses/Quran-tajweed-advanced.json';

// Arabic Language Courses
import arabicReadingWriting from './courses/Arabic-reading writing.json';
import arabicQuranic from './courses/Arabic-quranic.json';
import arabicGrammar from './courses/Arabic-grammer.json';
import arabicIntensive from './courses/Arabic-intensive.json';

// Islamic Studies Courses
import islamicAqeedah from './courses/Islamic-aqeedah.json';
import islamicTafsir from './courses/Islamic-tafsir.json';
import islamicFiqh from './courses/Islamic-fiqh.json';
import islamicHadith from './courses/Islamic-hadith.json';
import islamicDuas from './courses/Islamic-duas.json';
import islamicSeerah from './courses/Islamic-seerah.json';

// ------------------- Image Imports -------------------
// Quran Recitation Images
import quranRecitationKidsImage from './Images/Quran recitation kids copy.jpeg';
import quranRecitationAdultImage from './Images/Quran recitation adult.jpeg';
import quranRecitationBeginnersImage from './Images/Quran recitation beginner.jpeg';
import quranRecitationIjazaImage from './Images/Quran recitation ijaza.jpeg';
import quranRecitationQiraatImage from './Images/Quran recitation qiraat course.jpeg';
import quranRecitationNouralbayanImage from './Images/Quran recitation Nour al Bayan.jpeg';
import quranRecitationQaidaNouraniyyahImage from './Images/Quran recitation qanidah nourania.jpeg';

// Quran Memorisation Images
import quranMemorisationKidsImage from './Images/memorise kids.jpeg';
import quranMemorisationAdultsImage from './Images/memorise adult.jpeg';
import quranMemorisationFemalesImage from './Images/memorise female.jpeg';
import quranMemorisationIntensiveImage from './Images/memorise intenstive.jpeg';

// Quran with Tajweed Images
import quranTajweedBeginnersImage from './Images/tajweed begineers.jpeg';
import quranTajweedAdultsImage from './Images/tajweed adult.jpeg';
import quranTajweedAdvancedImage from './Images/advance tajweed.jpeg';

// Arabic Language Images
import arabicReadingWritingImage from './Images/Arabic reading and writing.jpeg';
import arabicQuranicImage from './Images/Arabic quranic arabic.jpeg';
import arabicGrammarImage from './Images/Arabic grammer.jpeg';
import arabicIntensiveImage from './Images/Arabic intensive course.jpeg';

// Islamic Studies Images
import islamicAqeedahImage from './Images/Islamic aqeedah.jpeg';
import islamicTafsirImage from './Images/Islamic tasfir.jpeg';
import islamicFiqhImage from './Images/Islamic fiqh.jpeg';
import islamicHadithImage from './Images/Islamic hadith.jpeg';
import islamicDuasImage from './Images/Islamic duas.jpeg';
import islamicSeerahImage from './Images/Islamic seerah.jpeg';

// ------------------- Courses Object -------------------
const courses = {
  // Quran Recitation
  'quran-recitation-kids': quranRecitationKids,
  'quran-recitation-adult': quranRecitationAdult,
  'quran-recitation-beginners': quranRecitationBeginners,
  'quran-recitation-ijaza': quranRecitationIjaza,
  'quran-recitation-qiraat': quranRecitationQiraat,
  'quran-recitation-nouralbayan': quranRecitationNouralbayan,
  'quran-recitation-qaidah-nouraniyyah': quranRecitationQaidaNouraniyyah,

  // Quran Memorisation
  'quran-memorisation-kids': quranMemorisationKids,
  'quran-memorisation-adults': quranMemorisationAdults,
  'quran-memorisation-females': quranMemorisationFemales,
  'quran-memorisation-intenstive-program': quranMemorisationIntensive,

  // Quran with Tajweed
  'quran-tajweed-beginners': quranTajweedBeginners,
  'quran-tajweed-adults': quranTajweedAdults,
  'quran-tajweed-advanced': quranTajweedAdvanced,

  // Arabic Language
  'arabic-reading-writing': arabicReadingWriting,
  'arabic-quranic': arabicQuranic,
  'arabic-grammar': arabicGrammar,
  'arabic-intensive': arabicIntensive,

  // Islamic Studies
  'islamic-aqeedah': islamicAqeedah,
  'islamic-tafsir': islamicTafsir,
  'islamic-fiqh': islamicFiqh,
  'islamic-hadith': islamicHadith,
  'islamic-duas': islamicDuas,
  'islamic-seerah': islamicSeerah,
};

// ------------------- Images Object -------------------
const courseImages = {
  // Quran Recitation
  'quran-recitation-kids': quranRecitationKidsImage,
  'quran-recitation-adult': quranRecitationAdultImage,
  'quran-recitation-beginners': quranRecitationBeginnersImage,
  'quran-recitation-ijaza': quranRecitationIjazaImage,
  'quran-recitation-qiraat': quranRecitationQiraatImage,
  'quran-recitation-nouralbayan': quranRecitationNouralbayanImage,
  'quran-recitation-qaidah-nouraniyyah': quranRecitationQaidaNouraniyyahImage,

  // Quran Memorisation
  'quran-memorisation-kids': quranMemorisationKidsImage,
  'quran-memorisation-adults': quranMemorisationAdultsImage,
  'quran-memorisation-females': quranMemorisationFemalesImage,
  'quran-memorisation-intenstive-program': quranMemorisationIntensiveImage,

  // Quran with Tajweed
  'quran-tajweed-beginners': quranTajweedBeginnersImage,
  'quran-tajweed-adults': quranTajweedAdultsImage,
  'quran-tajweed-advanced': quranTajweedAdvancedImage,

  // Arabic Language
  'arabic-reading-writing': arabicReadingWritingImage,
  'arabic-quranic': arabicQuranicImage,
  'arabic-grammar': arabicGrammarImage,
  'arabic-intensive': arabicIntensiveImage,

  // Islamic Studies
  'islamic-aqeedah': islamicAqeedahImage,
  'islamic-tafsir': islamicTafsirImage,
  'islamic-fiqh': islamicFiqhImage,
  'islamic-hadith': islamicHadithImage,
  'islamic-duas': islamicDuasImage,
  'islamic-seerah': islamicSeerahImage,
};

export default courses;
export { courseImages };

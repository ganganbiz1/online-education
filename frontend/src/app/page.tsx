import { Box } from '@mui/material';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { CategorySection } from '@/components/CategorySection/CategorySection';
import { CourseSection } from '@/components/CourseSection/CourseSection';
import { featuredCourses, recommendedCourses } from '@/data/mockData';

export default function Home() {
  return (
    <Box>
      <HeroSection />
      <CategorySection />
      <CourseSection title="おすすめのコース" courses={recommendedCourses} />
      <CourseSection 
        title="ベストセラーコース" 
        courses={featuredCourses}
        showViewAll={true}
      />
    </Box>
  );
}

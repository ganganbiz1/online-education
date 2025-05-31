'use client';

import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { Course } from '@/data/mockData';
import { CourseCard } from '@/components/CourseCard/CourseCard';

interface CourseSectionProps {
  title: string;
  courses: Course[];
  showViewAll?: boolean;
}

export function CourseSection({ title, courses, showViewAll = true }: CourseSectionProps) {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 'bold', color: 'text.primary' }}
          >
            {title}
          </Typography>
          {showViewAll && (
            <Button
              endIcon={<ArrowForwardIcon />}
              sx={{ color: 'primary.main' }}
            >
              すべて見る
            </Button>
          )}
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
            gap: 3,
          }}
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </Box>
      </Container>
    </Box>
  );
} 
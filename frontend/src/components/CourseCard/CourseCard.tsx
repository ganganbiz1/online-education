'use client';

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
  Rating,
  Button,
} from '@mui/material';
import { Course } from '@/data/mockData';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="160"
          image={course.image}
          alt={course.title}
          sx={{ objectFit: 'cover' }}
        />
        {course.bestseller && (
          <Chip
            label="ベストセラー"
            color="secondary"
            size="small"
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              fontWeight: 'bold',
            }}
          />
        )}
        <Chip
          label={course.level}
          variant="outlined"
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: 1.3,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            mb: 1,
          }}
        >
          {course.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1 }}
        >
          {course.instructor}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography
            variant="body2"
            fontWeight="bold"
            sx={{ mr: 0.5, color: 'orange' }}
          >
            {course.rating}
          </Typography>
          <Rating value={course.rating} precision={0.1} size="small" readOnly />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ ml: 0.5 }}
          >
            ({course.reviewCount.toLocaleString()})
          </Typography>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            mb: 1,
            flexGrow: 1,
          }}
        >
          {course.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {course.duration} • {course.category}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              component="span"
              sx={{ fontWeight: 'bold', mr: 1 }}
            >
              ¥{course.price.toLocaleString()}
            </Typography>
            {course.originalPrice && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textDecoration: 'line-through' }}
              >
                ¥{course.originalPrice.toLocaleString()}
              </Typography>
            )}
          </Box>
          <Button
            variant="contained"
            size="small"
            sx={{ minWidth: 'auto', px: 2 }}
          >
            詳細
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
} 
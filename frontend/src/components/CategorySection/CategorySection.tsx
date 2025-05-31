'use client';

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardActionArea,
} from '@mui/material';
import { categories } from '@/data/mockData';

export function CategorySection() {
  return (
    <Box sx={{ py: { xs: 4, md: 6 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 4, fontWeight: 'bold', color: 'text.primary' }}
        >
          人気のカテゴリ
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(4, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 3,
          }}
        >
          {categories.map((category) => (
            <Card
              key={category.id}
              sx={{
                height: '100%',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                },
              }}
            >
              <CardActionArea>
                <CardContent
                  sx={{
                    textAlign: 'center',
                    py: { xs: 2, md: 3 },
                    px: 2,
                  }}
                >
                  <Typography
                    variant="h3"
                    component="div"
                    sx={{
                      mb: 1,
                      fontSize: { xs: '2rem', md: '2.5rem' },
                    }}
                  >
                    {category.icon}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      lineHeight: 1.3,
                    }}
                  >
                    {category.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
} 
'use client';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Menu,
  MenuItem,
  Badge,
} from '@mui/material';
import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  Person as PersonIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
} from '@mui/icons-material';
import { useState } from 'react';
import { categories } from '@/data/mockData';

export function Header() {
  const [categoriesMenuAnchor, setCategoriesMenuAnchor] = useState<null | HTMLElement>(null);

  const handleCategoriesMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setCategoriesMenuAnchor(event.currentTarget);
  };

  const handleCategoriesMenuClose = () => {
    setCategoriesMenuAnchor(null);
  };

  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar sx={{ px: { xs: 1, md: 3 } }}>
        {/* ロゴ */}
        <Typography
          variant="h5"
          component="div"
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            mr: 4,
            cursor: 'pointer',
          }}
        >
          EduPlatform
        </Typography>

        {/* カテゴリメニュー */}
        <Button
          color="inherit"
          onClick={handleCategoriesMenuOpen}
          endIcon={<KeyboardArrowDownIcon />}
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          カテゴリ
        </Button>
        <Menu
          anchorEl={categoriesMenuAnchor}
          open={Boolean(categoriesMenuAnchor)}
          onClose={handleCategoriesMenuClose}
        >
          {categories.map((category) => (
            <MenuItem key={category.id} onClick={handleCategoriesMenuClose}>
              <Typography sx={{ mr: 1 }}>{category.icon}</Typography>
              {category.name}
            </MenuItem>
          ))}
        </Menu>

        {/* 検索バー */}
        <Box sx={{ flexGrow: 1, mx: { xs: 1, md: 2 } }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="何を学びたいですか？"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: 'background.paper',
                borderRadius: 1,
              },
            }}
          />
        </Box>

        {/* 右側のボタン群 */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button
            color="inherit"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            Udemyで教える
          </Button>
          
          <IconButton color="inherit">
            <Badge badgeContent={3} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          <Button
            variant="outlined"
            size="small"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            ログイン
          </Button>

          <Button
            variant="contained"
            size="small"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            新規登録
          </Button>

          <IconButton
            color="inherit"
            sx={{ display: { xs: 'flex', sm: 'none' } }}
          >
            <PersonIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
} 
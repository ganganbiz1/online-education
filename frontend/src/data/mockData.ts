export interface Course {
  id: string;
  title: string;
  instructor: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  description: string;
  bestseller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: '1', name: 'プログラミング', icon: '💻' },
  { id: '2', name: 'ビジネス', icon: '💼' },
  { id: '3', name: 'デザイン', icon: '🎨' },
  { id: '4', name: 'マーケティング', icon: '📈' },
  { id: '5', name: '音楽', icon: '🎵' },
  { id: '6', name: '写真', icon: '📸' },
  { id: '7', name: '語学', icon: '🗣️' },
  { id: '8', name: 'データサイエンス', icon: '📊' },
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'React完全入門ガイド - モダンWebアプリケーション開発',
    instructor: '田中太郎',
    rating: 4.7,
    reviewCount: 15420,
    price: 2400,
    originalPrice: 12000,
    image: '/api/placeholder/300/200',
    category: 'プログラミング',
    level: 'Beginner',
    duration: '12時間',
    description: 'ReactとTypeScriptを使って本格的なWebアプリケーションを構築する方法を学びます。',
    bestseller: true,
  },
  {
    id: '2',
    title: 'Python機械学習入門 - データサイエンスの基礎',
    instructor: '佐藤花子',
    rating: 4.6,
    reviewCount: 8903,
    price: 2400,
    originalPrice: 15000,
    image: '/api/placeholder/300/200',
    category: 'データサイエンス',
    level: 'Intermediate',
    duration: '18時間',
    description: 'Pythonを使った機械学習の基礎から応用まで、実践的なプロジェクトを通して学習します。',
  },
  {
    id: '3',
    title: 'UIデザイン完全マスター - Figmaで学ぶプロのテクニック',
    instructor: '山田次郎',
    rating: 4.8,
    reviewCount: 12045,
    price: 2400,
    originalPrice: 10000,
    image: '/api/placeholder/300/200',
    category: 'デザイン',
    level: 'Beginner',
    duration: '8時間',
    description: 'Figmaを使ったUIデザインの基礎から実践的なテクニックまでを学びます。',
    bestseller: true,
  },
  {
    id: '4',
    title: 'デジタルマーケティング戦略 - SNS活用術',
    instructor: '鈴木美香',
    rating: 4.5,
    reviewCount: 6789,
    price: 2400,
    originalPrice: 8000,
    image: '/api/placeholder/300/200',
    category: 'マーケティング',
    level: 'Intermediate',
    duration: '10時間',
    description: 'SNSを活用したマーケティング戦略とブランディングの手法を学びます。',
  },
  {
    id: '5',
    title: 'Node.js & Express.js バックエンド開発',
    instructor: '高橋健一',
    rating: 4.6,
    reviewCount: 9876,
    price: 2400,
    originalPrice: 14000,
    image: '/api/placeholder/300/200',
    category: 'プログラミング',
    level: 'Advanced',
    duration: '15時間',
    description: 'Node.jsとExpress.jsを使ったサーバーサイド開発を基礎から学習します。',
  },
  {
    id: '6',
    title: 'Adobe Photoshop 写真編集テクニック',
    instructor: '田村愛子',
    rating: 4.7,
    reviewCount: 11234,
    price: 2400,
    originalPrice: 9000,
    image: '/api/placeholder/300/200',
    category: '写真',
    level: 'Beginner',
    duration: '6時間',
    description: 'Photoshopを使った写真編集の基本から応用テクニックまでを習得します。',
  },
];

export const featuredCourses = courses.filter(course => course.bestseller);
export const recommendedCourses = courses.slice(0, 4); 
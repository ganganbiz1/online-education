# EduPlatform - オンライン学習プラットフォーム

オンライン学習プラットフォームです。

## 技術スタック

- **フレームワーク**: Next.js 15 (App Router)
- **言語**: TypeScript
- **UIライブラリ**: Material-UI (MUI)
- **スタイリング**: CSS-in-JS (Emotion)
- **コンテナ**: Docker & Docker Compose

## 機能

- 📚 レスポンシブなコース一覧表示
- 🎨 Udemyライクなモダンなデザイン
- 🔍 検索機能付きヘッダー
- 📱 モバイルフレンドリーなUI
- 🏷️ カテゴリ別コース分類
- ⭐ 評価・レビュー表示
- 🛒 ショッピングカート機能

## セットアップ

### 前提条件

- Docker
- Docker Compose

### インストールと起動

```bash
# リポジトリをクローン
git clone <repository-url>
cd online-education

# Docker Composeで起動
docker-compose up --build
```

アプリケーションは `http://localhost:3000` でアクセスできます。

### 開発環境

ローカル開発の場合：

```bash
cd frontend
npm install
npm run dev
```

## プロジェクト構造

```
frontend/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── components/          # UIコンポーネント
│   │   │   ├── Header/          # ヘッダーコンポーネント
│   │   │   ├── HeroSection/     # ヒーローセクション
│   │   │   ├── CourseCard/      # コースカード
│   │   │   ├── CategorySection/ # カテゴリセクション
│   │   │   └── CourseSection/   # コースセクション
│   │   ├── data/               # モックデータ
│   │   ├── providers/          # プロバイダー (テーマなど)
│   │   └── theme/              # テーマ設定
│   ├── Dockerfile
│   └── package.json
```

## 主要コンポーネント

### Header
- ロゴ、検索バー、ナビゲーション
- カテゴリドロップダウンメニュー
- ログイン・登録ボタン
- ショッピングカート

### HeroSection
- アニメーション付きヒーローエリア
- CTA（Call To Action）ボタン

### CourseCard
- コース情報の表示
- 評価・レビュー
- 価格表示
- ベストセラーバッジ

### CategorySection
- カテゴリアイコン付きグリッド表示
- ホバーエフェクト

## 今後の実装予定

- [ ] バックエンドAPI統合
- [ ] ユーザー認証機能
- [ ] コース詳細ページ
- [ ] 動画プレイヤー
- [ ] 決済機能
- [ ] ユーザーダッシュボード
- [ ] レビューシステム

## ライセンス

MIT License
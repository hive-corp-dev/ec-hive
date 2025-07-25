# アイソメトリックグリッド模様

CSS の`background-image`を使用してアイソメトリックグリッド模様を作成するミックスインです。

## 利用可能なミックスイン

### 1. 基本的なアイソメトリックグリッド

```scss
@include isometric-grid($size, $color, $angle);
```

**パラメータ:**

- `$size`: グリッドのサイズ（デフォルト: 20px）
- `$color`: グリッドの色（デフォルト: rgba(0, 0, 0, 0.1)）
- `$angle`: グリッドの角度（デフォルト: 30deg）

**使用例:**

```scss
.my-element {
  @include isometric-grid(30px, rgba(0, 0, 0, 0.15));
  background-color: #f8f9fa;
}
```

### 2. 六角形パターン

```scss
@include isometric-hex-grid($size, $color);
```

**使用例:**

```scss
.my-element {
  @include isometric-hex-grid(40px, rgba(0, 0, 0, 0.1));
  background-color: #f0f0f0;
}
```

### 3. ドット状グリッド

```scss
@include isometric-dot-grid($size, $color);
```

**使用例:**

```scss
.my-element {
  @include isometric-dot-grid(25px, rgba(0, 0, 0, 0.2));
  background-color: #ffffff;
}
```

### 4. 3D 効果グリッド

```scss
@include isometric-3d-grid($size, $color);
```

**使用例:**

```scss
.my-element {
  @include isometric-3d-grid(35px, rgba(0, 0, 0, 0.12));
  background-color: #f5f5f5;
}
```

### 5. アニメーション可能なグリッド

```scss
@include isometric-animated-grid($size, $color);
```

**使用例:**

```scss
.my-element {
  @include isometric-animated-grid(30px, rgba($c-main, 0.15));
  background-color: rgba($c-main, 0.03);
}
```

## プロジェクトでの使用

1. `app/_styles/base/mixins.scss`にミックスインが定義されています
2. 必要なファイルで`@import`して使用してください
3. プロジェクトのカラーパレット（`$c-main`など）を活用できます

## カスタマイズのヒント

- グリッドのサイズを調整して密度を変更
- 色の透明度を調整して視認性を制御
- 角度を変更して異なる視覚効果を作成
- 複数のグリッドパターンを組み合わせて複雑な効果を作成

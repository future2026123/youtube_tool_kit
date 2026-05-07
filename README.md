# CreatorFlow Market

유튜브 제작 프로그램을 한 사이트에서 판매하기 위한 정적 웹사이트입니다.

현재 상품 구성:

- 대본작성 프로그램
- 썸네일 투표 프로그램
- CreatorFlow Studio

## 구매 링크 연결

결제 서비스에서 각 프로그램 상품을 만든 뒤 `config.js`의 제품별 `checkoutUrl` 값을 실제 구매 URL로 바꿉니다.

```js
window.SITE_CONFIG = {
  products: {
    scriptWriter: {
      name: "대본작성 프로그램",
      checkoutUrl: "https://example.com/script-writer-checkout"
    },
    thumbnailVote: {
      name: "썸네일 투표 프로그램",
      checkoutUrl: "https://example.com/thumbnail-vote-checkout"
    }
  }
};
```

## 상품 추가

1. `index.html`의 `.product-card` 블록을 복사합니다.
2. 새 상품명, 설명, 가격, `data-product` 값을 바꿉니다.
3. `config.js`의 `products`에 같은 키를 추가합니다.

## Cloudflare Pages 배포

GitHub 저장소에 push한 뒤 Cloudflare dashboard에서 Workers & Pages로 이동해 Pages 탭에서 GitHub 저장소를 가져옵니다.

- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `/`

배포가 끝나면 `*.pages.dev` 주소가 생성됩니다. 이후 GitHub에 새 커밋을 push하면 Cloudflare Pages가 자동으로 다시 배포합니다.

## 실행

`index.html`을 브라우저에서 열면 됩니다.

# CreatorFlow Studio 판매 웹사이트

유튜브 제작 소프트웨어를 판매하기 위한 정적 웹사이트입니다.

## 결제 연결

1. Latpeed에서 상품을 생성합니다.
2. 상품 판매 URL을 복사합니다.
3. `config.js`의 `latpeedCheckoutUrl` 값을 실제 상품 URL로 바꿉니다.

```js
window.SITE_CONFIG = {
  productName: "CreatorFlow Studio",
  latpeedCheckoutUrl: "https://www.latpeed.com/실제-상품-주소",
  supportEmail: "support@example.com"
};
```

## 수정할 곳

- 가격: `index.html`의 `₩49,000`
- 제품명: `index.html`, `config.js`
- 문의 이메일: `config.js`
- 히어로 이미지: `assets/hero-workspace.png`

## 실행

`index.html`을 브라우저에서 열면 됩니다.

## GitHub 업로드

GitHub에서 새 저장소를 만든 뒤 아래 명령을 실행합니다.

```powershell
git remote add origin https://github.com/future2026123/creator-site-latpeed.git
git branch -M main
git push -u origin main
```

저장소 이름을 다르게 만들었다면 URL의 `creator-site-latpeed` 부분만 바꾸면 됩니다.

## Cloudflare Pages 배포

Cloudflare dashboard에서 Workers & Pages로 이동한 뒤 Pages 탭에서 GitHub 저장소를 가져옵니다.

- Production branch: `main`
- Build command: `exit 0`
- Build output directory: `/`

배포가 끝나면 `*.pages.dev` 주소가 생성됩니다. 이후 GitHub에 새 커밋을 push하면 Cloudflare Pages가 자동으로 다시 배포합니다.

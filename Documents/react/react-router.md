### react-router

- **react-router-dom**
- createBrouserRouter
- RouterProvider
- Link
- { path, element, children }
- NavLink
- useParams / useNavigate
- absolute/relative path

---

## 2025-01-19

리액트 라우터 왜 필요한가?

data fetching And submission

What is Routing?
URL에 따라서 다르게 반응하는 사이트

기존에는 page change = request + response
클라이언트에서 URL을 감시하고 헤당 URL이 변경되면 다른 리액트 컴포넌트를 로딩

1. 우리가 지원하려는 URL과 경로를 정의, 어떤 컴포넌트가 렌더링 될 것인지 정의
2. 라우터를 활성화, 컴포넌트를 로딩
3. 페이지가 이동하는 경로를 확인하는 단계

\*\* 페이지로써 로딩되는 컴포넌트

[레이아웃 컴포넌트 사용하기, 중첩 라우트]

Link 컴포넌트 - 앵커 태그로 구성, 기본 기본 http 요청을 차단

NavLink - 활성화된 주소 하이라이팅

useNavigate hook

동적으로 라우팅하기 / useParams

PATH
/ : absolute path
상대 경로와 절대 경로

index Router
Outlet

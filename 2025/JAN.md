# 16

1. Redux  
2. Reduxjs/toolkit  
3. React-redux  

### 데이터의 흐름!   
createSlice - reduxjs/toolkit
- slice 객체 생성(name, initial value, reducers)
- reducer 함수 생성시 redux에서 불변성을 관리하기 때문에 바로 값을 업데이트해도 된다.(immer)

configureStore - reduxjs/toolkit   
- store 생성, reducer 객체에 상태 등록 

Provider compo - react-redux  
- store prop으로 store 연결

useDispatch - react-redux   
- 액션 생성 함수로 액션 객체 생성(store에 저장해둔, dispatch로 store로 액션 객체 전달)
- action.payload 활용

useSelector - react-redux   
- store에서 필요한 state를 '바로' 호출

# 17

### 리덕스로 사이드이펙트, 비동기 함수 사용하기.  

- 액션 생성자 Thunk 함수 사용하기  
- dispatch에 액션 객체가 아니라 함수를 주입하면 해당 함수를 미들웨어로 사용할 수 있다. 이 때 비동기 작업 등을 실행하고,  
dispatch를 실행할 수 있다. 해당 함수에는 리덕스가 dispatch를 자동으로 넘겨준다.  
- 비동기 작업을 실행할 액션을 useEffect를 이용해서 필요할 때에만 업데이트가 되도록 한다. 의존성에는 dispatch를 넣어준다.


### Firebase로 백엔드 구축하기
realtime database / cloud firestore

- 사용자 계정 관리: Firebase Authentication
- 실시간 데이터베이스: Firebase Realtime Database 또는 Cloud Firestore
- 푸시 알림: Firebase Cloud Messaging (FCM)
- 파일 저장: Firebase Storage
- 백엔드 로직: Cloud Functions for Firebase


### Hosting이란
- 인터넷에 콘텐츠를 제공하고 위한 서비스
- 서버: 웹사이트나 애플리케이션을 저장하고 관리하는 컴퓨터. 24시간 작동하여 사용자가 언제든지 콘텐츠에 접근할 수 있도록 함.
- 도메인: 사용자가 컨텐츠에 접근할 수 있는 주소(URL)
- 네트워크가: 서버를 통해 콘텐츠를 사용자에게 전송할 수 있는 네트워크 연결

# 18

### React-router
- react-router-dom
- createBrouserRouter
- RouterProvider
- Link
- { path, element, children }
- NavLink
- useParams / useNavigate
- absolute/relative path

### module.css
- css 파일 로컬로 적용하기
 


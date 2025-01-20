### Redux

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

### 리덕스로 사이드이펙트, 비동기 함수 사용하기.

- 액션 생성자 Thunk 함수 사용하기
- dispatch에 액션 객체가 아니라 함수를 주입하면 해당 함수를 미들웨어로 사용할 수 있다. 이 때 비동기 작업 등을 실행하고,  
  dispatch를 실행할 수 있다. 해당 함수에는 리덕스가 dispatch를 자동으로 넘겨준다.
- 비동기 작업을 실행할 액션을 useEffect를 이용해서 필요할 때에만 업데이트가 되도록 한다. 의존성에는 dispatch를 넣어준다.

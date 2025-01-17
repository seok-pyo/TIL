# 16

1.Redux  
2.Reduxjs/toolkit  
3.React-redux  

### 데이터의 흐름!   
createSlice - reduxjs/toolkit   
-- slice 객체 생성(name, initial value, reducers), reducer 함수 생성시 redux에서 불변성을 관리하기 때문에 바로 값을 업데이트해도 된다.(immer)

configureStore - reduxjs/toolkit   
-- store 생성, reducer 객체에 상태 등록 

Provider compo - react-redux  
-- store prop으로 store 연결

useDispatch - react-redux   
-- 액션 생성 함수로 액션 객체 생성(store에 저장해둔, dispatch로 store로 액션 객체 전달), action.payload 활용

useSelector - react-redux   
-- store에서 필요한 state를 '바로' 호출

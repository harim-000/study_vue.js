# study_vue.js
## vue.js 입문
#### vue.js 란?
vue.js는 웹 페이지 화면을 구현하기 위한 프런트엔드 프레임워크이다.
뷰는 화면단 라이브러리이자 프레임워크라고 할 수 있다.

**vue.js 의 장점**
vue.js는 빠르게 변화하는 프론트엔드 시장에서 많은 장점이 있다.
1. 배우기 쉽다. HTMS, CSS, 자바스크립트 기초만 알아도 쉽게 배울 수 있다.
2. 리액트와 앵귤러에 비해 성능이 우수하고 빠르다. 뷰 제작팀에서 리액트와 앵귤러를 가지고 같은 테스트 케이스에서 성능을 비교한 결과 뷰가 가장 빨랐다.
3. 리액트의 장점과 앵귤러의 장점을 모두 가지고 있다. 뷰는 구글에서 일하던 에반 유(Evan You)가 앵귤러를 더 가볍게 쓰고 싶어서 만든 프레임워크이다. 앵귤러의 데이터 바인딩 툭성과 리액트의 가상 돔(Virtual DOM) 기반 렌더링 특징을 모두 가지고 있다.
 - 뷰가 리액트와 앵귤러보다 배우기 쉬운 이유
   - 앵귤러1은 프레임워크로서 완전한 기능을 제공하는 MVC 구조로 출발하여 컴포넌트 기반의 앵귤러2로 발전했다. 이 과정에서 타입스크립트, ES6등 기타 어느 프레임워크보다 더 많은 학습이 필요하게 되었다. 리액트 또한 입문자가 학습하기에는 ES6, JSX라는 장벽이 있다. 게다가 ES7, 웹팩(Webpack) 등 신기술이 많이 생기고 있어서 쉽게 배울 수 있는 vue의 장점은 분명하다.

**MVVM 패턴**
![MVVM 패턴에 대한 이미지, 출처 https://beomy.tistory.com/43] (https://www.google.co.kr/url?sa=i&url=https%3A%2F%2Fbeomy.tistory.com%2F43&psig=AOvVaw0VeQdEPO9MNVhorJ_bqCoE&ust=1689741284642000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCLC36Je3l4ADFQAAAAAdAAAAABAD)
MVVM 패턴이란 화면을 모델(MODEl) - 뷰(VIEW) - 뷰 모델(ViewModel)로 구조화하여 개발하는 방식을 의미한다.



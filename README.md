# study_vue.js
## vue.js 입문
### vue.js 란?
vue.js는 웹 페이지 화면을 구현하기 위한 프런트엔드 프레임워크입니다.
뷰는 화면단 라이브러리이자 프레임워크라고 할 수 있습니다.

**vue.js 의 장점** <br>
vue.js는 빠르게 변화하는 프론트엔드 시장에서 많은 장점이 있습니다.
1. 배우기 쉽다. HTMS, CSS, 자바스크립트 기초만 알아도 쉽게 배울 수 있습니다.
2. 리액트와 앵귤러에 비해 성능이 우수하고 빠르습니다. 뷰 제작팀에서 리액트와 앵귤러를 가지고 같은 테스트 케이스에서 성능을 비교한 결과 뷰가 가장 빨랐습니다.
3. 리액트의 장점과 앵귤러의 장점을 모두 가지고 있습니다. 뷰는 구글에서 일하던 에반 유(Evan You)가 앵귤러를 더 가볍게 쓰고 싶어서 만든 프레임워크입니다. 앵귤러의 데이터 바인딩 툭성과 리액트의 가상 돔(Virtual DOM) 기반 렌더링 특징을 모두 가지고 있습니다.
 - 뷰가 리액트와 앵귤러보다 배우기 쉬운 이유
   - 앵귤러1은 프레임워크로서 완전한 기능을 제공하는 MVC 구조로 출발하여 컴포넌트 기반의 앵귤러2로 발전했습니다. 이 과정에서 타입스크립트, ES6등 기타 어느 프레임워크보다 더 많은 학습이 필요하게 되었습니다. 리액트 또한 입문자가 학습하기에는 ES6, JSX라는 장벽이 있습니다. 게다가 ES7, 웹팩(Webpack) 등 신기술이 많이 생기고 있어서 쉽게 배울 수 있는 vue의 장점은 분명힙니다.

**MVVM 패턴**
<img src="https://blog.kakaocdn.net/dn/7IE8f/btqBRvw9sFF/AGLRdsOLuvNZ9okmGOlkx1/img.png" width="200" height="200"/> <br><br>
MVVM 패턴이란 화면을 모델(MODEl) - 뷰(VIEW) - 뷰 모델(ViewModel)로 구조화하여 개발하는 방식을 의미한다.
이러한 방식으로 개발하는 이유는 화면의 요소들을 제어하는 코드와 데이터 제어 로직을 분리하여 코드를 더 직관적으로 이해할 수 있어 유지보수가 편해지기 때문이다.
Model : 어플리케이션에서 사용되는 데이터와 그 데이터를 처리하는 부분입니다.
View : 사용자에서 보여지는 UI 부분입니다.
View Model : View를 표현하기 위해 만든 View를 위한 Model입니다. View를 나타내 주기 위한 Model이자 View를 나타내기 위한 데이터 처리를 하는 부분입니다.
1. 동작
- MVVM 패턴의 동작 순서는 아래와 같습니다.
 - 사용자의 Action들은 View를 통해 들어오게 됩니다.
 -View에 Action이 들어오면, Command 패턴으로 View Model에 Action을 전달합니다.
 - View Model은 Model에게 데이터를 요청합니다.
 - Model은 View Model에게 요청받은 데이터를 응답합니다.
 - View Model은 응답 받은 데이터를 가공하여 저장합니다.
 - View는 View Model과 Data Binding하여 화면을 나타냅니다.
2. # study_vue.js
## vue.js 입문
### vue.js 란?
vue.js는 웹 페이지 화면을 구현하기 위한 프런트엔드 프레임워크입니다.
뷰는 화면단 라이브러리이자 프레임워크라고 할 수 있습니다.

**vue.js 의 장점** <br>
vue.js는 빠르게 변화하는 프론트엔드 시장에서 많은 장점이 있습니다.
1. 배우기 쉽다. HTMS, CSS, 자바스크립트 기초만 알아도 쉽게 배울 수 있습니다.
2. 리액트와 앵귤러에 비해 성능이 우수하고 빠르습니다. 뷰 제작팀에서 리액트와 앵귤러를 가지고 같은 테스트 케이스에서 성능을 비교한 결과 뷰가 가장 빨랐습니다.
3. 리액트의 장점과 앵귤러의 장점을 모두 가지고 있습니다. 뷰는 구글에서 일하던 에반 유(Evan You)가 앵귤러를 더 가볍게 쓰고 싶어서 만든 프레임워크입니다. 앵귤러의 데이터 바인딩 툭성과 리액트의 가상 돔(Virtual DOM) 기반 렌더링 특징을 모두 가지고 있습니다.
 - 뷰가 리액트와 앵귤러보다 배우기 쉬운 이유
   - 앵귤러1은 프레임워크로서 완전한 기능을 제공하는 MVC 구조로 출발하여 컴포넌트 기반의 앵귤러2로 발전했습니다. 이 과정에서 타입스크립트, ES6등 기타 어느 프레임워크보다 더 많은 학습이 필요하게 되었습니다. 리액트 또한 입문자가 학습하기에는 ES6, JSX라는 장벽이 있습니다. 게다가 ES7, 웹팩(Webpack) 등 신기술이 많이 생기고 있어서 쉽게 배울 수 있는 vue의 장점은 분명힙니다.

**MVVM 패턴**
<img src="https://blog.kakaocdn.net/dn/7IE8f/btqBRvw9sFF/AGLRdsOLuvNZ9okmGOlkx1/img.png" width="200" height="200"/> <br><br>
MVVM 패턴이란 화면을 모델(MODEl) - 뷰(VIEW) - 뷰 모델(ViewModel)로 구조화하여 개발하는 방식을 의미한다.
이러한 방식으로 개발하는 이유는 화면의 요소들을 제어하는 코드와 데이터 제어 로직을 분리하여 코드를 더 직관적으로 이해할 수 있어 유지보수가 편해지기 때문이다.
Model : 어플리케이션에서 사용되는 데이터와 그 데이터를 처리하는 부분입니다.
View : 사용자에서 보여지는 UI 부분입니다.
View Model : View를 표현하기 위해 만든 View를 위한 Model입니다. View를 나타내 주기 위한 Model이자 View를 나타내기 위한 데이터 처리를 하는 부분입니다.
1. 동작
MVVM 패턴의 동작 순서는 아래와 같습니다.
- 사용자의 Action들은 View를 통해 들어오게 됩니다.
View에 Action이 들어오면, Command 패턴으로 View Model에 Action을 전달합니다.
View Model은 Model에게 데이터를 요청합니다.
Model은 View Model에게 요청받은 데이터를 응답합니다.
View Model은 응답 받은 데이터를 가공하여 저장합니다.
View는 View Model과 Data Binding하여 화면을 나타냅니다.
# study_vue.js
## vue.js 입문 <br>
### vue.js 란? <br>
vue.js는 웹 페이지 화면을 구현하기 위한 프런트엔드 프레임워크입니다. <br>
뷰는 화면단 라이브러리이자 프레임워크라고 할 수 있습니다.

**vue.js 의 장점** <br>
vue.js는 빠르게 변화하는 프론트엔드 시장에서 많은 장점이 있습니다.
1. 배우기 쉽다. HTMS, CSS, 자바스크립트 기초만 알아도 쉽게 배울 수 있습니다.
2. 리액트와 앵귤러에 비해 성능이 우수하고 빠르습니다. 뷰 제작팀에서 리액트와 앵귤러를 가지고 같은 테스트 케이스에서 성능을 비교한 결과 뷰가 가장 빨랐습니다.
3. 리액트의 장점과 앵귤러의 장점을 모두 가지고 있습니다. 뷰는 구글에서 일하던 에반 유(Evan You)가 앵귤러를 더 가볍게 쓰고 싶어서 만든 프레임워크입니다. 앵귤러의 데이터 바인딩 툭성과 리액트의 가상 돔(Virtual DOM) 기반 렌더링 특징을 모두 가지고 있습니다.
 - 뷰가 리액트와 앵귤러보다 배우기 쉬운 이유
   - 앵귤러1은 프레임워크로서 완전한 기능을 제공하는 MVC 구조로 출발하여 컴포넌트 기반의 앵귤러2로 발전했습니다. 이 과정에서 타입스크립트, ES6등 기타 어느 프레임워크보다 더 많은 학습이 필요하게 되었습니다. 리액트 또한 입문자가 학습하기에는 ES6, JSX라는 장벽이 있습니다. 게다가 ES7, 웹팩(Webpack) 등 신기술이 많이 생기고 있어서 쉽게 배울 수 있는 vue의 장점은 분명힙니다.

**MVVM 패턴** <br>
MVVM 패턴이란 화면을 모델(MODEl) - 뷰(VIEW) - 뷰 모델(ViewModel)로 구조화하여 개발하는 방식을 의미한다. <br>
<img src="https://blog.kakaocdn.net/dn/7IE8f/btqBRvw9sFF/AGLRdsOLuvNZ9okmGOlkx1/img.png" width="200" height="200"/> <br><br>
이러한 방식으로 개발하는 이유는 화면의 요소들을 제어하는 코드와 데이터 제어 로직을 분리하여 코드를 더 직관적으로 이해할 수 있어 유지보수가 편해지기 때문이다.<br>
Model : 어플리케이션에서 사용되는 데이터와 그 데이터를 처리하는 부분입니다.<br>
View : 사용자에서 보여지는 UI 부분입니다.<br>
View Model : View를 표현하기 위해 만든 View를 위한 Model입니다. View를 나타내 주기 위한 Model이자 View를 나타내기 위한 데이터 처리를 하는 부분입니다.<br>
<br><br><br>
1. MVVM 패턴의 동작 순서는 아래와 같습니다. <br>
- 사용자의 Action들은 View를 통해 들어오게 됩니다.
- View에 Action이 들어오면, Command 패턴으로 View Model에 Action을 전달합니다.
- View Model은 Model에게 데이터를 요청합니다.
- Model은 View Model에게 요청받은 데이터를 응답합니다.
- View Model은 응답 받은 데이터를 가공하여 저장합니다.
- View는 View Model과 Data Binding하여 화면을 나타냅니다. <br>
2. 특징 <br>
MVVM 패턴은 Command 패턴과 Data Binding 두 가지 패턴을 사용하여 구현되었습니다.
Command 패턴과 Data Binding을 이용하여 View와 View Model 사이의 의존성을 없앴습니다.
View Model과 View는 1:n 관계입니다. <br>
3. 장점 <br>
MVVM 패턴은 View와 Model 사이의 의존성이 없습니다. 또한 Command 패턴과 Data Binding을 사용하여 View와 View Model 사이의 의존성 또한 없앤 디자인패턴입니다. 각각의 부분은 독립적이기 때문에 모듈화 하여 개발할 수 있습니다.
4. 단점 <br>
MVVM 패턴의 단점은 View Model의 설계가 쉽지 않다는 점입니다

 참고 : https://magi82.github.io/android-mvc-mvp-mvvm/

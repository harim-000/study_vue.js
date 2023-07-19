
## MVVM 패턴
view는 ui 화면 개발 방법 중 하나인 MVVM 패턴의 뷰 모델(VuewModel)에 해당하는 화면단 라이브러리입니다.
<img src="https://blog.kakaocdn.net/dn/7IE8f/btqBRvw9sFF/AGLRdsOLuvNZ9okmGOlkx1/img.png" width="200" height="200"/> <br><br>
MVVM 패턴이란 화면을 모델(MODEl) - 뷰(VIEW) - 뷰 모델(ViewModel)로 구조화하여 개발하는 방식입니다.
Backend 로직과 Client 의 마크업 & 데이터 표현단을 분리하기 위한 구조로 전통적인 MVC 패턴의 방식에서 나온 것입니다. ViewModel은 화면 앞단의 회면 동작 관련 로직과 뒷단의 DB 데이터 처리 및 서버 로직을 분리하고, 뒷단에서 넘어온 데이터를 Model 에 담아 View 로 넘어주는 중간 지점입니다. 이러한 방식으로 개발하는 이유는 화면의 요소들을 제어하는 코드와 데이터 제어 로직을 분리하여 코드를 더 직관적으로 이해할 수 있어 유지보수가 편해지기 때문입니다.<br><br>
Model : 어플리케이션에서 사용되는 데이터와 그 데이터를 처리하는 부분입니다.<br>
View : 사용자에서 보여지는 UI 부분입니다.<br>
View Model : View를 표현하기 위해 만든 View를 위한 Model입니다. View를 나타내 주기 위한 Model이자 View를 나타내기 위한 데이터 처리를 하는 부분입니다.<br>
1. MVVM 패턴의 동작 순서는 아래와 같습니다.
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

## Vue Components
화면의 영역을 일정한 단위로 쪼개어 재활용 가능한 형태로 관리하는 것이 컴포넌트 입니다.<br>


## 즉시실행함수란?
즉시실행함수 (IIFE, Immediately Invoked Function Expression)는 정의되자마자 즉시 실행되는 함수를 말한다.<br>

### 즉시실행함수를 사용하는 이유는?
1. 필요없는 전역 변수의 생성을 줄일 수 있다.
함수를 생성하면 그 함수는 전역 변수로써 남아있게 되고, 많은 변수의 생성은 전역 스코프를 오염시킬 수 있다.<br>

즉시실행함수를 선언하면 내부 변수가 전역으로 저장되지 않기 때문에 전역 스코프의 오염을 줄일 수 있다.<br>

2. private한 변수를 만들 수 있다.<br>
즉시실행함수는 외부에서 접근 할 수 없는 자체적인 스코프를 가지게된다. 이는 클로저의 사용 목적과도 비슷하며 내부 변수를 외부로부터 private하게 보호 할 수 있다는 장점이 있다.<br>

따라서 많은 오픈소스 라이브러리들이 즉시실행함수를 사용한다.<br><br>

**참고용 즉시 실행 함수 설명 사이트**
원본
https://vvkchandra.medium.com/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6
번역글
https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-33%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90-8-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%95%84%EC%88%98%EC%9A%94%EC%86%8C-IIFE-%EB%A7%88%EC%8A%A4%ED%84%B0%ED%95%98%EA%B8%B0
<br><br><br>

## 인스턴스
뷰 인스턴스는 뷰로 화면을 개발하기 위해 필수적으로 생성해야 하는 기본 단위이다.<br>

**기본 형식**
new Vue();<br>
위에서 인스턴스를 생성할 때 Vue를 생성자라고 한다. Vue 생성자는 뷰 라이브러리를 로딩하고 나면 접근할 수 있다(객체를 새로 생성하는 개념이라고 보면 된다.). 일반적으로 객체지향 프로그래밍에서 메서드 재활용을 위해 하는 객체생성과 똑같은 의도로 쓴다. 즉 필요 기능들을 생성자에 미리 정의하고 사용자가 그 기능을 개정의하여 편리하게 사용할 수 있게 하는 것이다.<br>

**인스턴스의 속성, API들**
new Vue({
  el: ,
  template: ,
  data: ,
  methods: ,
  created: ,
  watch: ,
});<br>
- el : 인스턴스가 그려지는 화면의 시작점 (특정 HTML 태그)
- template : 화면에 표시할 요소 (HTML, CSS 등)
- data : 뷰의 반응성(Reactivity)이 반영된 데이터 속성
- methods : 화면의 동작과 이벤트 로직을 제어하는 메서드
- created : 뷰의 라이프 사이클과 관련된 속성
- watch : data에서 정의한 속성이 변화했을 때 추가 동작을 수행할 수 있게 정의하는 속성

## 인스턴스 라이프 사이클
인스턴스 라이프 사이클이란 뷰의 인스턴스가 생성되어 소멸되기까지 거치는 과정을 의미합니다. 인스턴스가 생성되고 나면 라이브러리 내부적으로 다음과 같은 과정이 진행됩니다.<br>

data 속성의 초기화 및 관찰 (Reactivity 주입)<br>
뷰 템플릿 코드 컴파일 (Virtual DOM -> DOM 변환)<br>
인스턴스를 DOM에 부착<br>

<br><br>
라이프 사이클 다이어그램
인스턴스의 라이프 사이클 흐름을 그림으로 나타내어 보면 다음과 같습니다.<br>
<img src="https://joshua1988.github.io/vue-camp/assets/img/lifecycle.dcbe29f6.png" width="200" height="200"/> <br><br>

**라이프 사이클 훅**
뷰의 라이프 사이클을 이해해야 하는 이유는 바로 라이프 사이클 훅 때문입니다. 라이프 사이클 훅으로 인스턴스의 특정 시점에 원하는 로직을 구현할 수 있습니다.<br>

예를 들어, 컴포넌트가 생성되자마자 데이터를 서버에서 받아오고 싶으면 created나 beforeMount 라이프 사이클 훅을 사용할 수 있습니다. 아래 코드는 인스턴스가 생성되자마자 액시오스로 HTTP GET 요청을 보내 데이터를 받아오는 코드입니다.<br>
new Vue({
  methods: {
    fetchData() {
      axios.get(url);
    }
  },
  created: function() {
    this.fetchData();
  }
})
 <br><br>
자주 사용되는 라이프 사이클 훅 목록<br>
구현할 때 주로 사용하는 라이프 사이클 훅은 아래와 같습니다.<br>
created<br>
beforeMount<br>
mounted<br>
destroyed<br>

## 컴포넌트
컴포넌트는 화면의 영역을 구분하여 개발할 수 있는 뷰의 기능입니다. 컴포넌트 기반으로 화면을 개발하게 되면 코드의 재사용성이 올라가고 빠르게 화면을 제작할 수 있습니다.<br>

컴포넌트 생성 코드 형식
컴포넌트를 생성하는 코드 형식은 아래와 같습니다.

Vue.component('컴포넌트 이름', {
  // 컴포넌트 내용
});
 
    
### 컴포넌트 생성 후 표시하기
위 코드 형식을 참고하여 간단한 앱 헤더 컴포넌트를 만들어보겠습니다.

Vue.component('app-header', {
  template: 'Header Component'
});
    
위에서 등록한 컴포넌트를 화면에서 표시하려면 컴포넌트 태그(컴포넌트 이름)를 추가합니다.

 
    
### 컴포넌트 등록 방법 2가지
컴포넌트를 등록하는 방법은 크게 2가지가 있습니다. 앞에서 살펴본 방식은 전역 컴포넌트를 등록하는 방법입니다.

전역 컴포넌트 등록
Vue.component('app-header', {
  template: 'Header Component'
});
 
또 다른 방법은 지역 컴포넌트로 등록하는 방법이 있습니다. 앞에서 사용한 컴포넌트 내용을 가지고 그대로 지역 컴포넌트로 등록하면 아래와 같습니다.
var appHeader = {
  template: 'Header Component'
}

new Vue({
  components: {
    'app-header': appHeader
  }
})
 
## 컴포넌트 통신 방식
유지보수의 용이성을 위해 컴포넌트 통신에는 규칙이 있다. 트리방식으로 일방향 통신을 하기 때문에 상위컴포넌트가 다수의 하위 컴포넌트들을 가진다. 
<img src="component.png" width="200" height="200"/> <br><br>

**인스턴스와 컴포넌트의 관계**
<img src="" width="200" height="200"/> <br><br>

### 컴포넌트 통신 방법

props - 위에서 아래로 통신할 때 사용한다.

event emit - 아래에서 위로 통신할 때 사용한다. 이벤트를 발생시켜 위로 통신한다.

갇은 레벨의 컴포넌트들은 부모 컴포넌트를 통해 통신한다.

뷰 인스턴스에서의 this(자바스크립트에서 this란?)


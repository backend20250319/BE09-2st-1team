# 1팀 - 심숭샘송 (BE09-2st-1team)

### 프로젝트

- **프로젝트 명** : 삼송빵집 클론 코딩 (프런트엔드 리액트)
- **진행기간** : 2025.05.15, 05.16, 05.19
- **팀원/개인** : 5명 (지정호, 유지은, 이채희, 정승원, 김지환)

| 이름   | 역할   | GitHub 프로필                |
| ------ | ------ | ---------------------------- |
| 지정호 | 팀장 / | https://github.com/hoya-q    |
| 유지은 |        | https://github.com/FerryLa   |
| 이채희 |        | https://github.com/FerryLa   |
| 정승원 |        | https://github.com/apocalcal |
| 김지환 |        | https://github.com/FerryLa   |

- 카테고리별 역할 분담

### **클론 코딩한 원본 사이트**

**삼송빵집 사이트** : https://www.ssbnc.kr/doc/menu0.php

### 주요 기능

**주요 애니메이션**

- 카드 뒤집기
- 스크롤

### 소개

본 프로젝트는 유명 베이커리 브랜드 삼송빵집의 웹사이트를 클론하여 제작한 팀 프로젝트입니다. 실제 사이트의 디자인과 UI/UX를 분석하고, 이를 바탕으로 Next.js 기반의 정적/동적 페이지, GSAP을 활용한 애니메이션 효과, Swiper를 이용한 슬라이드 구성, 지도API 추가 등을 중심으로 개발하였습니다. 프론트엔드 핵심 기술 스택을 실무에 맞게 적용하며 팀원 간 협업 경험을 쌓는 데 중점을 두었습니다.

### 개발 환경

- **개발** : HTML5, CSS3, JavaScript
- **프레임워크** : React.js, Next.js
- **CSS** : Tailwind CSS
- **라이브러리** : GSAP, Swiper

### **프로젝트 목표**

실무용 프런트엔드 기술을 적용하여 최대한의 클론 웹피이지 구성

## 요구사항 정의서

**요구사항 명세서** : https://www.notion.so/coffit23/1f2a02b1ffb181adb609fc216a70c106  
**상세 폴더 구조** : https://www.notion.so/coffit23/1f2a02b1ffb181cc8b88cedd21f1b569

### 💡 구현 페이지 카테고리

✅ 공통

| 구분 | 페이지명   | 경로(URL)    | 설명                                        | 주요 컴포넌트                    |
| ---- | ---------- | ------------ | ------------------------------------------- | -------------------------------- |
| 공통 | 레이아웃   | `/` 전역     | Header, Footer 포함 기본 레이아웃           | `layout.jsx`, `Header`, `Footer` |
| 공통 | 404 페이지 | `/not-found` | 잘못된 URL 접근 시 노출                     | `not-found.jsx`                  |
| 홈   | 홈 페이지  | `/`          | 브랜드, 제품, 매장, 회사소개 진입 링크 제공 | `page.jsx`                       |

📌 브랜드 스토리 `(brand)`

| 페이지명           | 경로(URL)         | 설명                                          | 주요 컴포넌트      |
| ------------------ | ----------------- | --------------------------------------------- | ------------------ |
| 브랜드 스토리      | `/story`          | 브랜드 설립 배경과 철학 소개                  | `StorySection.jsx` |
| 브랜드 아이덴티티  | `/identity`       | 색상, 폰트 등 브랜드 정체성 소개              | `IdentityCard.jsx` |
| 삼성프렌즈 소개    | `/samsongfriends` | 브랜드 캐릭터 소개                            | `FriendItem.jsx`   |
| 브랜드 운영 시스템 | `/system`         | 품질관리/생산 시스템 등 브랜드 운영 구조 설명 | `SystemInfo.jsx`   |

📌 제품 소개 `(product)`

| 페이지명       | 경로(URL)             | 설명                         | 주요 컴포넌트       |
| -------------- | --------------------- | ---------------------------- | ------------------- |
| 제품 소개 메인 | `/product`            | 제품 카테고리 진입 링크 제공 | `page.jsx`          |
| 콘브레드       | `/product/corn-bread` | 콘브레드 제품 리스트         | `CornBreadItem.jsx` |
| 크로켓         | `/product/croquette`  | 크로켓 제품 리스트           | `CroquetteCard.jsx` |
| 제과류         | `/product/bakery`     | 다양한 제과류 리스트         | `BakeryList.jsx`    |
| 음료           | `/product/drinks`     | 음료 리스트                  | `DrinkItem.jsx`     |

📌 매장 안내 `(store)`

| 페이지명       | 경로(URL)              | 설명                         | 주요 컴포넌트         |
| -------------- | ---------------------- | ---------------------------- | --------------------- |
| 삼송1957 연혁  | `/store/samgsong-1957` | 브랜드 연혁 타임라인         | `HistoryTimeline.jsx` |
| 본사 안내      | `/store/headquarter`   | 본사 위치, 연락처, 정보 제공 | `HQMap.jsx`           |
| 기타 매장 안내 | `/store/others`        | 기타 지점 리스트 표시        | `BranchList.jsx`      |

📌 회사 소개 `(company)`
| 페이지명 | 경로(URL) | 설명 | 주요 컴포넌트 |
| --- | --- | --- | --- |
| 대표 인사말 | `/company/greeting` | 창립자 혹은 대표의 인사말 | `GreetingMessage.jsx` |
| 회사 개요 | `/company/overview` | 회사 연혁, 개요, 규모 등의 요약 | `OverviewCard.jsx` |
| 경영이념 | `/company/philosophy` | 기업 철학, 비전, 미션 소개 | `PhilosophyBlock.jsx` |
| 조직도 | `/company/organization` | 회사 조직 구성 및 구조도 | `OrgChart.jsx` |
| 오시는 길 | `/company/location` | 회사 위치 안내 지도 | `LocationMap.jsx` |

## 테스트케이스

**상세 테스트케이스** : https://www.notion.so/coffit23/1f5a02b1ffb180efb6d9e863dd07de9d?v=1f5a02b1ffb181d4bc32000ca097b7a6

### 💡 주요 구현 포인트

- ✅ **Next.js App Router 기반의 구조화된 폴더 구성**
- ✅ **모듈형 컴포넌트 구조로 재사용성과 유지보수성 강화**
- ✅ **GSAP ScrollTrigger로 부드럽고 시각적인 페이지 전환 효과 구현**
- ✅ **Swiper로 슬라이드형 제품 소개 구현**
- ✅ **카카오 지도 API 연동으로 위치 안내 기능 추가**

### 💡 트러블 슈팅

## 회고

### 지정호

** 주요 역할 ** :
** 느낀 점 ** :

### 정승원

** 주요 역할 ** :
** 느낀 점 ** :

### 유지은

** 주요 역할 ** :
** 느낀 점 ** :

### 이채희

** 주요 역할 ** :
** 느낀 점 ** :

### 김지환

** 주요 역할 ** :
** 느낀 점 ** :

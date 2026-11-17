# 참고 근거와 사용 경계

아래 링크는 절차의 근거를 확인할 때 읽는다. 전부 매 실행에 읽을 필요는 없다. 현재 정책·API·규격에 의존하는 결정에는 원문과 버전을 새로 확인한다. 링크가 실패하면 확인하지 못한 부분을 명시하고 조사 기록을 꾸며내지 않는다.

| 자료 | 활용 | 경계 |
|---|---|---|
| [TDS 소개](https://tossmini-docs.toss.im/tds-mobile/) | 품질·재사용·개발 연결 관점 | 공개 Mobile 범위 |
| [TDS Button](https://tossmini-docs.toss.im/tds-mobile/components/button/) | 변형·상태·API·접근성 책임의 명세 | 특정 props를 자체 시스템에 강제하지 않음 |
| [KRDS 디자이너 가이드](https://www.krds.go.kr/html/site/outline/outline_02.html) | 스타일·컴포넌트·패턴과 토큰 구조 | 가이드의 대상·버전 확인 |
| [KRDS 신청서 작성](https://www.krds.go.kr/html/site/service/service_04_05.html) | 입력 의존성·작업 재개 | 신청 도메인의 사례 |
| [Design Council Double Diamond](https://www.designcouncil.org.uk/resources/the-double-diamond/history-of-the-double-diamond/) | 조사·정의·개발·검증을 반복 | 선형 승인 절차가 아님 |
| [Christensen Institute JTBD](https://www.christenseninstitute.org/theory/jobs-to-be-done/) | 상황과 원하는 진전 조사 | 문장 틀 작성만으로 조사 대체 불가 |
| [GOV.UK 경험 지도](https://www.gov.uk/service-manual/user-research/creating-an-experience-map) | 실제 경험을 여정으로 정리 | 복잡한 장기 서비스에 특히 유용, 간단한 과업은 축약 |
| [GOV.UK 조사 계획](https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service) | 질문·대상·반복 조사 계획 | 소수 정성 결과를 모집단 통계로 해석하지 않음 |
| [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) | 요소와 실제 화면을 왕복하며 구성 | 조직 폴더명·제작 순서 강제 아님 |
| [DTCG Format 2025.10](https://www.designtokens.org/tr/2025.10/format/) | 토큰 타입·참조·교환 구조 | W3C 정식 표준과 구분, 도구 지원 확인 |
| [W3C WAI 평가](https://www.w3.org/WAI/test-evaluate/) | 자동·수동·사용자 평가 결합 | 자동 검사만으로 준수 선언 불가 |
| [GOV.UK 기여 기준](https://design-system.service.gov.uk/community/contribution-criteria/) | 유용성·중복·사용성·일관성·범용성 | 우리 조직의 승인 정책으로 자동 전환하지 않음 |

8단계 구성, 질문 목록, 게이트, ID·상태 규칙은 위 자료를 종합한 이 스킬의 실행 방법이다. TDS와 KRDS가 이 절차 자체를 공식 규정한 것으로 설명하지 않는다.

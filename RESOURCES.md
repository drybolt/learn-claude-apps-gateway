# Claude Apps Gateway Resources

## Knowledge

- [Claude apps gateway (공식 문서, Anthropic)](https://code.claude.com/docs/en/claude-apps-gateway)
  개념·이유·퀵스타트·기능 가용성 표를 담은 1차 출처. Use for: Gateway가 무엇을 왜 중앙화하는지, 어떤 기능이 지원/미지원인지, 구성 요소가 무엇인지 확인.
- [Claude apps gateway deployment and operations (공식 문서, Anthropic)](https://code.claude.com/docs/en/claude-apps-gateway-deploy)
  IdP 연동, 컨테이너 배포, 운영, 보안(threat model, 데이터 흐름)을 다루는 문서. Use for: 로그인부터 요청 처리까지의 작동 방식, 각 구성 요소의 역할.

## 다음 학습용 (이번 미션에서는 사용 안 함 — Amazon Bedrock/AWS 배포)

- [Deploy Claude apps gateway on AWS (공식 문서, Anthropic)](https://code.claude.com/docs/en/claude-apps-gateway-on-aws)
  ECS/EKS, RDS, IAM 기반 Bedrock 인증 등 AWS 배포 실전 예제. 지금은 범위 밖 — Bedrock 미션에서 다시 사용.
- [Claude Apps Gateway on AWS 자세히 알아보기 (AWS 한국 기술 블로그, Huh Jinsung)](https://aws.amazon.com/ko/blogs/tech/claude-apps-gateway-with-aws/)
  gateway.yaml 실전 예시, CloudWatch OTEL 연동 등 AWS/Bedrock 실습 위주. 지금은 범위 밖 — Bedrock 미션에서 다시 사용.

## Gaps

- 3rd-party 앱 연동(Custom LLM Gateway 비교) 관련 자료는 미션 범위 밖이라 수집하지 않음

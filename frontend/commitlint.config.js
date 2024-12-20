module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'init', // 새로 시작했을 경우
        'chore', // 기타 작업
        'docs', // 문서 작성 또는 수정
        'feat', // 새로운 기능 추가
        'fix', // 버그 수정
        'perf', // 최적화 등 성능을 개선하는 코드 변경
        'refactor', // 새로운 기능 추가와 관련 없는 코드 개선 작업
        'revert', // 이전 버전으로 되 돌렸거나 전체 삭제했을 경우
        'style', // 사용자 UI 디자인 변경, 이미지 업로드 및 삭제
        'test', // 테스트 코드 작성 (프로덕션 코드 변경 X)
        'config', // 의존성 관리, 빌드, 배포 등 개발 환경에 관련된 작업
        '!HOTFIX', // 급하게 치명적인 버그를 고쳐야하는 경우
        '!BREAKING CHANGE', // 커다란 API 변경의 경우
      ],
    ],
  },
};

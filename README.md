1) react native 0,69 버전 타입스크립트 프로젝트 만들기

2) 파일 저장 시, 100자 제한, 개행, import 알파벳 순으로 자동 정렬

3) 5mb 이상 파일은 git commit 안되게 하기 ( 허스키파일 설정 )

4) package.json 안에 안드로이드, ios 초기화 명령어 만들기 ( 명령어 의미)
"ios:clean": "cd ios && rm -rf Pods && pod cache clean --all && arch -x86_64 pod install && cd ..",
=> swift 및 Object-C 외부라이브러리 관리 모듈 클린 및 설치

"gradlew": "cd ./android && ./gradlew app:assembleDebug && ./gradlew installDebug",
=> 안드로이드 APK 빌드 및 기기에 배포

"aos:clean": "cd android && ./gradlew clean && cd ..",
=> 안드로이드 빌드 디렉토리 클린

"pod": "cd ios && arch -x86_64 pod install --repo-update && cd ..",
=> swift 및 Object-C 외부라이브러리 관리 모듈 업데이트 및 설치
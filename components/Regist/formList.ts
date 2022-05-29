export type Form = {
  title: string;
  isEssential: boolean;
  placeholder: string;
};

export const FORM_LIST_FOR_COMPANY_INTRO: Form[][] = [
  [
    {
      title: "기업명",
      isEssential: true,
      placeholder: "예시 : (주) OOO컴퍼니",
    },
  ],
  [
    {
      title: "사업자 등록번호",
      isEssential: true,
      placeholder: "000-000-00000",
    },
    {
      title: "대표자명",
      isEssential: true,
      placeholder: "대표명을 적어주세요",
    },
  ],
  [
    {
      title: "설립일",
      isEssential: true,
      placeholder: "예시 : 2022년 7월 18일",
    },
    {
      title: "지역",
      isEssential: true,
      placeholder: "지역을 선택해주세요",
    },
  ],
  [
    {
      title: "직원수",
      isEssential: true,
      placeholder: "인원을 선택해주세요",
    },
    {
      title: "연 매출액",
      isEssential: false,
      placeholder: "입력단위/억원 (예시 : 1.8억원)",
    },
  ],
  [
    {
      title: "사업 분야",
      isEssential: true,
      placeholder: "사업분야를 선택해주세요",
    },
  ],
  [
    {
      title: "기업 소개",
      isEssential: false,
      placeholder: "기업 소개를 간략히 적어주세요",
    },
  ],
  [
    {
      title: "사업자등록증 사본",
      isEssential: true,
      placeholder: "",
    },
    {
      title: "기업 소개서",
      isEssential: false,
      placeholder: "",
    },
  ],
  [
    {
      title: "기업 로고",
      isEssential: false,
      placeholder: "",
    },
    {
      title: "대표 이미지",
      isEssential: false,
      placeholder: "",
    },
  ],
];

export const FORM_LIST_FOR_MANAGER_AND_CONTACT: Form[][] = [
  [
    {
      title: "담당자명",
      isEssential: true,
      placeholder: "담당자명을 적어주세요",
    },
    {
      title: "소속부서 및 직위",
      isEssential: false,
      placeholder: "예시 : 인사담당자",
    },
  ],
  [
    {
      title: "전화번호",
      isEssential: true,
      placeholder: "000-0000-0000",
    },
    {
      title: "이메일",
      isEssential: true,
      placeholder: "예시 : abcd1234@naver.com",
    },
  ],
];

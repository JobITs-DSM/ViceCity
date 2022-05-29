export type Form = {
  title: string;
  isEssential: boolean;
  placeholder: string;
  name?: InputName;
};

export type InputName =
  | "company_name"
  | "company_regist_number"
  | "ceo_name"
  | "founding_date"
  | "region"
  | "company_detail_region"
  | "employee_number"
  | "sales_money"
  | "business_class"
  | "company_intro"
  | "manager_name"
  | "department_and_position"
  | "phone_number"
  | "email";

export const InputNameList: InputName[] = [
  "company_name",
  "company_regist_number",
  "ceo_name",
  "founding_date",
  "region",
  "company_detail_region",
  "employee_number",
  "sales_money",
  "business_class",
  "company_intro",
  "manager_name",
  "department_and_position",
  "phone_number",
  "email",
];

export const FORM_LIST_FOR_COMPANY_INTRO: Form[][] = [
  [
    {
      title: "기업명",
      isEssential: true,
      placeholder: "예시 : (주) OOO컴퍼니",
      name: "company_name",
    },
  ],
  [
    {
      title: "사업자 등록번호",
      isEssential: true,
      placeholder: "000-000-00000",
      name: "company_regist_number",
    },
    {
      title: "대표자명",
      isEssential: true,
      placeholder: "대표명을 적어주세요",
      name: "ceo_name",
    },
  ],
  [
    {
      title: "설립일",
      isEssential: true,
      placeholder: "예시 : 2022년 7월 18일",
      name: "founding_date",
    },
    {
      title: "지역",
      isEssential: true,
      placeholder: "지역을 선택해주세요",
      name: "region",
    },
  ],
  [
    {
      title: "회사 상세 주소",
      isEssential: true,
      placeholder: "예시 : 서울 강남 테헤란로 893 3층",
      name: "company_detail_region",
    },
  ],
  [
    {
      title: "직원수",
      isEssential: true,
      placeholder: "인원을 선택해주세요",
      name: "employee_number",
    },
    {
      title: "연 매출액",
      isEssential: false,
      placeholder: "입력단위/억원 (예시 : 1.8억원)",
      name: "sales_money",
    },
  ],
  [
    {
      title: "사업 분야",
      isEssential: true,
      placeholder: "사업분야를 선택해주세요",
      name: "business_class",
    },
  ],
  [
    {
      title: "기업 소개",
      isEssential: false,
      placeholder: "기업 소개를 간략히 적어주세요",
      name: "company_intro",
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
      name: "manager_name",
    },
    {
      title: "소속부서 및 직위",
      isEssential: false,
      placeholder: "예시 : 인사담당자",
      name: "department_and_position",
    },
  ],
  [
    {
      title: "전화번호",
      isEssential: true,
      placeholder: "000-0000-0000",
      name: "phone_number",
    },
    {
      title: "이메일",
      isEssential: true,
      placeholder: "예시 : abcd1234@naver.com",
      name: "email",
    },
  ],
];

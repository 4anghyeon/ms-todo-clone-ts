import { SweetAlertOptions } from "sweetalert2";

export const DELETE_OPTION: SweetAlertOptions = {
  title: "삭제 하시겠습니까?",
  text: "삭제한 항목은 복구할 수 없습니다.",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "삭제",
  cancelButtonText: "취소",
};

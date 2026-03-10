import flet as ft

def main (page:ft.Page):
  # 화면설정
  page.title = "인사하는 로봇"
  # 정렬 - 중앙정렬
  page.vertical_alignment = ft.MainAxisAlignment.CENTER
  # input 창
  name_input = ft.TextField(label="당신의 이름을 입력하시오", color="green", width=350)
  result_text = ft.Text(value="", size=30, color="gray")

  # 동작정의(버튼 클릭 시의 동작활동)
  def say_hello(e):
    if name_input.value == 0:
      result_text.value = "이름을 입력하시오."
    else:
      result_text.value = f"안녕하세요 {name_input.value}님. 만나서 반가워요!!!"
    # 마지막에 변경된 사항을 "업데이트 해준다." (변화가 있는 경우 꼭 작성하기)
    page.update()

  # 최종(만든 부품을 넣어주는 작업)
  # 상단 부품, ft 함수를 사용 시 []를 넣어준다.
  # 내가 만든 변수(name_input, result_text는 ft와 상관없음 ft.name_input -> X)
  page.add(    
  ft.Row([ft.Text("반가워요!", size=30, weight="blod")], alignment=ft.MainAxisAlignment.CENTER),
  ft.Row([name_input],alignment=ft.MainAxisAlignment.CENTER),
  ft.Row([ft.ElevatedButton("인사하기", on_click=say_hello)],alignment=ft.MainAxisAlignment.CENTER),
  ft.Row([result_text],alignment=ft.MainAxisAlignment.CENTER)
)

# 앱 실행하기
ft.app(target=main)

# 구성
# def main(page:ft.Page):
  # 타이틀
  # 정렬
  # page.vertical_aliance
  # 변수설정
  # input_name = ft.TextField(...)
  # 동작정의
  # def eee(e): ...
  # 최종 정보를 끼워 넣어주기
  # page.add()
  # 실행
import flet as ft

def main(page:ft.Page):
  chat = ft.Column()
  # TextField == input
  new_message = ft.TextField()

  # 클릭 이벤트 실행 시 -> new_message의 값의 텍스트를 chat에 넣는다.(초기 값 "")
  def send_click(e):
    chat.controls.append(ft.Text(new_message.value))
    new_message.value = ""

  # 페이지 추가 -> controls를 하나의 box로 인식(Row로 줄바꿈 안됨)
  page.add(
    chat,
    ft.Row(controls=[new_message, ft.Button("보내기", on_click=send_click)])
  )

ft.run(main)
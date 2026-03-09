import flet as ft

# page에 Hello World 출력하기
def main(page:ft.Page):
  page.add(ft.Text("Hello World!"))

ft.run(main)

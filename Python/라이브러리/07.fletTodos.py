import flet as ft

# Checkbox, FloatingActionbutton, Icons, Page, TextField 사용하기

def main(page:ft.Page):
  # 클릭 이벤트(추가하기)
  def add_clicked(e):
    page.add(ft.Checkbox(label=new_task.value)) # new_task.value값이 있는 checkbox를 추가한다.
    new_task.value = "" # 초기값은 ""(공백)
    page.update() # 페이지 업데이트

  new_task = ft.TextField(hint_text='무엇이 필요합니까?') # new_task의 placeholder에 text 입력 (placeholder == hint_task)
  page.add(new_task,ft.FloatingActionButton(icon=ft.Icons.ADD, on_click=add_clicked)) # new_task 값, 클릭 시 add_cliked함수가 실행되는 Icon.ADD를 추가

ft.run(main)
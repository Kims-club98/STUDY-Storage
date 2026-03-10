# todo 게시판(쌓아 올리는 방법 숙지하기)
import flet as ft

def main (page:ft.Page):
  page.title = "할일 목록 Todo리스트"
  page.horizontal_alignment = ft.MainAxisAlignment.CENTER # 가로 중앙 정렬

  # 2) 부품 준비
  # 할 일 입력
  todo_input = ft.TextField(hint_text="할 일을 적어 주세요!", width=100)
  # 쌓일 상자(게시판 역할)
  todo_list_columns = ft.Column() # 세로로 나열해주는 역할

  # 3) 동작 정의
  def add_clicked(e):
    if todo_input.value != "":
      new_task = ft.Checkbox(label=todo_input.value)
      tod
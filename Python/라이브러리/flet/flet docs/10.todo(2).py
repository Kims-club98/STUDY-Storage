import flet as ft

def main(page: ft.Page):
    # title명, 너비/높이
    page.title = "Flet 할 일 목록"  
    page.window_width = 430  
    page.window_height = 300

    # tasks 리스트 변수 선언
    tasks = []

    # task에 추가하는 event
    def add_task(e):
        # task_input의 value를 nenw_task로 선언
        new_task = task_input.value
        #
        if new_task:
            task = ft.Checkbox(label=new_task, on_change=update_task)
            tasks.append(task)
            task_list.controls.append(task)
            task_input.value = ""
            page.update()

    def update_task(e):
        page.update()

    # 입력할 TextField박스와 button, list 출력
    task_input = ft.TextField(hint_text="새로운 할 일을 입력하세요", width=300)
    add_button = ft.ElevatedButton(text="추가", on_click=add_task)
    task_list = ft.Column() # Column이면 세로로 리스트를 만들어줌

    page.add(
        ft.Column(
            controls=[
                ft.Row(controls=[task_input, add_button]),
                task_list
            ]
        )
    )

ft.app(target=main)
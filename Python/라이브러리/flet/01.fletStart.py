# flet import 하기
import flet as ft

# +, - 버튼을 클릭하면 input 창이 증가하는 프로그램

def main(page: ft.Page):
    # 실행 파일 제목
    page.title = "Flet counter example"
    # 아키텍처의 위치(중간 ->)
    page.vertical_alignment = ft.MainAxisAlignment.CENTER # page는 기본적으로 위 -> 아래 Column(세로줄) 구조(MainisAlignment: 상하정렬)

    # input창, Text창에 기본값 0, 오른쪽에 위치, 너비 100
    input = ft.TextField(value="0", text_align=ft.TextAlign.RIGHT, width=100)

    # 마이너스 click
    def minus_click(e):
        input.value = str(int(input.value) - 1) # 클릭 시 input의 int값에서 -1 하고 str로 변환(input은 기본적으로 str)

    # 플러스 click
    def plus_click(e):
        input.value = str(int(input.value) + 1) # 클릭 시 input의 int값에서 +1 하고 str로 변환(input은 기본적으로 str)

    page.add(
        ft.Row(
            alignment=ft.MainAxisAlignment.CENTER,
            controls=[
                ft.IconButton(ft.Icons.REMOVE, on_click=minus_click),
                input,
                ft.IconButton(ft.Icons.ADD, on_click=plus_click),
            ],
        )
    )

ft.run(main)

# mainAxisAlignment: 컨트롤 버트 주축(Main Axis)으로 어떻게 배치할 것인가를 정의하는 속성

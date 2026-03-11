import flet as ft

def main(page: ft.Page):
  # 상단 title바
    page.title = "Flet 레이아웃 종합 공부방"
    # 다크모드(DARK), 일반모드 변경(LIGHT)
    page.theme_mode = ft.ThemeMode.LIGHT
    # 좌/상 면과의 거리(숫자가 클수록 가운데로 감)
    page.padding = 20

    # --- 1. Row & Column (선형 레이아웃) ---
    def row_column_view():
        # return을 하므로 출력함
        # Column은 구분을 해준다.
        return ft.Column([
            ft.Text("1. Row & Column", size=25, weight="bold"),
            ft.Text("Row: 가로 배치 / Column: 세로 배치"),
            ft.Row([
                # Container: 디자인의 핵심 (bgcolor/)
                ft.Container(ft.Text("1"), bgcolor="amber", width=50, height=50, alignment=ft.alignment.center),
                ft.Container(ft.Text("2"), bgcolor="orange", width=50, height=50, alignment=ft.alignment.center),
                ft.Container(ft.Text("3"), bgcolor="brown", width=50, height=50, alignment=ft.alignment.center),
            ], alignment=ft.MainAxisAlignment.CENTER), # 가로 중앙 정렬
            ft.Divider(),
        ])

    # --- 2. Container (만능 상자) ---
    def container_view():
        return ft.Column([
            ft.Text("2. Container", size=25, weight="bold"),
            ft.Text("여백(Padding), 테두리(Border), 배경색, 정렬 등을 조절합니다."),
            ft.Container(
                content=ft.Text("디자인된 박스"),
                margin=10,
                padding=20,
                alignment=ft.alignment.center,
                bgcolor="blue100",
                width=200,
                border=ft.border.all(2, "blue"),
                border_radius=ft.border_radius.all(15),
                shadow=ft.BoxShadow(blur_radius=10, color="grey"),
            ),
            ft.Divider(),
        ])

    # --- 3. Stack (겹치기) ---
    def stack_view():
        return ft.Column([
            ft.Text("3. Stack", size=25, weight="bold"),
            ft.Text("요소들을 포토샵 레이어처럼 겹쳐서 배치합니다."),
            ft.Stack([
                ft.Container(width=200, height=200, bgcolor="red"),
                ft.Container(width=150, height=150, bgcolor="blue", left=25, top=25),
                ft.Container(width=100, height=100, bgcolor="green", left=50, top=50),
                ft.Text("맨 위 글씨", color="white", left=65, top=85, weight="bold")
            ], width=200, height=200),
            ft.Divider(),
        ])

    # --- 4. GridView & ListView (목록과 격자) ---
    def scroll_view():
        return ft.Column([
            ft.Text("4. GridView (격자)", size=25, weight="bold"),
            ft.GridView(
                expand=False,
                runs_count=3, # 한 줄에 3개씩
                max_extent=150,
                child_aspect_ratio=1.0,
                spacing=10,
                run_spacing=10,
                controls=[
                    ft.Container(ft.Text(f"품목 {i}"), bgcolor="teal100", alignment=ft.alignment.center) 
                    for i in range(6)
                ],
                height=200,
            ),
        ])

    # --- 5. ResponsiveRow (반응형 레이아웃) ---
    def responsive_view():
        return ft.Column([
            ft.Text("5. ResponsiveRow", size=25, weight="bold"),
            ft.Text("창 크기에 따라 칸 수가 변합니다. (전체 12칸 기준)"),
            ft.ResponsiveRow([
                ft.Container(ft.Text("큰 화면: 4칸 / 작은 화면: 12칸"), bgcolor="purple100", col={"sm": 12, "md": 4}, height=50, alignment=ft.alignment.center),
                ft.Container(ft.Text("큰 화면: 4칸 / 작은 화면: 6칸"), bgcolor="pink100", col={"sm": 6, "md": 4}, height=50, alignment=ft.alignment.center),
                ft.Container(ft.Text("큰 화면: 4칸 / 작은 화면: 6칸"), bgcolor="yellow100", col={"sm": 6, "md": 4}, height=50, alignment=ft.alignment.center),
            ]),
        ])

    # 탭 메뉴 구성
    tabs = ft.Tabs(
        selected_index=0,
        animation_duration=300,
        tabs=[
            ft.Tab(text="기본 배치", icon="view_quilt", content=ft.Column([row_column_view(), container_view()], scroll=ft.ScrollMode.AUTO)),
            ft.Tab(text="겹치기/반응형", icon="layers", content=ft.Column([stack_view(), responsive_view()], scroll=ft.ScrollMode.AUTO)),
            ft.Tab(text="그리드", icon="grid_view", content=scroll_view()),
        ],
        expand=1,
    )

    page.add(tabs)

if __name__ == "__main__":
    ft.app(target=main)
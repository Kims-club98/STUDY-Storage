import flet as ft

def main(page:ft.Page):
  page.title = "Calculator App"
  result = ft.Text(value=0)

# 페이지에 버튼을 추가하기(계산기)
# control 버튼과 클릭버튼을 나눔
  page.add(
    ft.Row(controls = [result]),
    ft.Row(
      controls= [
        ft.Button("AC"),
        ft.Button("+/-"),
        ft.Button("%"),
        ft.Button("/"),
      ]
    ),
      ft.Row(
        controls= [
          ft.Button("7"),
          ft.Button("8"),
          ft.Button("9"),
          ft.Button("*"),
        ]
    ),
          ft.Row(
        controls= [
          ft.Button("4"),
          ft.Button("5"),
          ft.Button("6"),
          ft.Button("-"),
        ]
    ),
          ft.Row(
        controls= [
          ft.Button("1"),
          ft.Button("2"),
          ft.Button("3"),
          ft.Button("+"),
        ]
    ),
      ft.Row(
        controls= [
          ft.Button("0"),
          ft.Button("."),
          ft.Button("="),
        ]
    ),

  )

if __name__ == "__main__":
  ft.run(main)

  # Row: 1줄에 넣을 값을 의미
  # 그냥 Page.add 의 경우에는 줄바꿈이 됨
# 간단한 로그인 페이지 만들기

import flet as ft
from flet import TextField, Checkbox, ElevatedButton, Text, Row, Column
from flet_core.control_event import ControlEvent

def main(page: ft.Page) -> None:
  page.title = 'signup'
  page.vertical_alignment = ft.MainAxisAlignment.CENTER
  # 테마모드 설정(DARK, LGIHT)
  page.theme_mode = ft.ThemeMode.DARK
  # width, height 페이지 너비와 높이 지정
  page.window_width = 400
  page.window_height = 400
  # ★ 마우스로 임의조절 못하게 막는 기능이다. (False 시 창을 조정하지 못함)
  page.window_resizable = False

  # 필드 선언하기
  text_username = ft.TextField(label='username', text_align=ft.TextAlign.LEFT, width=300)
  text_password = ft.TextField(label='password', text_align=ft.TextAlign.LEFT, width=300)
  checkbox_signup = ft.Checkbox(label='나의 개인정보를 국외 반출에 동의합니다.', value=False) # 초기값은 체크되지 않음을 의미
  # ElevatedButton: 클릭 가능한 버튼을 만드는 기능(그림자 효과 나는 버튼 의미)
  # 조건을 충적하였을 경우(=> validate) disabled이 False(활성화)가 되도록 로직을 설계함
  button_submit = ft.ElevatedButton(text='sign up', width=200, disabled=True) # 초기 비활성화

  ######## 동작 함수 #########

  # vaildate -> 조건을 충족한다면 button_submit가 활성화 된다
  def validate(e: ControlEvent) -> None:
    # text_username.value ... check_signup.valuee가 모두 작성되었을 때(all[]) -> submit 버튼이 활성화됨
    if all([text_username.value, text_password.value, checkbox_signup.value]):
      button_submit.disabled = False
    else:
      button_submit.disabled = True
    ## 매우 중요 => 동작에서 Update가 되어야 반영이 된다.
    page.update()
  
  # 입력한 아이디, 비밀번호를 터미널에서 출력해준다(그냥 print -> 터미널 출력)
  def submit (e:ControlEvent) -> None:
    print('username: ', text_username.value)
    print('password: ', text_password.value)
    ## 페이지 초기화 => 이전에 작성된 username,... 를 지워준다.
    page.clean()
    page.add( # 성공 후 출력된는 내용 "초기 내역이 아닌, 조건 충적 시 출력되는 내용임"
      ft.Row(
        controls=[
          ft.Text(value=f'Welcome: {text_username.value}', size=20)
        ], alignment=ft.MainAxisAlignment.CENTER
      )
    )
  # ...on_change = vaildate는 각 값들의 변화 발생 시(입력, 클릭 시 -> 검사(validate)명령과 같음)
  checkbox_signup.on_change = validate
  text_username.on_change = validate
  text_password.on_change = validate
  button_submit.on_click = submit # 확인 버튼 (실제 sign up이라 쓰인 버튼) 클릭 시 submin 함수에 연결함

  # 출력 페이지
  page.add(
    ft.Row( # 정중앙에 두기 위해(alignment) 먼저 화면 너비를 먼저 차지하게 길게 판을 깔았다 생각하면 된다.
      controls=[
        Column( # 세로로 쌓았음을 의미 (아래로 출력이 됨)
          [text_username,
          text_password,
          checkbox_signup,
          button_submit]
        )
      ],alignment=ft.MainAxisAlignment.CENTER
    )
  )

if __name__ == '__main__':
  ft.app(target=main)


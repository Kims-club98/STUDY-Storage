# + - 버튼을 눌러 카운팅 되는 프로그램 만들기

import flet as ft
from flet import TextField # 작성이 가능한 text 필드
from flet_core.control_event import ControlEvent

def main(page:ft.Page) -> None:
  page.title = "증가하는 수"
  page.vertical_alignment = ft.MainAxisAlignment.CENTER # 객체의 위치(한가운데 설정)
  page.theme_mode = 'light' # 프로그램의 테마 모드 설정 (light, dark, 미설정 시 시스템설정에 맞춤)

  text_number = ft.TextField(value='0', text_align=ft.TextAlign.RIGHT, width=100) 
  # △ 내역 수정이 가능한 텍스트필드를 text_number로 지정
  # 초기값은 0, 글자 정렬은 오른쪽, TextField 크기는 100으로 지정

########## 동작 함수 ##########
  # 동작(클릭)이 되었을 경우 -> text_number.value의 값은 +-1이 됨(출력값은 str로 유지를 위해 int로 연산 후 str로 dataType 변환)
  def decrement(e: ControlEvent) -> None:
    text_number.value = str(int(text_number.value)-1)
    page.update()

  def increament(e: ControlEvent) -> None:
    text_number.value = str(int(text_number.value)+1)
    page.update()
  
######### 적용하기(초기설정 - 선언 - 동작 - 적용 순서) ###########
  page.add(
    # Row는 1라인에 쓰겠다는 것을 의미
    ft.Row(
      controls=[ # 한번에 여러 객체를 넣을 때 Controls=[]을 사용
      ft.IconButton(ft.icons.REMOVE, on_click=decrement), # 아이콘 버튼을 만듦(클릭 시 감소)
      text_number, # text_number를 넣음
      ft.IconButton(ft.icons.ADD, on_click=increament) # 위 REMOVE버튼과 동일(버튼명은 google icon에서 확인 가능)
      ],alignment=ft.MainAxisAlignment.CENTER # 객체의 Row에서의 정렬 -> 가운데로 설정 됨
    )
  )

## 테스트 수행을 위한 함수
if __name__ == '__main__':
  ## main을 실행하며, view설정을 통해 web_broweser로 확인 가능(아니면 그냥 별도 flet 프로그램에서 실행된다.)
  ft.app(target=main, view=ft.AppView.WEB_BROWSER)


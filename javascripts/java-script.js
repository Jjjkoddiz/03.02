document.addEventListener('DOMContentLoaded', function () {
  let myimg = document.querySelectorAll(
    '.divmoy, .ellipse, .rectangle7, .rectangle8, .circlegroup, .polygon1'
  );

  myimg.forEach(function (divi) {
    let dvij = false;
    let offsetX;
    let offsetY;

    divi.addEventListener('mousedown', function (event) {
      dvij = true;
      offsetX = event.clientX - divi.getBoundingClientRect().left;
      //   clientX - свойство горизонтальной координаты курсора
      offsetY = event.clientY - divi.getBoundingClientRect().top;
      //   clientY - свойства вертикальной координаты курсора

      function onMouseMove(event) {
        if (dvij) {
          let x = event.clientX - offsetX;
          let y = event.clientY - offsetX;

          divi.style.left = x + 'px';
          divi.style.top = y + 'px';
        }
      }

      function onMouseUp() {
        dvij = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  });
});

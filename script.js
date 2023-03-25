const markread = document.getElementsByClassName('mark-read');
const unreads = document.getElementsByClassName('notification-unread');

document.getElementsByClassName('notification-number')[0].innerHTML = `${unreads.length}`;

markread[0].addEventListener('click', () => {
  for (let i = 0; i < unreads.length; i++) {
    const unread = unreads[i];
    unread.style.backgroundColor = 'white';
    console.log(unread.children);
    // unread.children[1].children[1].style.display = 'none';
    unread.children[1].children[1].classList.add('read');
  }
  // unreads.forEach( unread => {
  //   console.log(unread);
  // });
  document.getElementsByClassName('notification-number')[0].innerHTML = "0";
})
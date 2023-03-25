markread = document.getElementsByClassName('mark-read');

markread[0].addEventListener('click', () => {
  unreads = document.getElementsByClassName('notification-unread');
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
})
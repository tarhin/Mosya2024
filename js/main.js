'use strict';

{
  // 背景画像のパララックス
  const image = new Rellax('.main-top-layer2');

  // ハンバーガーメニューの実装
  const menuIcon =  document.querySelector('.menu-button');
  // const closeIcon = document.querySelector('.close-icon');
  const hamburgerIcon = document.querySelector('.menu-icon.close');
  const navMenu = document.querySelector('.c-header-nav');
  let isFirstClick = true;

  menuIcon.addEventListener('click', () => {
    if (isFirstClick) {
      hamburgerIcon.classList.remove('close');
      hamburgerIcon.classList.add('show');
      menuIcon.classList.add('show');
      navMenu.classList.add('show');
      isFirstClick = false;
    } else {
      hamburgerIcon.classList.remove('show');
      hamburgerIcon.classList.add('close');
      menuIcon.classList.remove('show');
      navMenu.classList.remove('show');
      isFirstClick = true;
    }
  });

  // プラスアイコンをマウスホバーで変更
  const cNavItems = document.querySelectorAll('.c-nav-item');
  // let isFirstHover = true;

  cNavItems.forEach((cNavItem) => {

    // マウスが置かれたときの処理
    cNavItem.addEventListener('mouseover', () => {
      cNavItem.classList.remove('close');
      cNavItem.classList.add('show');
    });

    // マウスが離れた時の処理
    cNavItem.addEventListener('mouseleave', () => {
      cNavItem.classList.remove('show');
      cNavItem.classList.add('close');
    });
  });
}
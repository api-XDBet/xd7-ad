// Import stylesheets
import './style.css';

// 0. Import LIFF SDK
import liff from '@line/liff';

//Get the button
// Profile elements
// Button elements
const btnShare = document.getElementById('btnShare');

async function main() {
  // 2. liff.ready
  liff.ready.then(() => {
    if (liff.getOS() === 'android') {
      body.style.backgroundColor = '#888888';
    }
    if (liff.isInClient()) {
      getUserProfile();
    }
    btnShare.style.display = 'block';
  });
  // 3. Try a LIFF function
  // 4. Check where LIFF was opened
  // 5. Call getUserProfile()
  // 10. Show share button

  // 1. Initialize LIFF app)
  await liff.init({ liffId: '1656634847-3Gy5l2el' });
}
main();

// 6. Create getUserProfile()
// *7. Get email
async function getUserProfile() {
  const profile = await liff.getProfile();
  pictureUrl.src = profile.pictureUrl;
  userId.innerHTML = '<b>userId: </b>' + profile.userId;
  displayName.innerHTML = '<b>displayName: </b>' + profile.displayName;
  statusMessage.innerHTML = '<b>statusMessage: </b>' + profile.statusMessage;
  email.innerHTML = '<b>email: </b>' + liff.getDecodedIDToken().email;
}

// *8. Create shareMsg()
// async function shareMsg() {
//   const result = await liff.shareTargetPicker([
//     {
//       type: 'flex',
//       altText: 'พิเศษ!! กิจกรรมเครดิตฟรี',
//       contents: {
//         type: 'carousel',
//         contents: [
//           {
//             type: 'bubble',
//             hero: {
//               type: 'image',
//               url: 'https://cdn.discordapp.com/attachments/937407559416029189/987950994514141214/promotion_11.png',
//               size: '100%',
//               aspectRatio: '6:3.5',
//               aspectMode: 'cover',
//               backgroundColor: '#212121FF',
//               margin: 'none',
//               gravity: 'bottom',
//               align: 'center',
//             },
//             body: {
//               type: 'box',
//               layout: 'vertical',
//               spacing: 'sm',
//               backgroundColor: '#212121FF',
//               borderColor: '#212121FF',
//               contents: [
//                 {
//                   type: 'text',
//                   text: 'ด่วน!!! สมาชิกใหม่',
//                   weight: 'bold',
//                   size: 'xxl',
//                   color: '#E1E1E1FF',
//                   wrap: true,
//                   contents: [],
//                 },
//                 {
//                   type: 'box',
//                   layout: 'baseline',
//                   backgroundColor: '#212121FF',
//                   borderColor: '#212121FF',
//                   contents: [
//                     {
//                       type: 'text',
//                       text: 'ฝากครั้งแรก',
//                       weight: 'bold',
//                       size: 'xl',
//                       color: '#E1E1E1FF',
//                       flex: 0,
//                       gravity: 'center',
//                       wrap: true,
//                       style: 'normal',
//                       contents: [],
//                     },
//                   ],
//                 },
//                 {
//                   type: 'text',
//                   text: '* โบนัสสูงสุด 9,999 บาท',
//                   weight: 'bold',
//                   size: 'sm',
//                   color: '#FF0600FF',
//                   contents: [],
//                 },
//               ],
//             },
//             footer: {
//               type: 'box',
//               layout: 'horizontal',
//               position: 'relative',
//               backgroundColor: '#212121FF',
//               borderColor: '#212121FF',
//               contents: [
//                 {
//                   type: 'box',
//                   layout: 'horizontal',
//                   borderWidth: '1px',
//                   backgroundColor: '#FFFFFFFF',
//                   borderColor: '#FFFFFFFF',
//                   cornerRadius: 'xxl',
//                   contents: [
//                     {
//                       type: 'button',
//                       action: {
//                         type: 'uri',
//                         label: 'สมัครสมาชิก',
//                         uri: 'https://m.xd7bet.com/dashboard/login?id',
//                       },
//                       color: '#960000FF',
//                       height: 'sm',
//                       style: 'primary',
//                     },
//                   ],
//                 },
//                 {
//                   type: 'box',
//                   layout: 'horizontal',
//                   borderWidth: '1px',
//                   backgroundColor: '#FFFFFFFF',
//                   borderColor: '#FFFFFFFF',
//                   cornerRadius: 'xxl',
//                   contents: [
//                     {
//                       type: 'button',
//                       action: {
//                         type: 'uri',
//                         label: 'ติดต่อแอดมิน',
//                         uri: 'https://lin.ee/d4YoV9X',
//                       },
//                       color: '#02A200FF',
//                       height: 'sm',
//                       style: 'primary',
//                     },
//                   ],
//                 },
//               ],
//               spacing: 'sm',
//             },
//           },
//           {
//             type: 'bubble',
//             hero: {
//               type: 'image',
//               url: 'https://cdn.discordapp.com/attachments/937407559416029189/987950993692037181/promotion_2.png',
//               margin: 'none',
//               size: 'full',
//               aspectRatio: '6:3.5',
//               aspectMode: 'cover',
//               backgroundColor: '#212121FF',
//               align: 'center',
//               gravity: 'bottom',
//             },
//             body: {
//               type: 'box',
//               layout: 'vertical',
//               spacing: 'sm',
//               backgroundColor: '#212121FF',
//               borderColor: '#212121FF',
//               contents: [
//                 {
//                   type: 'text',
//                   text: 'ฝากแรกของวัน',
//                   weight: 'bold',
//                   size: 'xxl',
//                   color: '#E1E1E1FF',
//                   wrap: true,
//                   contents: [],
//                 },
//                 {
//                   type: 'box',
//                   layout: 'baseline',
//                   backgroundColor: '#212121FF',
//                   borderColor: '#212121FF',
//                   contents: [
//                     {
//                       type: 'text',
//                       text: 'รับเพิ่ม 20%',
//                       weight: 'bold',
//                       size: 'xl',
//                       color: '#E1E1E1FF',
//                       flex: 0,
//                       gravity: 'center',
//                       wrap: true,
//                       style: 'normal',
//                       contents: [],
//                     },
//                   ],
//                 },
//                 {
//                   type: 'text',
//                   text: '* โบนัสสูงสุด 2,000 บาท',
//                   weight: 'bold',
//                   size: 'sm',
//                   color: '#FF0600FF',
//                   contents: [],
//                 },
//               ],
//             },
//             footer: {
//               type: 'box',
//               layout: 'horizontal',
//               spacing: 'sm',
//               position: 'relative',
//               backgroundColor: '#212121FF',
//               borderColor: '#212121FF',
//               contents: [
//                 {
//                   type: 'box',
//                   layout: 'horizontal',
//                   borderWidth: '1px',
//                   backgroundColor: '#FFFFFFFF',
//                   borderColor: '#FFFFFFFF',
//                   cornerRadius: 'xxl',
//                   contents: [
//                     {
//                       type: 'button',
//                       action: {
//                         type: 'uri',
//                         label: 'สมัครสมาชิก',
//                         uri: 'https://m.xd7bet.com/dashboard/login?id',
//                       },
//                       color: '#960000FF',
//                       height: 'sm',
//                       style: 'primary',
//                     },
//                   ],
//                 },
//                 {
//                   type: 'box',
//                   layout: 'horizontal',
//                   borderWidth: '1px',
//                   backgroundColor: '#FFFFFFFF',
//                   borderColor: '#FFFFFFFF',
//                   cornerRadius: 'xxl',
//                   contents: [
//                     {
//                       type: 'button',
//                       action: {
//                         type: 'uri',
//                         label: 'ติดต่อแอดมิน',
//                         uri: 'https://lin.ee/d4YoV9X',
//                       },
//                       color: '#02A200FF',
//                       height: 'sm',
//                       style: 'primary',
//                     },
//                   ],
//                 },
//               ],
//             },
//           },
//           {
//             type: 'bubble',
//             hero: {
//               type: 'image',
//               url: 'https://cdn.discordapp.com/attachments/937407559416029189/987950994220535808/promotion_9.png',
//               margin: 'none',
//               size: 'full',
//               aspectRatio: '6:3.5',
//               aspectMode: 'cover',
//               backgroundColor: '#212121FF',
//               align: 'center',
//               gravity: 'bottom',
//             },
//             body: {
//               type: 'box',
//               layout: 'vertical',
//               spacing: 'sm',
//               backgroundColor: '#212121FF',
//               borderColor: '#212121FF',
//               contents: [
//                 {
//                   type: 'text',
//                   text: 'เพียงแนะนำเพื่อน',
//                   weight: 'bold',
//                   size: 'xxl',
//                   color: '#E1E1E1FF',
//                   wrap: true,
//                   contents: [],
//                 },
//                 {
//                   type: 'box',
//                   layout: 'baseline',
//                   backgroundColor: '#212121FF',
//                   borderColor: '#212121FF',
//                   contents: [
//                     {
//                       type: 'text',
//                       text: 'รับรายได้ 5%',
//                       weight: 'bold',
//                       size: 'xl',
//                       color: '#E1E1E1FF',
//                       flex: 0,
//                       gravity: 'center',
//                       wrap: true,
//                       style: 'normal',
//                       contents: [],
//                     },
//                   ],
//                 },
//                 {
//                   type: 'text',
//                   text: '* ชวนได้ไม่จำกัด',
//                   weight: 'bold',
//                   size: 'sm',
//                   color: '#FF0600FF',
//                   contents: [],
//                 },
//               ],
//             },
//             footer: {
//               type: 'box',
//               layout: 'horizontal',
//               spacing: 'sm',
//               position: 'relative',
//               backgroundColor: '#212121FF',
//               borderColor: '#212121FF',
//               contents: [
//                 {
//                   type: 'box',
//                   layout: 'horizontal',
//                   borderWidth: '1px',
//                   backgroundColor: '#FFFFFFFF',
//                   borderColor: '#FFFFFFFF',
//                   cornerRadius: 'xxl',
//                   contents: [
//                     {
//                       type: 'button',
//                       action: {
//                         type: 'uri',
//                         label: 'สมัครสมาชิก',
//                         uri: 'https://m.xd7bet.com/dashboard/login?id',
//                       },
//                       color: '#960000FF',
//                       height: 'sm',
//                       style: 'primary',
//                     },
//                   ],
//                 },
//                 {
//                   type: 'box',
//                   layout: 'horizontal',
//                   borderWidth: '1px',
//                   backgroundColor: '#FFFFFFFF',
//                   borderColor: '#FFFFFFFF',
//                   cornerRadius: 'xxl',
//                   contents: [
//                     {
//                       type: 'button',
//                       action: {
//                         type: 'uri',
//                         label: 'ติดต่อแอดมิน',
//                         uri: 'https://lin.ee/d4YoV9X',
//                       },
//                       color: '#02A200FF',
//                       height: 'sm',
//                       style: 'primary',
//                     },
//                   ],
//                 },
//               ],
//             },
//           },
//         ],
//       },
//     },
//   ]);
//   if (result) {
//     alert('ทำรายการสำเร็จ');
//   } else {
//     alert('Close');
//   }
//   liff.closeWindow();
// }

// var mybutton = document.getElementById('myTopBtn');

/* When the user scrolls down 20px from the top of the document, show the button */
// window.onscroll = function () {
//   scrollFunction();
// };
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = 'block';
//   } else {
//     mybutton.style.display = 'none';
//   }
// }
// myTopBtn.onclick = function () {
//   topFunction();
// };
/* When the user clicks on the button, scroll to the top of the document */
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// 9. Add event listener to share button
// btnShare.onclick = () => {
//   shareMsg();
// };

/* Place your JavaScript in this file */
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName('mySlides');
//   let dots = document.getElementsByClassName('dot');
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none';
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '');
//   }
//   slides[slideIndex - 1].style.display = 'block';
//   dots[slideIndex - 1].className += ' active';
//   setTimeout(showSlides, 4000); // [ กำหนดเวลาเปลี่ยนรูปสไลด์ *หน่วยเป็น ms. เช่น 1000ms. = 1 sec.* ]
// }

// const signUpbtn = document.getElementById('signUpbtn');

// signUpbtn.onclick = () => {
//   openWindow();
// };
// async function openWindow() {
//   liff.openWindow({
//     url: 'https://m.xd7bet.com/login?id',
//     external: true,
//   });
//   liff.closeWindow();
// }

 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.


 function onYouTubeIframeAPIReady() {
     //  <div id="player"></div> 의 #player를 의미
     new YT.Player('player', {

         videoId: 'An6LvWQuj_8', //영상 url의 id값
         playerVars: {
             autoplay: true,
             loop: true,
             playlist: 'An6LvWQuj_8' //loop 반복 재생할 경우, 다시 반복 재생할 유튜브 영상의 id 목록
         },
         events: { //위 영상의 준비가 된다면 아래 명령을 실행하겠다.
             onReady: function(event) { //event라는 매개 변수의 이름으로 데이터를 받아 함수 내부에서 활용하여 사용 가능
                 event.target.mute() //음소거
             }
         }
     });
 }

 // 4. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
     event.target.playVideo();
 }

 // 5. The API calls this function when the player's state changes.
 //    The function indicates that when playing a video (state=1),
 //    the player should play for six seconds and then stop.
 var done = false;

 function onPlayerStateChange(event) {
     if (event.data == YT.PlayerState.PLAYING && !done) {
         setTimeout(stopVideo, 6000);
         done = true;
     }
 }

 function stopVideo() {
     player.stopVideo();
 }
document.addEventListener("DOMContentLoaded", function() {
    var btn = document.getElementById("btn");
    var light = document.getElementById("light");
    btn.addEventListener("click", function() {
        toggleLight();
        playAudio(); // Panggil fungsi playAudio saat tombol ditekan
    });
    function toggleLight() {
        btn.classList.toggle("active");
        light.classList.toggle("on");
    }
    function playAudio() {
        var audio = document.getElementById("audio");
        audio.play(); // Mulai pemutaran audio
    }
});

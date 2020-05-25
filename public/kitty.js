const container = document.getElementById('imagePreview');
const img = container.querySelector(".image-preview__img");

const ansNo = document.getElementById('answerNo');
const ansYes = document.getElementById('answerYes');
const wait = document.getElementById('waitAnim');


inpFile.addEventListener('change', function() {
    cocoSsd.load().then(model => {
        model.detect(img).then(predictions => {
            wait.style.display = "none";

            if(predictions.length == 0) {
                ansYes.style.display = "none";
                ansNo.style.display = "block";
            } else {
                if(predictions[0].class == "cat") {
                    ansYes.style.display = "block";
                    ansNo.style.display = "none";
                } else {
                    ansYes.style.display = "none";
                    ansNo.style.display = "block";
                }
            }
        });
    });
});

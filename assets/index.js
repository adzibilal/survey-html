const radioButtons = document.getElementsByName("stars");

radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", () => {
        const selectedValue = document.querySelector('input[name="stars"]:checked').value;
        console.log("Selected value:", selectedValue);
    });
});

const radioButtonsSurvey = document.querySelectorAll('.rating-survey input[type="radio"]');
const questions = document.querySelectorAll('.question');

radioButtonsSurvey.forEach(radioButton => {
    radioButton.addEventListener('change', function() {
        const label = this.parentElement;
        const labels = this.closest('.rating-survey').querySelectorAll('label');
        labels.forEach(label => {
            label.classList.remove('selected');
        });
        label.classList.add('selected');
        const value = parseInt(this.value);
        const textArea = this.closest('.question').querySelector('.reason');
        if (value <= 3) {
            textArea.style.display = 'block';
        } else {
            textArea.style.display = 'none';
        }
    });
});
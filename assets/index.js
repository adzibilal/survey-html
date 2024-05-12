const radioButtons = document.getElementsByName("stars");

radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", () => {
        const selectedValue = document.querySelector('input[name="stars"]:checked').value;
        console.log("Selected value:", selectedValue);
    });
});


// Ambil semua elemen input radio dalam kelas "rating-survey"
const radioButtonsSurvey = document.querySelectorAll('.rating-survey input[type="radio"]');

// Loop melalui setiap elemen input radio
radioButtonsSurvey.forEach(radioButton => {
    // Tambahkan event listener untuk setiap elemen input radio
    radioButton.addEventListener('change', function() {
        // Dapatkan elemen label terkait dengan input radio yang dipilih
        const label = this.parentElement;

        // Dapatkan semua elemen label dalam kelas "rating-survey" yang terkait dengan input radio yang dipilih
        const labels = this.closest('.rating-survey').querySelectorAll('label');

        // Loop melalui setiap elemen label dan hapus kelas "selected"
        labels.forEach(label => {
            label.classList.remove('selected');
        });

        // Tambahkan kelas "selected" ke label yang terkait dengan input radio yang dipilih
        label.classList.add('selected');
    });
});
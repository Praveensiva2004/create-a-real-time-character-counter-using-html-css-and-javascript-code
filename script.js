document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const charCount = document.getElementById('char-count');

    textInput.addEventListener('input', function() {
        charCount.textContent = textInput.value.length;
    });
});

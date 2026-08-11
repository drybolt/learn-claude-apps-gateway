// Shared quiz widget logic. Each .quiz element needs data-correct="<value>" on the correct <input>.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.quiz').forEach((quiz) => {
    const inputs = quiz.querySelectorAll('input[type="radio"]');
    const feedback = quiz.querySelector('.feedback');
    inputs.forEach((input) => {
      input.addEventListener('change', () => {
        const correct = input.hasAttribute('data-correct');
        feedback.textContent = correct
          ? (feedback.dataset.correctText || '정답입니다.')
          : (feedback.dataset.incorrectText || '다시 생각해보세요.');
        feedback.classList.remove('correct', 'incorrect', 'show');
        feedback.classList.add('show', correct ? 'correct' : 'incorrect');
      });
    });
  });
});

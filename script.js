// script.js
document.querySelectorAll('.like-btn').forEach(button => {
  button.addEventListener('click', function () {
    const likeCount = this.parentElement.querySelector('span')
    const currentLikes = parseInt(likeCount.textContent.match(/\d+/)[0])
    likeCount.textContent = `❤️ ${currentLikes + 1} Likes`
    this.style.background = '#4CAF50' // Green on click
    setTimeout(() => {
      this.style.background = '#ff4757';}, 300)
  })
})
